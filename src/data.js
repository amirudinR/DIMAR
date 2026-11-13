export const NAV = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Paket', href: '#paket' },
  { label: 'Proses', href: '#proses' },
  { label: 'Kontak', href: '#kontak' },
];

export const SERVICES = [
  {
    title: 'Company Profile',
    desc: 'Website resmi yang membuat usaha Anda tampil kredibel dan mudah ditemukan.',
    icon: 'monitor',
  },
  {
    title: 'Landing Page',
    desc: 'Satu halaman fokus untuk promosi, acara, atau peluncuran produk Anda.',
    icon: 'rocket',
  },
  {
    title: 'Toko Online',
    desc: 'Etalase digital dengan katalog produk dan alur pemesanan yang mudah bagi pelanggan.',
    icon: 'cart',
  },
  {
    title: 'Aplikasi Web',
    desc: 'Aplikasi berbasis browser untuk kebutuhan khusus usaha Anda, bisa dibuka dari perangkat apa pun.',
    icon: 'browser',
  },
  {
    title: 'Aplikasi Mobile',
    desc: 'Aplikasi untuk HP yang memudahkan pelanggan dan tim Anda bekerja dari mana saja.',
    icon: 'phone',
  },
  {
    title: 'Sistem & Dashboard',
    desc: 'Sistem internal untuk memantau data, laporan, dan operasional usaha Anda.',
    icon: 'chart',
  },
];

export const PACKAGES = [
  {
    name: 'Starter',
    price: '[HARGA]',
    dark: false,
    features: ['[JUMLAH] halaman', 'Desain responsif', 'Formulir kontak'],
  },
  {
    name: 'Bisnis',
    price: '[HARGA]',
    dark: true,
    features: [
      '[JUMLAH] halaman',
      'Desain khusus sesuai merek',
      'Optimasi dasar mesin pencari',
      'Integrasi WhatsApp',
    ],
  },
  {
    name: 'Premium',
    price: '[HARGA]',
    dark: false,
    features: [
      'Halaman sesuai kebutuhan',
      'Aplikasi web atau mobile',
      'Pendampingan setelah peluncuran',
    ],
  },
];

export const STEPS = [
  {
    title: 'Konsultasi',
    desc: 'Kita bahas kebutuhan, target pelanggan, dan tujuan website Anda.',
  },
  {
    title: 'Desain',
    desc: 'Anda melihat rancangan tampilan dan memberi masukan sebelum dikerjakan.',
  },
  {
    title: 'Pengembangan',
    desc: 'Website atau aplikasi dibangun, diuji di HP dan komputer, lalu disempurnakan.',
  },
  {
    title: 'Peluncuran',
    desc: 'Hasil karya Anda meluncur dan Anda mendapat panduan untuk mengelolanya.',
  },
];

export const CONTACT = {
  whatsapp: '+62 823-5020-8520',
  waLink: 'https://wa.me/6282350208520',
  email: '[EMAIL]',
};

export const waLink = (text) =>
  text ? `${CONTACT.waLink}?text=${encodeURIComponent(text)}` : CONTACT.waLink;
