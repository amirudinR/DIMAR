# AGENTS.md — DIMAR Technology

Panduan singkat untuk AI coding agent yang bekerja di repo ini.

## Apa ini

Website marketing **DIMAR Technology** (jasa pembuatan website & aplikasi). Berbahasa Indonesia.
SPA React + Vite, tanpa backend. Semua interaksi yang butuh server dikerjakan lewat link WhatsApp.

- Repo: `https://github.com/amirudinR/DIMAR` (branch `main`)
- Live: `https://dimar-technology.vercel.app`
- Halaman paket: `https://dimar-technology.vercel.app/paket`

## Perintah

```bash
npm install
npm run dev       # dev server, default http://localhost:5173
npm run build     # vite build -> dist/
npm run preview   # cek hasil build
```

Deploy (non-interaktif, kedua flag wajib):

```bash
npx --yes vercel --prod --yes --scope amirs-projects-e5d6b990 --name dimar-technology
```

## Struktur

| File | Isi |
|---|---|
| `index.html` | Meta, judul, favicon, font Inter (Google Fonts) |
| `src/main.jsx` | Render root, membungkus `<Router />` |
| `src/Router.jsx` | Router manual berbasis `window.location.pathname`. `/paket` → `Packages`, selain itu → `App`. Tidak ada react-router. |
| `src/App.jsx` | Beranda + `Reveal` (animasi scroll), `ContactForm`, `FaqItem`, menu mobile |
| `src/Packages.jsx` | Halaman `/paket` lengkap |
| `src/data.js` | **Semua konten**: `NAV`, `SERVICES`, `PACKAGES`, `PACKAGE_GROUP_ORDER`, `PACKAGE_NOTES`, `PACKAGE_FAQ`, `STEPS`, `CONTACT`, `SERVICE_OPTIONS`, `waLink()` |
| `src/Logo.jsx` | Logo DIMAR sebagai SVG React (prop `id` untuk prefix agar ID unik) |
| `src/styles.css` | Semua styling (inline style dipakai untuk sebagian besar tata letak di App/Packages) |
| `public/` | `favicon.svg`, `apple-touch-icon.png` |
| `mockup/` | HTML mockup asli sebagai referensi visual |
| `*.svg` (root) | 3 file logo sumber dari klien |

## Konvensi

- **Ubah teks/harga/fitur → edit `src/data.js`**, bukan komponennya. Komponen membaca dari sana.
- Tanpa dependensi UI: styling pakai inline style + `styles.css`. Ikon dari `lucide-react`.
- CSS pakai variabel: `--navy` (#0B1F4D), `--cyan` (#2DE2E6), `--blue` (#1D4ED8), `--ease-ios` (cubic-bezier(0.32,0.72,0,1)).
- Transisi mengikuti easing iOS; selalu hormati `prefers-reduced-motion`.
- Semua tombol aksi membuka WhatsApp lewat `waLink(text)` → `wa.me/6282350208520` dengan pesan terisi otomatis.
- Nomor WA & email admin ada di `CONTACT` (`data.js`). Jangan hardcode di komponen.

## Harga & paket (jangan diubah tanpa konfirmasi)

Satuan dari klien adalah **ribuan**: `2.000` = Rp 2.000.000. Sudah dikonversi di `data.js`.

| Kategori | Paket | Harga |
|---|---|---|
| Website | Web Company Profile | Rp 3.000.000 |
| Aplikasi Penunjang Usaha | Usaha Ringan | Rp 1.000.000 |
| | Usaha Menengah *(badge "Paling populer")* | Rp 2.500.000 |
| | Usaha Ke Atas | Rp 5.000.000 |
| Aplikasi Penunjang Kerja | Perseorangan | Rp 1.000.000 – 2.500.000 |
| | Perusahaan | Rp 5.000.000 ke atas |
| Pendidikan | Paket Skripsi | Rp 2.000.000 |

- Harga bisa menyesuaikan tingkat kesulitan / banyak fitur (lihat `PACKAGE_NOTES.priceAdjustable`).
- **Belum termasuk**: server/storage/domain, rilis Play Store, maintenance (`PACKAGE_NOTES.excluded`).
- Beranda hanya menampilkan 3 paket pertama (`PACKAGES.slice(0, 3)`) + CTA ke `/paket`.

## Aturan penting (jangan sampai keulang)

1. **Jangan pasang `cleanUrls: true` di `vercel.json`.** Bertabrakan dengan `rewrites` dan membuat `/paket` jadi 404. Konfigurasi rewrite saat ini sudah benar — biarkan apa adanya.
2. **Jangan tambah `react-router`.** Cukup router manual di `src/Router.jsx`.
3. Link internal halaman pakai `<a href="/paket">` (navigasi penuh browser), bukan state React.
4. **Mobile**: target utama. Semua tombol full-width di mobile wajib `box-sizing: border-box` + `max-width: 100%`, kalau tidak halaman bocor horizontal (bug ini pernah terjadi).
5. Komponen `Reveal` tidak boleh meninggalkan konten `opacity: 0` permanen — sudah ada deteksi viewport awal + fallback 2500ms. Pertahankan perilaku itu.

## Cara verifikasi

- Build: `npm run build` harus sukses tanpa error.
- Mobile: jangan percaya `chrome --headless --window-size` di bawah ~500px (di-clamp, overflow palsu). Pakai CDP `Emulation.setDeviceMetricsOverride` — cek `document.documentElement.scrollWidth === window.innerWidth` di 390px.
- Verifikasi production: `curl`/`Invoke-WebRequest` ke `https://dimar-technology.vercel.app/paket` harus **200**.
- Setelah selesai, commit & push ke `main`, lalu deploy dengan perintah Vercel di atas.

## Catatan

- Repo berbahasa JavaScript (bukan TypeScript). `node_modules/` dan `dist/` di-gitignore.
- Font Inter diambil dari Google Fonts CDN — butuh internet saat load pertama.
- Tidak ada test runner. Verifikasi lewat build + pengecekan manual/DOM.
