import { useEffect, useMemo, useState } from 'react';
import {
  Check,
  X,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Server,
  Store,
  SlidersHorizontal,
  ChevronDown,
  Package,
  Globe,
  Briefcase,
  GraduationCap,
} from 'lucide-react';
import Logo from './Logo.jsx';
import {
  PACKAGES,
  PACKAGE_GROUP_ORDER,
  PACKAGE_NOTES,
  PACKAGE_FAQ,
  CONTACT,
  waLink,
} from './data.js';
import './styles.css';

const container = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
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
const btnGhost = { ...btn, background: 'transparent', color: '#fff', border: '1.5px solid #8FA6D1' };

const GROUP_ICONS = {
  Website: Globe,
  'Aplikasi Penunjang Usaha': Store,
  'Aplikasi Penunjang Kerja': Briefcase,
  Pendidikan: GraduationCap,
};

function FaqItem({ item, open, onToggle }) {
  const [h, setH] = useState(0);
  return (
    <div className={`faq ${open ? 'open' : ''}`}>
      <button type="button" className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{item.q}</span>
        <span className="faq-icon" aria-hidden="true">
          <ChevronDown size={16} strokeWidth={2.4} />
        </span>
      </button>
      <div className="faq-a" style={{ height: open ? h : 0 }}>
        <div className="faq-a-inner" ref={(el) => el && h !== el.scrollHeight && setH(el.scrollHeight)}>
          {item.a}
        </div>
      </div>
    </div>
  );
}

