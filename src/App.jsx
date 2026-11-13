import Logo from './Logo.jsx';
import { NAV, SERVICES, PACKAGES, STEPS, CONTACT, waLink } from './data.js';

const container = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
const sectionHead = { maxWidth: '640px', marginBottom: '40px' };
const h2 = { margin: '0 0 12px', fontSize: '38px', lineHeight: '1.15', color: '#0B1F4D' };
const lead = { margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#4A5B7F' };
const card = {
  background: '#fff',
  border: '1px solid #DCE5F5',
  borderRadius: '20px',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
};
const btn = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '48px',
  padding: '0 26px',
  borderRadius: '999px',
  fontWeight: '600',
  fontSize: '16px',
  textDecoration: 'none',
  border: 'none',
};
const btnNavy = { ...btn, background: '#0B1F4D', color: '#fff' };
const btnCyan = { ...btn, background: '#2DE2E6', color: '#0B1F4D' };
const btnBlue = { ...btn, background: '#1D4ED8', color: '#fff' };
const btnGhost = { ...btn, background: 'transparent', color: '#fff', border: '1.5px solid #8FA6D1' };

const icons = {
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  rocket: (
    <>
      <path d="M4 20l5-5M14 4c4 0 6 2 6 6-3 3-5 4-8 4l-2-2c0-3 1-5 4-8z" />
      <circle cx="15" cy="9" r="1.2" />
    </>
  ),
  cart: (
    <>
      <path d="M5 7h14l-1.5 9h-11z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="16" cy="20" r="1" />
    </>
  ),
  browser: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 14l-2 2 2 2M15 14l2 2-2 2" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
};

