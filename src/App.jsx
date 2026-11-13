import { useEffect, useRef, useState } from 'react';
import {
  Monitor,
  Rocket,
  ShoppingCart,
  AppWindow,
  Smartphone,
  BarChart3,
  Check,
  ArrowRight,
  MessageCircle,
  Mail,
  Menu,
  X,
  User,
  Phone,
  Send,
  AlertCircle,
} from 'lucide-react';
import Logo from './Logo.jsx';
import { NAV, SERVICES, PACKAGES, STEPS, CONTACT, SERVICE_OPTIONS, waLink } from './data.js';

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
  gap: '9px',
  minHeight: '48px',
  padding: '0 26px',
  borderRadius: '999px',
  fontWeight: '600',
  fontSize: '16px',
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
};
const btnNavy = { ...btn, background: '#0B1F4D', color: '#fff' };
const btnCyan = { ...btn, background: '#2DE2E6', color: '#0B1F4D' };
const btnBlue = { ...btn, background: '#1D4ED8', color: '#fff' };
const btnWhite = { ...btn, background: '#fff', color: '#0B1F4D' };
const btnGhost = { ...btn, background: 'transparent', color: '#fff', border: '1.5px solid #8FA6D1' };

const ICONS = {
  monitor: Monitor,
  rocket: Rocket,
  cart: ShoppingCart,
  browser: AppWindow,
  phone: Smartphone,
  chart: BarChart3,
};

const FAQ = [
  {
    q: 'Berapa lama proses pembuatan website?',
    a: 'Website company profile biasanya 1-2 minggu, sedangkan aplikasi menyesuaikan tingkat kesulitan fiturnya. Estimasi pasti kami berikan setelah konsultasi.',
  },
  {
    q: 'Apakah harga sudah termasuk domain dan hosting?',
    a: 'Kami bantu urus domain dan hosting tahun pertama. Biaya perpanjangan tahun berikutnya kami informasikan terbuka sejak awal.',
  },
  {
    q: 'Bagaimana kalau saya belum punya materi konten?',
    a: 'Tidak masalah. Kami bantu susun struktur halaman dan memberi arahan teks serta foto yang dibutuhkan.',
  },
  {
    q: 'Apakah bisa minta revisi desain?',
    a: 'Bisa. Ada tahap desain sebelum coding, jadi Anda bisa memberi masukan sampai tampilannya sesuai.',
  },
];

