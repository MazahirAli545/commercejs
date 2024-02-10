import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://apbuylfswlgwckhbodid.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwYnV5bGZzd2xnd2NraGJvZGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0OTI5MTcsImV4cCI6MjAxODA2ODkxN30.t8bUFOvyvpR1MR3ueythYZKAkFDs3E2UtPqa-iVvPEw";

const service_role =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwYnV5bGZzd2xnd2NraGJvZGlkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMjQ5MjkxNywiZXhwIjoyMDE4MDY4OTE3fQ.OY0UCBDdqFDPQG129hUUXoWSwfrxQdLiLc0NF7mjJx0";

const supabase = createClient(supabaseUrl, supabaseKey);

export const adminSupabase = createClient(supabaseUrl, service_role);

export default supabase;