export default function App() {
  return (
    <div style={{ width: '100%', fontFamily: 'Inter,Arial,sans-serif' }}>
      <header style={{ background: '#fff', borderBottom: '1px solid #DCE5F5' }}>
        <div
          style={{
            ...container,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            minHeight: '84px',
          }}
        >
          <Logo id="hdr" width="202" height="44" accent="#0891B2" accent2="#1D4ED8" textColor="#0B1F4D" />
          <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ color: '#0B1F4D', textDecoration: 'none', fontWeight: '500', padding: '12px 4px' }}
              >
                {item.label}
              </a>
            ))}
            <a href={waLink('Halo DIMAR Technology, saya ingin bertanya tentang layanan website dan aplikasi.')} style={btnNavy}>
              Hubungi Kami
            </a>
          </nav>
        </div>
      </header>

      <section id="beranda" style={{ background: 'linear-gradient(135deg,#0B1F4D,#0B1220)', padding: '96px 0' }}>
        <div style={container}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h1 style={{ margin: '0', fontSize: '56px', lineHeight: '1.08', color: '#fff' }}>
                Website dan aplikasi untuk <span style={{ color: '#2DE2E6' }}>bisnis Anda</span>
              </h1>
              <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.6', color: '#C7D3EA', maxWidth: '520px' }}>
                DIMAR Technology membuat website dan aplikasi yang modern, cepat, dan siap tumbuh bersama usaha Anda.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <a href={waLink('Halo DIMAR Technology, saya ingin konsultasi gratis.')} style={btnCyan}>Konsultasi Gratis</a>
                <a href="#layanan" style={btnGhost}>Lihat Layanan</a>
              </div>
            </div>

            <div style={{ flex: '1 1 380px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '520px', paddingBottom: '40px' }}>
                <div style={{ width: '86%' }}>
                  <div style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 24px 60px rgba(0,0,0,.35)', overflow: 'hidden', width: '100%', maxWidth: '460px' }}>
                    <div style={{ display: 'flex', gap: '6px', padding: '12px 16px', background: '#E4ECFB' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#1D4ED8' }} />
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0891B2' }} />
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0B1F4D' }} />
                    </div>
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <div style={{ height: '18px', width: '55%', background: '#0B1F4D', borderRadius: '6px' }} />
                      <div style={{ height: '10px', width: '85%', background: '#C9D6EE', borderRadius: '5px' }} />
                      <div style={{ height: '10px', width: '70%', background: '#C9D6EE', borderRadius: '5px' }} />
                      <div style={{ height: '120px', borderRadius: '12px', background: 'linear-gradient(135deg,#2DE2E6,#1D4ED8)' }} />
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <div style={{ flex: '1', height: '56px', borderRadius: '10px', background: '#E4ECFB' }} />
                        <div style={{ flex: '1', height: '56px', borderRadius: '10px', background: '#E4ECFB' }} />
                        <div style={{ flex: '1', height: '56px', borderRadius: '10px', background: '#E4ECFB' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    right: '0',
                    bottom: '0',
                    width: '150px',
                    height: '290px',
                    background: '#0B1220',
                    border: '6px solid #8FA6D1',
                    borderRadius: '30px',
                    boxShadow: '0 20px 50px rgba(0,0,0,.45)',
                    padding: '16px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <div style={{ height: '12px', width: '55%', background: '#2DE2E6', borderRadius: '6px' }} />
                  <div style={{ height: '84px', borderRadius: '12px', background: 'linear-gradient(135deg,#2DE2E6,#1D4ED8)' }} />
                  <div style={{ height: '34px', borderRadius: '8px', background: '#1E2B44' }} />
                  <div style={{ height: '34px', borderRadius: '8px', background: '#1E2B44' }} />
                  <div style={{ height: '34px', borderRadius: '8px', background: '#1E2B44' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" style={{ background: '#F3F7FD', padding: '88px 0' }}>
        <div style={container}>
          <div style={sectionHead}>
            <h2 style={h2}>Layanan website dan aplikasi</h2>
            <p style={lead}>Pilih layanan yang paling sesuai dengan kebutuhan usaha Anda.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px' }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={card}>
                <svg width="28" height="28" fill="none" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icons[s.icon]}
                </svg>
                <h3 style={{ margin: '0', fontSize: '22px', color: '#0B1F4D' }}>{s.title}</h3>
                <p style={{ margin: '0', color: '#4A5B7F', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="paket" style={{ background: '#fff', padding: '88px 0' }}>
        <div style={container}>
          <div style={sectionHead}>
            <h2 style={h2}>Paket layanan</h2>
            <p style={lead}>Harga disesuaikan dengan kebutuhan Anda.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '24px' }}>
            {PACKAGES.map((p) => (
              <div
                key={p.name}
                style={{
                  ...card,
                  gap: '12px',
                  background: p.dark ? '#0B1F4D' : '#fff',
                  border: `1px solid ${p.dark ? '#0B1F4D' : '#DCE5F5'}`,
                }}
              >
                <h3 style={{ margin: '0', fontSize: '22px', color: p.dark ? '#fff' : '#0B1F4D' }}>{p.name}</h3>
                <div style={{ fontSize: '34px', fontWeight: '800', color: p.dark ? '#fff' : '#0B1F4D' }}>{p.price}</div>
                <ul style={{ margin: '8px 0 16px', paddingLeft: '20px' }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ margin: '0 0 10px', color: p.dark ? '#C7D3EA' : '#4A5B7F' }}>{f}</li>
                  ))}
                </ul>
                <a
                  href={waLink(`Halo DIMAR Technology, saya tertarik dengan paket ${p.name}.`)}
                  style={p.dark ? { ...btn, background: '#fff', color: '#0B1F4D' } : btnBlue}
                >
                  Pilih paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proses" style={{ background: '#F3F7FD', padding: '88px 0' }}>
        <div style={container}>
          <div style={sectionHead}>
            <h2 style={h2}>Cara kerja kami</h2>
            <p style={lead}>Empat langkah sederhana dari ide sampai website atau aplikasi Anda tayang.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '24px' }}>
            {STEPS.map((s, i) => (
              <div key={s.title} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: '#E4ECFB',
                    color: '#1D4ED8',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={{ margin: '0', fontSize: '20px', color: '#0B1F4D' }}>{s.title}</h3>
                <p style={{ margin: '0', color: '#4A5B7F', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" style={{ background: '#0B1F4D', padding: '88px 0' }}>
        <div style={container}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px', maxWidth: '680px' }}>
            <h2 style={{ margin: '0', fontSize: '38px', lineHeight: '1.15', color: '#fff' }}>Siap punya website sendiri?</h2>
            <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#C7D3EA' }}>
              Ceritakan kebutuhan Anda, kami bantu wujudkan.
            </p>
            <a href={waLink('Halo DIMAR Technology, saya ingin membuat website.')} style={btnCyan}>
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0B1220', padding: '40px 0' }}>
        <div style={{ ...container, display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo id="ftr" width="184" height="40" accent="#2DE2E6" accent2="#3B82F6" textColor="#E8F1FF" />
          <div style={{ color: '#C7D3EA', fontSize: '15px', lineHeight: '1.7' }}>
            <a href={CONTACT.waLink} style={{ color: '#C7D3EA', textDecoration: 'none' }}>
              {CONTACT.whatsapp}
            </a>
            {' · '}
            {CONTACT.email}
            <br />© 2026 DIMAR Technology
          </div>
        </div>
      </footer>
    </div>
  );
}