/* ---------- scroll reveal ---------- */
function Reveal({ children, delay = 0, as: Tag = 'div', style, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------- FAQ item with iOS height animation ---------- */
function FaqItem({ item, open, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const update = () => setHeight(el.scrollHeight);
    update();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className={`faq ${open ? 'open' : ''}`}>
      <button type="button" className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{item.q}</span>
        <span className="faq-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M8 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className="faq-a" style={{ height: open ? height : 0 }}>
        <div ref={bodyRef} className="faq-a-inner">
          {item.a}
        </div>
      </div>
    </div>
  );
}

/* ---------- contact form -> WhatsApp ---------- */
const fieldStyle = {
  width: '100%',
  padding: '13px 16px',
  borderRadius: '12px',
  border: '1px solid #DCE5F5',
  background: '#fff',
  color: '#0B1F4D',
  fontFamily: 'inherit',
  fontSize: '15.5px',
  outline: 'none',
  transition: 'border-color 320ms var(--ease-ios), box-shadow 320ms var(--ease-ios)',
};
const labelStyle = {
  display: 'block',
  marginBottom: '7px',
  fontSize: '13.5px',
  fontWeight: '600',
  color: '#0B1F4D',
  letterSpacing: '0.01em',
};

function ContactForm() {
  const [form, setForm] = useState({ nama: '', whatsapp: '', layanan: '', pesan: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((err) => (err[key] ? { ...err, [key]: undefined } : err));
  };

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.nama.trim()) next.nama = 'Nama wajib diisi.';
    const digits = form.whatsapp.replace(/[^0-9]/g, '');
    if (!digits) next.whatsapp = 'Nomor WhatsApp wajib diisi.';
    else if (digits.length < 9) next.whatsapp = 'Nomor terlalu pendek.';
    if (!form.layanan) next.layanan = 'Pilih salah satu layanan.';
    if (!form.pesan.trim()) next.pesan = 'Ceritakan sedikit kebutuhan Anda.';

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    const lines = [
      'Halo DIMAR Technology, saya ingin konsultasi.',
      '',
      `Nama: ${form.nama.trim()}`,
      `WhatsApp: ${form.whatsapp.trim()}`,
      `Layanan: ${form.layanan}`,
      '',
      'Kebutuhan:',
      form.pesan.trim(),
    ];

    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <form onSubmit={submit} noValidate className="contact-form">
      <div className="contact-grid">
        <div>
          <label style={labelStyle} htmlFor="cf-nama">
            Nama
          </label>
          <div className="input-wrap">
            <User size={17} className="input-icon" />
            <input
              id="cf-nama"
              type="text"
              value={form.nama}
              onChange={update('nama')}
              placeholder="Nama Anda"
              style={fieldStyle}
              className={`field has-icon${errors.nama ? ' invalid' : ''}`}
              aria-invalid={Boolean(errors.nama)}
            />
          </div>
          {errors.nama && (
            <p className="field-error">
              <AlertCircle size={14} /> {errors.nama}
            </p>
          )}
        </div>

        <div>
          <label style={labelStyle} htmlFor="cf-wa">
            Nomor WhatsApp
          </label>
          <div className="input-wrap">
            <Phone size={17} className="input-icon" />
            <input
              id="cf-wa"
              type="tel"
              inputMode="tel"
              value={form.whatsapp}
              onChange={update('whatsapp')}
              placeholder="08xx xxxx xxxx"
              style={fieldStyle}
              className={`field has-icon${errors.whatsapp ? ' invalid' : ''}`}
              aria-invalid={Boolean(errors.whatsapp)}
            />
          </div>
          {errors.whatsapp && (
            <p className="field-error">
              <AlertCircle size={14} /> {errors.whatsapp}
            </p>
          )}
        </div>
      </div>

      <div style={{ marginTop: '18px' }}>
        <label style={labelStyle} htmlFor="cf-layanan">
          Jenis layanan
        </label>
        <select
          id="cf-layanan"
          value={form.layanan}
          onChange={update('layanan')}
          style={{ ...fieldStyle, cursor: 'pointer' }}
          className={`field${errors.layanan ? ' invalid' : ''}`}
          aria-invalid={Boolean(errors.layanan)}
        >
          <option value="">Pilih layanan…</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.layanan && (
          <p className="field-error">
            <AlertCircle size={14} /> {errors.layanan}
          </p>
        )}
      </div>

      <div style={{ marginTop: '18px' }}>
        <label style={labelStyle} htmlFor="cf-pesan">
          Kebutuhan Anda
        </label>
        <textarea
          id="cf-pesan"
          rows={4}
          value={form.pesan}
          onChange={update('pesan')}
          placeholder="Contoh: saya punya usaha kuliner dan butuh website company profile plus menu online."
          style={{ ...fieldStyle, resize: 'vertical', lineHeight: '1.6' }}
          className={`field${errors.pesan ? ' invalid' : ''}`}
          aria-invalid={Boolean(errors.pesan)}
        />
        {errors.pesan && (
          <p className="field-error">
            <AlertCircle size={14} /> {errors.pesan}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-navy" style={{ ...btnNavy, width: '100%', marginTop: '22px' }}>
        <Send size={17} strokeWidth={2.2} />
        Kirim lewat WhatsApp
      </button>

      <p className="form-note">
        {sent ? (
          <span className="form-ok">
            <Check size={15} strokeWidth={3} /> WhatsApp terbuka di tab baru. Kalau tidak terbuka, cek pemblokir pop-up.
          </span>
        ) : (
          'Pesan akan langsung terisi otomatis di WhatsApp Anda — tidak perlu ketik ulang.'
        )}
      </p>
    </form>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div style={{ width: '100%', fontFamily: 'Inter,Arial,sans-serif' }}>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div style={{ ...container, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', minHeight: '76px' }}>
          <a href="#beranda" aria-label="DIMAR Technology" style={{ display: 'block', lineHeight: 0 }}>
            <Logo id="hdr" width="184" height="40" accent="#0891B2" accent2="#1D4ED8" textColor="#0B1F4D" />
          </a>

          <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="navlink"
                style={{ color: '#0B1F4D', textDecoration: 'none', fontWeight: '500', fontSize: '15px', padding: '12px 2px' }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={waLink('Halo DIMAR Technology, saya ingin bertanya tentang layanan website dan aplikasi.')}
              className="btn btn-navy"
              style={{ ...btnNavy, minHeight: '42px', padding: '0 20px', fontSize: '15px' }}
            >
              <MessageCircle size={17} strokeWidth={2.2} />
              Hubungi Kami
            </a>
          </nav>

          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          {NAV.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href={waLink('Halo DIMAR Technology, saya ingin bertanya tentang layanan website dan aplikasi.')}
            className="btn btn-navy"
            style={{ ...btnNavy, marginTop: '8px' }}
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle size={17} strokeWidth={2.2} />
            Hubungi Kami
          </a>
        </div>
      </header>

      <section
        id="beranda"
        className="hero-section"
        style={{ background: 'linear-gradient(135deg,#0B1F4D,#0B1220)', padding: '96px 0 104px', overflow: 'hidden' }}
      >
        <div style={container}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="hero-copy" style={{ flex: '1 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Website &amp; aplikasi siap pakai
              </div>
              <h1 className="hero-title" style={{ margin: '0', fontSize: '56px', lineHeight: '1.08', color: '#fff' }}>
                Website dan aplikasi untuk <span style={{ color: '#2DE2E6' }}>bisnis Anda</span>
              </h1>
              <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.6', color: '#C7D3EA', maxWidth: '520px' }}>
                DIMAR Technology membuat website dan aplikasi yang modern, cepat, dan siap tumbuh bersama usaha Anda.
              </p>
              <div className="cta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <a href={waLink('Halo DIMAR Technology, saya ingin konsultasi gratis.')} className="btn btn-cyan" style={btnCyan}>
                  Konsultasi Gratis
                  <ArrowRight size={18} strokeWidth={2.4} />
                </a>
                <a href="#layanan" className="btn btn-ghost" style={btnGhost}>
                  Lihat Layanan
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <strong>100%</strong>
                  <span>Desain responsif</span>
                </div>
                <div>
                  <strong>1-2</strong>
                  <span>Minggu pengerjaan</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Balasan WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="hero-mock-outer" style={{ flex: '1 1 380px', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
              <div className="hero-mock-wrap" style={{ position: 'relative', width: '100%', maxWidth: '500px', paddingBottom: '40px' }}>
                <div style={{ width: '86%' }}>
                  <div
                    className="hero-mock"
                    style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 24px 60px rgba(0,0,0,.35)', overflow: 'hidden', width: '100%', maxWidth: '460px' }}
                  >
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
                  className="hero-phone"
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

      <section id="layanan" className="section-pad" style={{ background: '#F3F7FD', padding: '88px 0' }}>
        <div style={container}>
          <Reveal style={sectionHead}>
            <h2 className="section-title" style={h2}>
              Layanan website dan aplikasi
            </h2>
            <p style={lead}>Pilih layanan yang paling sesuai dengan kebutuhan usaha Anda.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px' }}>
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] || Monitor;
              return (
                <Reveal key={s.title} delay={i * 70} className="card" style={card}>
                  <span className="card-icon">
                    <Icon size={24} strokeWidth={1.9} color="#1D4ED8" />
                  </span>
                  <h3 style={{ margin: '0', fontSize: '22px', color: '#0B1F4D' }}>{s.title}</h3>
                  <p style={{ margin: '0', color: '#4A5B7F', lineHeight: '1.6' }}>{s.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="paket" className="section-pad" style={{ background: '#fff', padding: '88px 0' }}>
        <div style={container}>
          <Reveal style={sectionHead}>
            <h2 className="section-title" style={h2}>
              Paket layanan
            </h2>
            <p style={lead}>Harga disesuaikan dengan kebutuhan Anda.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '24px' }}>
            {PACKAGES.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 70}
                className="card"
                style={{
                  ...card,
                  gap: '12px',
                  background: p.dark ? '#0B1F4D' : '#fff',
                  border: `1px solid ${p.dark ? '#0B1F4D' : '#DCE5F5'}`,
                }}
              >
                {p.dark && <span className="paket-badge">Paling populer</span>}
                <h3 style={{ margin: '0', fontSize: '22px', color: p.dark ? '#fff' : '#0B1F4D' }}>{p.name}</h3>
                <div style={{ fontSize: '34px', fontWeight: '800', color: p.dark ? '#fff' : '#0B1F4D' }}>{p.price}</div>
                <ul className="feature-list" style={{ margin: '8px 0 16px' }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ color: p.dark ? '#C7D3EA' : '#4A5B7F' }}>
                      <Check size={17} strokeWidth={2.6} color={p.dark ? '#2DE2E6' : '#1D4ED8'} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Halo DIMAR Technology, saya tertarik dengan paket ${p.name}.`)}
                  className={`btn ${p.dark ? 'btn-white' : 'btn-blue'}`}
                  style={{ ...(p.dark ? btnWhite : btnBlue), marginTop: 'auto' }}
                >
                  Pilih paket
                  <ArrowRight size={17} strokeWidth={2.4} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="proses" className="section-pad" style={{ background: '#F3F7FD', padding: '88px 0' }}>
        <div style={container}>
          <Reveal style={sectionHead}>
            <h2 className="section-title" style={h2}>
              Cara kerja kami
            </h2>
            <p style={lead}>Empat langkah sederhana dari ide sampai website atau aplikasi Anda tayang.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '24px' }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className="step" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className="step-num">{i + 1}</div>
                <h3 style={{ margin: '0', fontSize: '20px', color: '#0B1F4D' }}>{s.title}</h3>
                <p style={{ margin: '0', color: '#4A5B7F', lineHeight: '1.6' }}>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-pad" style={{ background: '#fff', padding: '88px 0' }}>
        <div style={{ ...container, display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
          <Reveal style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="section-title" style={h2}>
              Pertanyaan yang sering ditanya
            </h2>
            <p style={{ ...lead, marginBottom: '20px' }}>
              Belum ketemu jawabannya? Tanya langsung lewat WhatsApp, kami balas cepat.
            </p>
            <a href={waLink('Halo DIMAR Technology, saya punya pertanyaan.')} className="btn btn-blue" style={btnBlue}>
              <MessageCircle size={18} strokeWidth={2.2} />
              Tanya sekarang
            </a>
          </Reveal>
          <div style={{ flex: '1 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQ.map((item, i) => (
              <FaqItem key={item.q} item={item} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="section-pad" style={{ background: '#0B1F4D', padding: '88px 0' }}>
        <div style={container}>
          <div className="contact-layout">
            <Reveal className="contact-copy">
              <h2 className="section-title" style={{ margin: '0 0 14px', fontSize: '38px', lineHeight: '1.15', color: '#fff' }}>
                Siap punya website sendiri?
              </h2>
              <p style={{ margin: '0 0 26px', fontSize: '18px', lineHeight: '1.6', color: '#C7D3EA', maxWidth: '440px' }}>
                Ceritakan kebutuhan Anda, kami bantu wujudkan. Isi form singkat ini dan pesan Anda langsung masuk ke WhatsApp kami.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '26px' }}>
                <a href={CONTACT.waLink} className="contact-line">
                  <span className="contact-ic">
                    <MessageCircle size={17} strokeWidth={2.2} />
                  </span>
                  <span>
                    <small>WhatsApp</small>
                    {CONTACT.whatsapp}
                  </span>
                </a>
                <a href={`mailto:${CONTACT.email}`} className="contact-line">
                  <span className="contact-ic">
                    <Mail size={17} strokeWidth={2.2} />
                  </span>
                  <span>
                    <small>Email</small>
                    {CONTACT.email}
                  </span>
                </a>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }} className="cta-row">
                <a href={waLink('Halo DIMAR Technology, saya ingin membuat website.')} className="btn btn-cyan" style={btnCyan}>
                  <MessageCircle size={18} strokeWidth={2.2} />
                  Chat langsung
                </a>
              </div>
            </Reveal>

            <Reveal delay={100} className="contact-form-card">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0B1220', padding: '40px 0' }}>
        <div style={{ ...container, display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo id="ftr" width="184" height="40" accent="#2DE2E6" accent2="#3B82F6" textColor="#E8F1FF" />
          <div style={{ color: '#C7D3EA', fontSize: '15px', lineHeight: '1.7' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
              <a href={CONTACT.waLink} className="footer-link">
                <MessageCircle size={15} strokeWidth={2.2} />
                {CONTACT.whatsapp}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="footer-link">
                <Mail size={15} strokeWidth={2.2} />
                {CONTACT.email}
              </a>
            </div>
            <div style={{ marginTop: '6px' }}>© 2026 DIMAR Technology</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
