"use client";

import React, { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { usePDF } from "react-to-pdf";
import toast, { Toaster } from "react-hot-toast";
import { X, Download } from "lucide-react";

const supabase = createClient(
  "https://zhfsqnuwsqxfnlsarxci.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoZnNxbnV3c3F4Zm5sc2FyeGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxMjM5MzYsImV4cCI6MjA0ODY5OTkzNn0.p0Ca61wV-4xZ2Zx7XdaAjVtMaq4HxSjnatvKn7nQXkE"
);

const InvoicesList = () => {
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedDueDate, setSelectedDueDate] = useState("");
  const [searchInvoiceNumber, setSearchInvoiceNumber] = useState("");
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [editInvoice, setEditInvoice] = useState(null);
  const [selectedInstallment, setSelectedInstallment] = useState(null);

  const invoiceReceiptRef = useRef();
  const installmentReceiptRef = useRef();
  const { toPDF, targetRef } = usePDF({ filename: "invoice.pdf" });

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    const { data, error } = await supabase
      .from("invoices")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load invoices: " + error.message);
      console.error("Fetch invoices error:", error);
      return;
    }

    setInvoices(data);
    setFilteredInvoices(data);
    toast.success("Invoices loaded successfully!");
  };

  const handleFilter = () => {
    const filtered = invoices.filter((invoice) => {
      const dueDateMatch = selectedDueDate
        ? new Date(invoice.due_date).toISOString().split("T")[0] ===
          selectedDueDate
        : true;
      const clientMatch = selectedClient
        ? invoice.bill_to.toLowerCase().includes(selectedClient.toLowerCase())
        : true;
      const invoiceNumberMatch = searchInvoiceNumber
        ? invoice.invoice_number
            .toLowerCase()
            .includes(searchInvoiceNumber.toLowerCase())
        : true;
      return dueDateMatch && clientMatch && invoiceNumberMatch;
    });
    setFilteredInvoices(filtered);
    toast.success("Invoices filtered successfully!");
  };

  const InvoiceReceiptModal = ({ invoice, onClose }) => {
    const [installments, setInstallments] = useState([]);
    const [selectedInstallmentIndex, setSelectedInstallmentIndex] =
      useState(null);
    const [showFullReceipt, setShowFullReceipt] = useState(true);
  
    useEffect(() => {
      const fetchInstallments = async () => {
        const { data, error } = await supabase
          .from("installments")
          .select("*")
          .eq("invoice_id", invoice.id)
          .order("payment_date", { ascending: true });
        if (error) {
          console.error("Error fetching installments:", error);
          return;
        }
        setInstallments(data || []);
      };
      fetchInstallments();
    }, [invoice.id]);

    const totalPaid = installments.reduce((sum, inst) => sum + inst.amount, 0);
    const discount = invoice.discount || 0;
    const remainingFee = invoice.total - totalPaid;
    const nextDueDate =
      invoice.due_date ||
      new Date(new Date().setMonth(new Date().getMonth() + 1))
        .toISOString()
        .split("T")[0];
        .split("T")[0];

    const handleShowFullReceipt = () => {
      setSelectedInstallmentIndex(null);
      setShowFullReceipt(true);
    };

    const handleShowInstallment = (index) => {
      setSelectedInstallmentIndex(index);
      setShowFullReceipt(false);
    };

    return (
      <div className="fixed inset-0 bg-gray-900/80 flex items-center justify-center z-50 p-6 overflow-y-auto">
        <div className="bg-white max-w-5xl w-full flex rounded-lg shadow-xl overflow-hidden pt-16">
          <div className="w-64 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto h-[80vh]">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 bg-blue-50 p-2 rounded-t-md">
              Payment Records
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleShowFullReceipt}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    showFullReceipt
                      ? "bg-blue-100 text-blue-800"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Complete Payment Summary
                </button>
              </li>
              {installments.map((inst, index) => (
                <li key={inst.id}>
                  <button
                    onClick={() => handleShowInstallment(index)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      selectedInstallmentIndex === index && !showFullReceipt
                        ? "bg-blue-100 text-blue-800"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Installment {index + 1} - ₹{inst.amount.toLocaleString()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 p-6 relative">
            <div
              ref={targetRef}
              className="bg-white mt-2 p-8 w-[210mm] border-2 border-gray-800 mx-auto relative"
            >
              <div className="border-b-2 border-gray-300 pb-2 mb-4 bg-blue-50 p-4 rounded-t-md">
                <div className="flex justify-between items-center">
                  <div>
                    <img
                      src="/mm.png"
                      alt="Company Logo"
                      className="h-32 w-32 object-contain"
                    />
                    <h2 className="text-xl font-bold text-blue-900 mt-2">
                      VARCAS NEXGEN
                    </h2>
                    <p className="text-xs text-gray-600">
                      Digital Marketing & IT Services
                    </p>
                  </div>
                  <div className="text-right">
                    <h1 className="text-4xl font-bold text-blue-800 mb-2">
                      INVOICE
                    </h1>
                    <div className="space-y-1 text-xs">
                      <p>
                        <strong>Invoice No:</strong> {invoice.invoice_number}
                      </p>
                      <p>
                        <strong>Date of Issue:</strong>{" "}
                        {new Date(
                          invoice.issue_date || "2025-03-26"
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                <div>
                  <p className="font-medium text-gray-600">Bill To:</p>
                  <p className="font-semibold text-gray-800 mb-2">
                    {invoice.bill_to}
                  </p>
                  <p className="font-medium text-gray-600">Phone No:</p>
                  <p className="font-semibold text-gray-800">
                    {invoice.po_number}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-600">Next Due Date:</p>
                  <p className="text-gray-800">
                    {new Date(nextDueDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {showFullReceipt ? (
                <>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 bg-gray-100 p-2 rounded-t-md">
                      Service Summary
                    </h3>
                    <table className="w-full border-collapse text-xs">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border p-1 text-left font-medium text-gray-700">
                            Description
                          </th>
                          <th className="border p-1 text-right font-medium text-gray-700">
                            Quantity
                          </th>
                          <th className="border p-1 text-right font-medium text-gray-700">
                            Rate (₹)
                          </th>
                          <th className="border p-1 text-right font-medium text-gray-700">
                            Amount (₹)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoice.items.map((item, index) => (
                          <tr key={index}>
                            <td className="border p-1 text-gray-600">
                              {item.description}
                            </td>
                            <td className="border p-1 text-right text-gray-800">
                              {item.quantity}
                            </td>
                            <td className="border p-1 text-right text-gray-800">
                              ₹{item.rate.toLocaleString()}
                            </td>
                            <td className="border p-1 text-right text-gray-800">
                              ₹{(item.quantity * item.rate).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                        <tr className="font-bold bg-gray-50">
                          <td colSpan="3" className="border p-1 text-gray-700">
                            Subtotal
                          </td>
                          <td className="border p-1 text-right text-gray-800">
                            ₹{invoice.subtotal.toLocaleString()}
                          </td>
                        </tr>
                        {discount > 0 && (
                          <tr className="font-semibold bg-gray-50">
                            <td
                              colSpan="3"
                              className="border p-1 text-gray-700"
                            >
                              Discount
                            </td>
                            <td className="border p-1 text-right text-green-600">
                              -₹{discount.toLocaleString()}
                            </td>
                          </tr>
                        )}
                        <tr className="font-bold bg-gray-50">
                          <td colSpan="3" className="border p-1 text-gray-700">
                            Total Fee
                          </td>
                          <td className="border p-1 text-right text-red-600">
                            ₹{invoice.total.toLocaleString()}
                          </td>
                        </tr>
                        <tr className="font-semibold bg-gray-50">
                          <td colSpan="3" className="border p-1 text-gray-700">Discount</td>
                          <td className="border p-1 text-right text-green-600">
                            -₹{discount.toLocaleString()}
                          </td>
                        </tr>
                      )}
                      <tr className="font-bold bg-gray-50">
                        <td colSpan="3" className="border p-1 text-gray-700">Total Fee</td>
                        <td className="border p-1 text-right text-red-600">
                          ₹{invoice.total.toLocaleString()}
                        </td>
                      </tr>
                      <tr className="font-semibold bg-gray-50">
                        <td colSpan="3" className="border p-1 text-gray-700">Remaining Fee</td>
                        <td className="border p-1 text-right text-red-600">
                          ₹{remainingFee.toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                  {installments.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-800 mb-2 bg-gray-100 p-2 rounded-t-md">
                        Installment Payment History
                      </h3>
                      <table className="w-full border-collapse text-xs">
                        <thead>
                          <tr className="bg-blue-100">
                            <th className="border p-1 text-left font-medium text-gray-700">
                              Installment
                            </th>
                            <th className="border p-1 text-right font-medium text-gray-700">
                              Date
                            </th>
                            <th className="border p-1 text-right font-medium text-gray-700">
                              Amount (₹)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {installments.map((inst, index) => (
                            <tr key={inst.id}>
                              <td className="border p-1 text-gray-600">
                                Installment {index + 1}
                              </td>
                              <td className="border p-1 text-right text-gray-800">
                                {new Date(
                                  inst.payment_date
                                ).toLocaleDateString()}
                              </td>
                              <td className="border p-1 text-right text-gray-800">
                                ₹{inst.amount.toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              ) : (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 bg-gray-100 p-2 rounded-t-md">
                    Installment {selectedInstallmentIndex + 1} Details
                  </h3>
                  <table className="w-full border-collapse text-xs">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border p-1 text-left font-medium text-gray-700">
                          Description
                        </th>
                        <th className="border p-1 text-right font-medium text-gray-700">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-1 text-gray-600">
                          Installment {selectedInstallmentIndex + 1} Amount
                        </td>
                        <td className="border p-1 text-right text-gray-800">
                          ₹
                          {installments[
                            selectedInstallmentIndex
                          ].amount.toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-1 text-gray-600">Date</td>
                        <td className="border p-1 text-right text-gray-800">
                          {new Date(
                            installments[selectedInstallmentIndex].payment_date
                          ).toLocaleDateString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-1 text-gray-600">
                          Total Paid to Date
                        </td>
                        <td className="border p-1 text-right text-gray-800">
                          ₹
                          {installments
                            .slice(0, selectedInstallmentIndex + 1)
                            .reduce((sum, inst) => sum + inst.amount, 0)
                            .toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-1 text-gray-600">
                          Remaining Fee
                        </td>
                        <td className="border p-1 text-right text-red-600">
                          ₹
                          {(
                            invoice.total -
                            installments
                              .slice(0, selectedInstallmentIndex + 1)
                              .reduce((sum, inst) => sum + inst.amount, 0)
                          ).toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              <div className="border p-3 rounded-lg mb-2">
                <h3 className="text-sm font-semibold text-gray-800 border-b pb-2 mb-3 bg-gray-100 p-2 rounded-t-md">
                  Notes & Terms:
                </h3>
                {invoice.notes && (
                  <p className="text-left text-xs text-gray-600 mt-2">
                    {invoice.notes}
                  </p>
                )}
                {invoice.terms && (
                  <p className="text-left text-xs text-gray-600 mt-2">
                    {invoice.terms}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border p-3 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-800 border-b pb-2 mb-3 bg-gray-100 p-2 rounded-t-md">
                    Scan to Pay
                  </h3>
                  <div className="flex justify-center items-center">
                    <img
                      src="/qr.jpg"
                      alt="QR Code"
                      className="h-48 w-48 object-contain"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-2">
                    Scan QR Code for Instant Payment
                  </p>
                </div>
                <div className="border p-3 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-800 border-b pb-2 mb-3 bg-gray-100 p-2 rounded-t-md">
                    Payment Details
                  </h3>
                  <table className="w-full text-xs">
                    <tbody>
                      <tr className="border-b">
                        <td className="p-1 text-gray-700">Account Name</td>
                        <td className="p-1 text-right">Varcas Nexgen</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1 text-gray-700">Bank Name</td>
                        <td className="p-1 text-right">HDFC Bank</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1 text-gray-700">Account Number</td>
                        <td className="p-1 text-right">50200100622535</td>
                      </tr>
                      <tr>
                        <td className="p-1 text-gray-700 flex items-center">
                          UPI ID
                          <span className="ml-2 text-blue-600 font-bold">
                            ⚡
                          </span>
                        </td>
                        <td className="p-1 text-right">8602758854@hdfcbank</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="text-xs text-gray-500 border-t pt-2 text-right bg-gray-50 p-2 rounded-b-md">
                <p>Official receipt by VARCASNEXGEN.</p>
                <p>Retain for records.</p>
                <p>info@varcasnexgen.com </p>
                <p>A/L 163 housing board colony, pithampur</p>
                +91 8602758854
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => toPDF()}
                className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition"
              >
                <Download size={16} /> Download PDF
              </button>
              <button
                onClick={onClose}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-300 transition"
              >
                <X size={16} /> Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const InstallmentReceiptModal = ({ installment, invoice, onClose }) => {
    const { toPDF, targetRef } = usePDF({
      filename: "installment-receipt.pdf",
    });

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          ref={targetRef}
          className="bg-white rounded-lg shadow-2xl w-[210mm] p-8"
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">Exceed Junior Coaching</h1>
              <p className="text-sm">Fee Receipt</p>
              <p className="text-sm">Office Copy</p>
            </div>
            <div className="text-right">
              <p className="text-sm">
                Receipt No: {installment.receipt_number}
              </p>
              <p className="text-sm">
                Date: {new Date(installment.payment_date).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p>
                <strong>From:</strong> {invoice.bill_to}
              </p>
              <p>
                <strong>Adm No:</strong> {invoice.po_number || "N/A"}
              </p>
              <p>
                <strong>Class:</strong> {invoice.notes || "N/A"}
              </p>
              <p>
                <strong>Status:</strong> {invoice.terms || "N/A"}
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Installment Details</h3>
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="p-2">Description</td>
                  <td className="p-2 text-right">
                    Exceed Junior Coaching Fee - Installment
                  </td>
                </tr>
                <tr>
                  <td className="p-2">Total Fee:</td>
                  <td className="p-2 text-right">
                    ₹{invoice.total.toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <td className="p-2">Total Paid:</td>
                  <td className="p-2 text-right">
                    ₹{invoice.amount_paid.toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-red-600">Remaining Fee:</td>
                  <td className="p-2 text-right text-red-600">
                    ₹{invoice.balance_due.toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <td className="p-2">Installment Amount:</td>
                  <td className="p-2 text-right">
                    ₹{installment.amount.toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <td className="p-2">Payment Date:</td>
                  <td className="p-2 text-right">
                    {new Date(installment.payment_date).toLocaleDateString()}
                  </td>
                </tr>
                <tr>
                  <td className="p-2">Next Due Date:</td>
                  <td className="p-2 text-right">
                    {new Date(invoice.due_date).toLocaleDateString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-right mb-4">
            <p>
              <strong>Signatory:</strong> EJC
            </p>
            <p>Official receipt by EJC. Retain for records.</p>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={() => toPDF()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download PDF
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  const handleAddInstallment = async (invoiceId, installmentInput) => {
    const installmentAmount = parseFloat(installmentInput || 0);
    const invoice = invoices.find((inv) => inv.id === invoiceId);

    if (!installmentAmount || installmentAmount <= 0) {
      toast.error("Please enter a valid installment amount");
      return;
    }

    if (installmentAmount > invoice.balance_due) {
      toast.error("Installment amount cannot exceed balance due");
      return;
    }

    try {
      const receiptNumber = `REC-${Date.now()}`;
      const newBalanceDue = invoice.balance_due - installmentAmount;
      const newAmountPaid = (invoice.amount_paid || 0) + installmentAmount;

      const { error: upsertError } = await supabase.from("invoices").upsert(
        {
          id: invoiceId,
          invoice_number: invoice.invoice_number,
          bill_to: invoice.bill_to,
          due_date: invoice.due_date,
          balance_due: newBalanceDue,
          amount_paid: newAmountPaid,
          discount: invoice.discount || 0,
          subtotal: invoice.subtotal || 0,
          total: invoice.total || 0,
          ship_to: invoice.ship_to || "",
          payment_terms: invoice.payment_terms || "",
          po_number: invoice.po_number || "",
          items: invoice.items || [],
          notes: invoice.notes || "",
          terms: invoice.terms || "",
          tax: invoice.tax || 0,
          shipping: invoice.shipping || 0,
          created_at: invoice.created_at || new Date().toISOString(),
        },
        { onConflict: "id" }
      );

      if (upsertError)
        throw new Error(`Failed to upsert invoice: ${upsertError.message}`);

      const { data: installmentData, error: insertError } = await supabase
        .from("installments")
        .insert({
          invoice_id: invoiceId,
          amount: installmentAmount,
          payment_date: new Date().toISOString(),
          receipt_number: receiptNumber,
          created_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (insertError)
        throw new Error(`Failed to insert installment: ${insertError.message}`);

      toast.success("Installment added successfully!");
      await fetchInvoices();
      setEditInvoice((prev) => ({
        ...prev,
        amount_paid: newAmountPaid,
        balance_due: newBalanceDue,
      }));
      return installmentData; // Return the new installment for use in modal
    } catch (error) {
      toast.error(error.message);
      console.error("Error in handleAddInstallment:", error);
    }
  };

  const EditModal = ({ invoice, onClose }) => {
    const [installments, setInstallments] = useState([]);
    const [formData, setFormData] = useState({
      discount: invoice.discount || 0,
      installment: "",
      subtotal: invoice.subtotal || 0,
      total: invoice.total || 0,
      balanceDue: invoice.balance_due || 0,
      amountPaid: invoice.amount_paid || 0,
    });

    useEffect(() => {
      const fetchInstallments = async () => {
        const { data, error } = await supabase
          .from("installments")
          .select("*")
          .eq("invoice_id", invoice.id)
          .order("payment_date", { ascending: false });

        if (error) {
          console.error("Error fetching installments:", error);
          return;
        }
        setInstallments(data || []);
      };
      fetchInstallments();
    }, [invoice.id]);

    const handleDiscountChange = (e) => {
      const discount = parseFloat(e.target.value) || 0;
      const newTotal =
        invoice.subtotal -
        discount +
        (invoice.tax || 0) +
        (invoice.shipping || 0);
      const newBalanceDue = newTotal - formData.amountPaid;

      setFormData((prev) => ({
        ...prev,
        discount,
        total: newTotal,
        balanceDue: newBalanceDue,
      }));
    };

    const handleInstallmentChange = (e) => {
      setFormData((prev) => ({ ...prev, installment: e.target.value }));
    };

    const handleSaveChanges = async () => {
      try {
        const { error } = await supabase.from("invoices").upsert(
          {
            id: invoice.id,
            invoice_number: invoice.invoice_number,
            bill_to: invoice.bill_to,
            due_date: invoice.due_date,
            discount: formData.discount,
            total: formData.total,
            balance_due: formData.balanceDue,
            amount_paid: formData.amountPaid,
            subtotal: invoice.subtotal || 0,
            ship_to: invoice.ship_to || "",
            payment_terms: invoice.payment_terms || "",
            po_number: invoice.po_number || "",
            items: invoice.items || [],
            notes: invoice.notes || "",
            terms: invoice.terms || "",
            tax: invoice.tax || 0,
            shipping: invoice.shipping || 0,
            created_at: invoice.created_at || new Date().toISOString(),
          },
          { onConflict: "id" }
        );

        if (error) throw error;
        toast.success("Changes saved successfully!");
        await fetchInvoices();
        onClose();
      } catch (error) {
        toast.error("Failed to save changes: " + error.message);
      }
    };

    const handleAddInstallmentClick = async () => {
      const installmentData = await handleAddInstallment(
        invoice.id,
        formData.installment
      );
      if (installmentData) {
        setFormData((prev) => ({
          ...prev,
          installment: "",
          balanceDue: prev.balanceDue - parseFloat(formData.installment || 0),
          amountPaid: prev.amountPaid + parseFloat(formData.installment || 0),
        }));
        setInstallments((prev) => [installmentData, ...prev]);
      }
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 m-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Edit Invoice #{invoice.invoice_number}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-medium">
                    ₹{formData.subtotal.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Total</p>
                  <p className="font-medium text-blue-600">
                    ₹{formData.total.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Amount Paid</p>
                  <p className="font-medium text-green-600">
                    ₹{formData.amountPaid.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Balance Due</p>
                  <p className="font-medium text-red-600">
                    ₹{formData.balanceDue.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                <p>
                  Installments Paid:{" "}
                  <span className="font-medium">{installments.length}</span>
                </p>
              </div>
            </div>

            <div>
              <label
                htmlFor="discount"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Discount Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  ₹
                </span>
                <input
                  id="discount"
                  type="number"
                  value={formData.discount}
                  onChange={handleDiscountChange}
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter discount"
                  min="0"
                  step="100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="installment"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Add Installment
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    ₹
                  </span>
                  <input
                    id="installment"
                    type="number"
                    value={formData.installment}
                    onChange={handleInstallmentChange}
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter amount"
                    min="0"
                    step="100"
                  />
                </div>
                <button
                  onClick={handleAddInstallmentClick}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Add
                </button>
              </div>
            </div>

            {installments.length > 0 && (
              <div className="max-h-40 overflow-y-auto">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Installment History
                </h3>
                <div className="space-y-2">
                  {installments.map((inst) => (
                    <div
                      key={inst.id}
                      className="flex justify-between text-sm p-2 bg-gray-50 rounded-md"
                    >
                      <span>
                        {new Date(inst.payment_date).toLocaleDateString()}
                      </span>
                      <span className="text-green-600">
                        ₹{inst.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveChanges}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-36">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Invoices</h1>
      <div className="grid md:grid-cols-4 gap-4 mb-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client Name
          </label>
          <input
            type="text"
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            placeholder="Search client"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Due Date
          </label>
          <input
            type="date"
            value={selectedDueDate}
            onChange={(e) => setSelectedDueDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Invoice Number
          </label>
          <input
            type="text"
            value={searchInvoiceNumber}
            onChange={(e) => setSearchInvoiceNumber(e.target.value)}
            placeholder="Search Invoice #"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={handleFilter}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Filter
          </button>
        </div>
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 text-left">Invoice #</th>
              <th className="p-3 text-left">Client</th>
              <th className="p-3 text-left">Due Date</th>
              <th className="p-3 text-right">Total</th>
              <th className="p-3 text-right">Balance Due</th>
              <th className="p-3 text-right">WA</th>
              <th className="p-3 text-right">Email</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((invoice) => (
              <tr
                key={invoice.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">{invoice.invoice_number}</td>
                <td className="p-3">{invoice.bill_to}</td>
                <td className="p-3">
                  {new Date(invoice.due_date).toLocaleDateString()}
                </td>
                <td className="p-3 text-right">
                  ₹{invoice.total.toLocaleString()}
                </td>
                <td className="p-3 text-right text-red-600">
                  ₹{invoice.balance_due.toLocaleString()}
                </td>
                <td className="p-3 text-right">
                  <a
                    href={`https://wa.me/+91${invoice.po_number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message
                  </a>
                </td>
                <td className="p-3 text-right">
                  <a
                    href={`mailto:${invoice.ship_to}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mail
                  </a>
                </td>
                <td className="p-3 text-right space-x-2">
                  <button
                    onClick={() => setSelectedInvoice(invoice)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    View Receipt
                  </button>
                  <button
                    onClick={() => setEditInvoice(invoice)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedInvoice && (
        <InvoiceReceiptModal
          invoice={selectedInvoice}
          onClose={() => setSelectedInvoice(null)}
        />
      )}
      {editInvoice && (
        <EditModal invoice={editInvoice} onClose={() => setEditInvoice(null)} />
      )}
      {selectedInstallment && (
        <InstallmentReceiptModal
          installment={selectedInstallment.installment}
          invoice={selectedInstallment.invoice}
          onClose={() => setSelectedInstallment(null)}
        />
      )}
      <Toaster position="top-right" />
    </div>
  );
};

export default InvoicesList;
