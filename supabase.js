import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zhfsqnuwsqxfnlsarxci.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoZnNxbnV3c3F4Zm5sc2FyeGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxMjM5MzYsImV4cCI6MjA0ODY5OTkzNn0.p0Ca61wV-4xZ2Zx7XdaAjVtMaq4HxSjnatvKn7nQXkE";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
