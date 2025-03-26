import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bbytnkxmvimivobcumub.supabase.co'
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJieXRua3htdmltaXZvYmN1bXViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNzc0NjAsImV4cCI6MjA1Nzg1MzQ2MH0.63x9Dcc6L4iB9iM02CuKFc5s7rk1C9m-6X_bpVvrCEk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
