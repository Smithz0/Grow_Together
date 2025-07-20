import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nwcltvljeomndlehyfzb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53Y2x0dmxqZW9tbmRsZWh5ZnpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMTgzNDksImV4cCI6MjA2ODU5NDM0OX0.7DBXE_oLuFZXcq82AOeTpUwoBfcpfoWH5V_rz2HVX7g';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);