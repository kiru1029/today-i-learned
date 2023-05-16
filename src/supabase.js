import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tcjbdjrfgjdzwjcaigcq.supabase.co';;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjamJkanJmZ2pkendqY2FpZ2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4OTYzODMsImV4cCI6MTk5OTQ3MjM4M30.LVw4k26vbiejelpq_4_iy9sdypzyUm3efH1ksukutzs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;