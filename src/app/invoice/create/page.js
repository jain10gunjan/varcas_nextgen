"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../../../supabase.js"; // Adjust the path based on your project structure
import toast, { Toaster } from "react-hot-toast";

export default function InvoiceGenerator() {
  // State for form fields
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [billTo, setBillTo] = useState("");
  const [shipTo, setShipTo] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [poNumber, setPoNumber] = useState("");
  const [items, setItems] = useState([
    { description: "", quantity: 1, rate: 0, amount: 0 },
  ]);
  const [notes, setNotes] = useState("");
  const [terms, setTerms] = useState("");
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(0);

  // Fetch invoice number on component mount
  useEffect(() => {
    const fetchInvoiceCount = async () => {
      const { count, error } = await supabase
        .from("invoices")
        .select("*", { count: "exact", head: true }); // Fetch the count of invoices

      if (error) {
        toast.error("Error fetching invoice count");
        console.error("Error fetching invoice count:", error);
        return;
      }

      // Generate invoice number: {count + 1}{year}VN
      const currentYear = new Date().getFullYear().toString();
      const invoiceCount = count + 1; // Increment count for the new invoice
      const formattedCount = String(invoiceCount).padStart(2, "0"); // Ensure at least 2 digits
      const generatedInvoiceNumber = `${formattedCount}${currentYear}VN`;
      setInvoiceNumber(generatedInvoiceNumber);
    };

    fetchInvoiceCount();
  }, []);

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const total = subtotal + tax + shipping;
  const balanceDue = total;

  // Add a new item to the items list
  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, rate: 0, amount: 0 }]);
  };

  // Update an item in the items list
  const updateItem = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    if (field === "quantity" || field === "rate") {
      updatedItems[index].amount =
        updatedItems[index].quantity * updatedItems[index].rate;
    }
    setItems(updatedItems);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const invoiceData = {
      invoice_number: invoiceNumber,
      bill_to: billTo,
      ship_to: shipTo,
      payment_terms: paymentTerms,
      due_date: dueDate || null,
      po_number: poNumber,
      items: items,
      notes: notes,
      terms: terms,
      subtotal: subtotal,
      tax: tax,
      shipping: shipping,
      total: total,
      amount_paid: 0,
      balance_due: balanceDue,
    };

    const { error } = await supabase.from("invoices").insert([invoiceData]);
    if (error) {
      toast.error("Error saving invoice");
      console.error("Error saving invoice:", error);
      return;
    }

    toast.success("Invoice saved successfully!");

    // Reset form fields
    setBillTo("");
    setShipTo("");
    setPaymentTerms("");
    setDueDate("");
    setPoNumber("");
    setItems([{ description: "", quantity: 1, rate: 0, amount: 0 }]);
    setNotes("");
    setTerms("");
    setTax(0);
    setShipping(0);

    // Fetch new invoice number
    const { data } = await supabase.rpc("get_invoice_number");
    setInvoiceNumber(data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster />

      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-green-500 font-bold text-xl">
            Invoice-Generator.com
          </span>
        </div>
        <div>
          <button className="text-gray-600 mr-4">Help</button>
          <button className="text-gray-600 mr-4">History</button>
          <button className="text-gray-600 mr-4">Invoicing Guide</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <h1 className="text-3xl font-bold">Free Invoice Template</h1>
        <p className="text-xl mt-2">Make beautiful invoices with one click!</p>
        <p className="text-gray-600 mt-4">
          Welcome to the original Invoice Generator, trusted by millions of
          people. Invoice Generator lets you instantly make invoices with our
          attractive invoice template straight from your web browser. The
          invoices you make can be sent and paid online or downloaded as a PDF.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
          OK, got it!
        </button>

        {/* Invoice Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-white p-6 rounded shadow"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">INVOICE</h2>
            <div className="flex items-center">
              <span className="mr-2">#{invoiceNumber}</span>
              <select className="border p-1 rounded mr-2">
                <option>CURRENCY ⟨₹⟩</option>
              </select>
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Download
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save Default
              </button>
            </div>
          </div>

          {/* Billing and Shipping Details */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bill To
              </label>
              <textarea
                value={billTo}
                onChange={(e) => setBillTo(e.target.value)}
                className="w-full border rounded p-2 mt-1"
                placeholder="Who is this to?"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ship To (optional)
              </label>
              <textarea
                value={shipTo}
                onChange={(e) => setShipTo(e.target.value)}
                className="w-full border rounded p-2 mt-1"
                placeholder="(optional)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Payment Terms
              </label>
              <input
                type="text"
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value)}
                className="w-full border rounded p-2 mt-1"
              />
              <label className="block text-sm font-medium text-gray-700 mt-2">
                Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full border rounded p-2 mt-1"
              />
              <label className="block text-sm font-medium text-gray-700 mt-2">
                PO Number
              </label>
              <input
                type="text"
                value={poNumber}
                onChange={(e) => setPoNumber(e.target.value)}
                className="w-full border rounded p-2 mt-1"
              />
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-6">
            <div className="grid grid-cols-4 gap-4 bg-gray-800 text-white p-2 rounded-t">
              <div>Item</div>
              <div>Quantity</div>
              <div>Rate</div>
              <div>Amount</div>
            </div>
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-2 border-b">
                <textarea
                  value={item.description}
                  onChange={(e) =>
                    updateItem(index, "description", e.target.value)
                  }
                  className="border rounded p-2"
                  placeholder="Description of item/service..."
                />
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateItem(index, "quantity", Number(e.target.value))
                  }
                  className="border rounded p-2"
                  min="1"
                />
                <input
                  type="number"
                  value={item.rate}
                  onChange={(e) =>
                    updateItem(index, "rate", Number(e.target.value))
                  }
                  className="border rounded p-2"
                  min="0"
                />
                <input
                  type="number"
                  value={item.amount}
                  className="border rounded p-2"
                  readOnly
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addItem}
              className="text-green-500 mt-2"
            >
              + Line Item
            </button>
          </div>

          {/* Notes, Terms, and Totals */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border rounded p-2 mt-1"
                placeholder="Notes - any relevant information not already covered"
              />
              <label className="block text-sm font-medium text-gray-700 mt-2">
                Terms
              </label>
              <textarea
                value={terms}
                onChange={(e) => setTerms(e.target.value)}
                className="w-full border rounded p-2 mt-1"
                placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Tax</span>
                <input
                  type="number"
                  value={tax}
                  onChange={(e) => setTax(Number(e.target.value))}
                  className="w-20 border rounded p-1"
                  min="0"
                />
              </div>
              <div className="flex justify-between mt-2">
                <span>Shipping</span>
                <input
                  type="number"
                  value={shipping}
                  onChange={(e) => setShipping(Number(e.target.value))}
                  className="w-20 border rounded p-1"
                  min="0"
                />
              </div>
              <div className="flex justify-between mt-2 font-bold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Amount Paid</span>
                <span>₹0.00</span>
              </div>
              <div className="flex justify-between mt-2 font-bold">
                <span>Balance Due</span>
                <span>₹{balanceDue.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
