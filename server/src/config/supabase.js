import { createClient } from '@supabase/supabase-js'

const supabase = createClient(`https://olwvuciqqjilbqvlnamz.supabase.co`, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sd3Z1Y2lxcWppbGJxdmxuYW16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3OTM5MDMsImV4cCI6MjAzODM2OTkwM30.Pkg26ZXA-3GZ1UQ1-O0G9e6vrXFhBWJlyBsRbELYw-k')

export default supabase

