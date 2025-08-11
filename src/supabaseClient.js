import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pcehdqzgprhhutqunmab.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjZWhkcXpncHJoaHV0cXVubWFiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDU0NTgyMSwiZXhwIjoyMDY2MTIxODIxfQ.tIUkut8_cI7udPQrAwzsqjeGtf2e69FFMBVrrL2sBOk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
