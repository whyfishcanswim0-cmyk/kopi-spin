// Supabase > Project Settings > API : paste your Project URL and the "anon / public" key.
const SUPABASE_URL = 'https://gcrxlkcdumnbogjcmgzt.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_iz5Xw2CFHU75-uHWmEAHhA_8-Zq3_mc';

async function rpc(fn, args) {
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: 'POST',
      headers: { apikey: SUPABASE_ANON_KEY, Authorization: 'Bearer ' + SUPABASE_ANON_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify(args || {})
    });
    const d = await r.json();
    return r.ok ? d : { error: d.message || 'Server error' };
  } catch (e) { return { error: 'No connection. Check your internet and try again.' }; }
}
const $ = s => document.querySelector(s);
function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('on'), 3200); }
