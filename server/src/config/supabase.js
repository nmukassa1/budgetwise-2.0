import { createClient } from '@supabase/supabase-js'
import config from './env.js'

const supabase = createClient(config.supabaseURL, config.supabaseKEY)

export default supabase

