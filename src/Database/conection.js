import { createClient } from '@supabase/supabase-js'

const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Z2d2YmFwYnpiZnpndWZmcHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA5MzM4NDgsImV4cCI6MTk2NjUwOTg0OH0.Wfn1Hy_WGjce3S6rUNChXbLTFnost1o1r0Thi96hGtc"

const URL_SUPABASE =  "https://quggvbapbzbfzguffpqt.supabase.co"

const supabase = createClient(URL_SUPABASE, ANON_KEY);

module.exports = supabase;