function PackageCard({ p, index }) {
  const Icon = GROUP_ICONS[p.group] || Package;
  return (
    <article
      className={`pkg-card${p.dark ? ' pkg-dark' : ''}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {p.badge && <span className="pkg-badge">{p.badge}</span>}
      <span className="pkg-group">
        <Icon size={14} strokeWidth={2.2} />
        {p.group}
      </span>
      <h3 className="pkg-name">{p.name}</h3>
      <p className="pkg-tagline">{p.tagline}</p>
      <div className="pkg-price-wrap">
        <span className="pkg-price-note">{p.priceNote}</span>
        <div className="pkg-price">{p.price}</div>
      </div>
      <ul className="feature-list pkg-features">
        {p.features.map((f) => (
          <li key={f}>
            <Check size={17} strokeWidth={2.8} color={p.dark ? '#2DE2E6' : '#1D4ED8'} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={waLink(`Halo DIMAR Technology, saya tertarik dengan ${p.name} (${p.price}). Bisa minta info lengkapnya?`)}
        className={`btn ${p.dark ? 'btn-white' : 'btn-blue'}`}
        style={{ ...btn, background: p.dark ? '#fff' : '#1D4ED8', color: p.dark ? '#0B1F4D' : '#fff', marginTop: 'auto' }}
      >
        Pilih paket ini
        <ArrowRight size={17} strokeWidth={2.4} />
      </a>
    </article>
  );
}

export default function Packages() {
  const [activeGroup, setActiveGroup] = useState('Semua');
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = 'Paket & Harga — DIMAR Technology';
    window.scrollTo(0, 0);
    return () => {
      document.title = 'DIMAR Technology — Jasa Website dan Aplikasi';
    };
  }, []);

  const groups = useMemo(() => {
    const found = PACKAGE_GROUP_ORDER.filter((g) => PACKAGES.some((p) => p.group === g));
    return ['Semua', ...found];
  }, []);

  const visible = activeGroup === 'Semua' ? PACKAGES : PACKAGES.filter((p) => p.group === activeGroup);

  return (
    <div style={{ width: '100%', fontFamily: 'Inter,Arial,sans-serif', background: '#fff' }}>
      <header className="site-header scrolled">
        <div style={{ ...container, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', minHeight: '76px' }}>
          <a href="/" style={{ display: 'block', lineHeight: 0 }} aria-label="DIMAR Technology">
            <Logo id="pkg-hdr" width="170" height="37" accent="#0891B2" accent2="#1D4ED8" textColor="#0B1F4D" />
          </a>
          <a href="/" className="back-link">
            <ArrowLeft size={16} strokeWidth={2.4} />
            Kembali ke beranda
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="pkg-hero">
        <div style={container}>
          <div className="pkg-hero-inner">
            <span className="hero-badge" style={{ animation: 'none' }}>
              <span className="hero-badge-dot" />
              Paket &amp; harga transparan
            </span>
            <h1 className="pkg-hero-title">
              Pilih paket yang <span style={{ color: '#2DE2E6' }}>pas dengan kebutuhan</span> Anda
            </h1>
            <p className="pkg-hero-lead">
              Tujuh paket untuk kebutuhan website, aplikasi usaha, aplikasi kerja, sampai tugas akhir. Harga
              menyesuaikan tingkat kesulitan dan banyaknya fitur yang Anda butuhkan.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }} className="cta-row">
              <a
                href={waLink('Halo DIMAR Technology, saya ingin konsultasi memilih paket.')}
                className="btn btn-cyan"
                style={btnCyan}
              >
                <MessageCircle size={18} strokeWidth={2.2} />
                Konsultasi Gratis
              </a>
              <a href="#daftar-paket" className="btn btn-ghost" style={btnGhost}>
                Lihat semua paket
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* price ticker / quick facts */}
      <section className="pkg-facts">
        <div style={{ ...container, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '18px' }}>
          {[
            { icon: SlidersHorizontal, title: 'Harga fleksibel', desc: 'Menyesuaikan fitur yang diminta.' },
            { icon: ShieldCheck, title: 'Pendampingan', desc: 'Dibantu sampai Anda bisa pakai.' },
            { icon: Sparkles, title: 'Desain responsif', desc: 'Rapi di HP maupun komputer.' },
            { icon: Package, title: '7 paket', desc: 'Dari skala kecil sampai perusahaan.' },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="fact-card">
                <span className="fact-ic">
                  <Icon size={18} strokeWidth={2.1} />
                </span>
                <div>
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* packages */}
      <section id="daftar-paket" className="section-pad" style={{ padding: '76px 0', background: '#F3F7FD' }}>
        <div style={container}>
          <div style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <h2 className="section-title" style={{ margin: '0 0 12px', fontSize: '38px', lineHeight: '1.15', color: '#0B1F4D' }}>
              Daftar paket
            </h2>
            <p style={{ margin: 0, fontSize: '18px', lineHeight: '1.6', color: '#4A5B7F' }}>
              Semua paket di bawah adalah harga awal. Nominal final kami sampaikan setelah konsultasi kebutuhan.
            </p>
          </div>

          <div className="pkg-tabs" role="tablist" aria-label="Filter kategori paket">
            {groups.map((g) => (
              <button
                key={g}
                type="button"
                role="tab"
                aria-selected={activeGroup === g}
                className={`pkg-tab${activeGroup === g ? ' active' : ''}`}
                onClick={() => setActiveGroup(g)}
              >
                {g}
              </button>
            ))}
          </div>

          <div className="pkg-grid">
            {visible.map((p, i) => (
              <PackageCard key={p.id} p={p} index={i} />
            ))}
          </div>

          <p className="pkg-adjust-note">
            <SlidersHorizontal size={16} strokeWidth={2.2} />
            {PACKAGE_NOTES.priceAdjustable}
          </p>
        </div>
      </section>

      {/* included / excluded */}
      <section className="section-pad" style={{ padding: '76px 0', background: '#fff' }}>
        <div style={container}>
          <div style={{ maxWidth: '640px', marginBottom: '36px' }}>
            <h2 className="section-title" style={{ margin: '0 0 12px', fontSize: '34px', lineHeight: '1.2', color: '#0B1F4D' }}>
              Sudah termasuk &amp; belum termasuk
            </h2>
            <p style={{ margin: 0, fontSize: '17px', lineHeight: '1.6', color: '#4A5B7F' }}>
              Supaya tidak ada kejutan biaya di tengah jalan, ini rincian yang perlu Anda tahu.
            </p>
          </div>

          <div className="incl-grid">
            <div className="incl-card incl-yes">
              <h3>
                <span className="incl-ic yes">
                  <Check size={18} strokeWidth={2.8} />
                </span>
                Sudah termasuk
              </h3>
              <ul>
                {PACKAGE_NOTES.included.map((t) => (
                  <li key={t}>
                    <Check size={16} strokeWidth={2.6} color="#0f766e" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="incl-card incl-no">
              <h3>
                <span className="incl-ic no">
                  <X size={18} strokeWidth={2.8} />
                </span>
                Belum termasuk
              </h3>
              <ul>
                {PACKAGE_NOTES.excluded.map((t) => (
                  <li key={t}>
                    <X size={16} strokeWidth={2.6} color="#b45309" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="incl-note">
                Biaya layanan pihak ketiga dibayar terpisah. Kami bantu proses pemasangan dan pengajuannya.
              </p>
            </div>
          </div>

          <div className="excl-strip">
            <div>
              <Server size={18} strokeWidth={2.1} />
              <strong>Server, storage &amp; domain</strong>
              <span>Biaya tahunan dari penyedia hosting yang Anda pilih.</span>
            </div>
            <div>
              <Store size={18} strokeWidth={2.1} />
              <strong>Rilis ke Play Store</strong>
              <span>Biaya pendaftaran akun developer Google.</span>
            </div>
            <div>
              <ShieldCheck size={18} strokeWidth={2.1} />
              <strong>Maintenance</strong>
              <span>Perawatan berkala, ditagih terpisah per bulan atau tahun.</span>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="section-pad" style={{ padding: '76px 0', background: '#F3F7FD' }}>
        <div style={container}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
            <div style={{ flex: '1 1 320px', minWidth: 0 }}>
              <h2 className="section-title" style={{ margin: '0 0 12px', fontSize: '34px', lineHeight: '1.2', color: '#0B1F4D' }}>
                Pertanyaan soal harga
              </h2>
              <p style={{ margin: '0 0 20px', fontSize: '17px', lineHeight: '1.6', color: '#4A5B7F' }}>
                Masih ragu memilih? Tanya langsung, kami bantu hitung kebutuhan Anda.
              </p>
              <a
                href={waLink('Halo DIMAR Technology, saya mau tanya soal paket dan harga.')}
                className="btn btn-blue"
                style={{ ...btn, background: '#1D4ED8', color: '#fff' }}
              >
                <MessageCircle size={18} strokeWidth={2.2} />
                Tanya sekarang
              </a>
            </div>
            <div style={{ flex: '1 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {PACKAGE_FAQ.map((item, i) => (
                <FaqItem key={item.q} item={item} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="kontak" className="section-pad" style={{ background: '#0B1F4D', padding: '76px 0' }}>
        <div style={container}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 0 }}>
              <h2 className="section-title" style={{ margin: '0 0 14px', fontSize: '36px', lineHeight: '1.15', color: '#fff' }}>
                Belum yakin paket mana?
              </h2>
              <p style={{ margin: 0, fontSize: '17.5px', lineHeight: '1.6', color: '#C7D3EA', maxWidth: '520px' }}>
                Ceritakan usaha atau pekerjaan Anda. Kami bantu tentukan paket paling hemat sesuai kebutuhan.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }} className="cta-row">
              <a
                href={waLink('Halo DIMAR Technology, saya ingin dibantu memilih paket.')}
                className="btn btn-cyan"
                style={btnCyan}
              >
                <MessageCircle size={18} strokeWidth={2.2} />
                Chat via WhatsApp
              </a>
              <a href="/" className="btn btn-ghost" style={btnGhost}>
                Kembali ke beranda
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0B1220', padding: '40px 0' }}>
        <div style={{ ...container, display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo id="pkg-ftr" width="170" height="37" accent="#2DE2E6" accent2="#3B82F6" textColor="#E8F1FF" />
          <div style={{ color: '#C7D3EA', fontSize: '15px', lineHeight: '1.7' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
              <a href={CONTACT.waLink} className="footer-link">
                <MessageCircle size={15} strokeWidth={2.2} />
                {CONTACT.whatsapp}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="footer-link">
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
