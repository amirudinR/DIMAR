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
    id: 'skripsi',
    name: 'Paket Skripsi',
    tagline: 'Aplikasi atau website untuk kebutuhan penelitian dan tugas akhir.',
    price: 'Rp 2.000.000',
    priceNote: 'mulai dari',
    dark: false,
    badge: null,
    group: 'Pendidikan',
    features: [
      'Aplikasi atau website sesuai judul penelitian',
      'Konsultasi kebutuhan bersama tim',
      'Pendampingan saat bimbingan',
      'Dokumentasi cara pakai',
      'Revisi mengikuti arahan pembimbing',
    ],
  },
  {
    id: 'usaha-ringan',
    name: 'Usaha Ringan',
    tagline: 'Untuk usaha baru atau skala kecil yang ingin mulai tampil online.',
    price: 'Rp 1.000.000',
    priceNote: 'mulai dari',
    dark: false,
    badge: null,
    group: 'Aplikasi Penunjang Usaha',
    features: [
      'Aplikasi penunjang usaha skala ringan',
      'Fitur dasar sesuai kebutuhan',
      'Desain responsif untuk HP',
      'Pendampingan penggunaan',
    ],
  },
  {
    id: 'usaha-menengah',
    name: 'Usaha Menengah',
    tagline: 'Untuk usaha yang sedang berkembang dan butuh sistem lebih rapi.',
    price: 'Rp 2.500.000',
    priceNote: 'mulai dari',
    dark: true,
    badge: 'Paling populer',
    group: 'Aplikasi Penunjang Usaha',
    features: [
      'Aplikasi penunjang usaha skala menengah',
      'Fitur lebih lengkap dan terintegrasi',
      'Manajemen data usaha',
      'Desain responsif HP & komputer',
      'Pendampingan setelah jadi',
    ],
  },
  {
    id: 'usaha-besar',
    name: 'Usaha Ke Atas',
    tagline: 'Untuk usaha besar dengan kebutuhan fitur yang kompleks.',
    price: 'Rp 5.000.000',
    priceNote: 'mulai dari',
    dark: false,
    badge: null,
    group: 'Aplikasi Penunjang Usaha',
    features: [
      'Aplikasi penunjang usaha skala besar',
      'Fitur kompleks menyesuaikan alur kerja',
      'Integrasi dengan sistem yang sudah ada',
      'Laporan dan dashboard',
      'Pendampingan berkelanjutan',
    ],
  },
  {
    id: 'company-profile',
    name: 'Web Company Profile',
    tagline: 'Website resmi yang membuat usaha Anda tampil kredibel.',
    price: 'Rp 3.000.000',
    priceNote: 'mulai dari',
    dark: false,
    badge: null,
    group: 'Website',
    features: [
      'Halaman profil perusahaan lengkap',
      'Desain khusus sesuai merek',
      'Desain responsif HP & komputer',
      'Optimasi dasar mesin pencari',
      'Integrasi WhatsApp',
      'Formulir kontak',
    ],
  },
  {
    id: 'kerja-perseorangan',
    name: 'Aplikasi Kerja Perseorangan',
    tagline: 'Aplikasi pendukung pekerjaan untuk kebutuhan pribadi.',
    price: 'Rp 1.000.000 - 2.500.000',
    priceNote: 'rentang harga',
    dark: false,
    badge: null,
    group: 'Aplikasi Penunjang Kerja',
    features: [
      'Aplikasi sesuai kebutuhan pekerjaan pribadi',
      'Fitur menyesuaikan tingkat kesulitan',
      'Bisa dijalankan di web atau HP',
      'Pendampingan penggunaan',
    ],
  },
  {
    id: 'kerja-perusahaan',
    name: 'Aplikasi Kerja Perusahaan',
    tagline: 'Aplikasi pendukung operasional kerja untuk tim dan perusahaan.',
    price: 'Rp 5.000.000 ke atas',
    priceNote: 'menyesuaikan fitur',
    dark: false,
    badge: null,
    group: 'Aplikasi Penunjang Kerja',
    features: [
      'Aplikasi untuk kebutuhan operasional perusahaan',
      'Fitur menyesuaikan kondisi dan alur kerja',
      'Multi pengguna dan hak akses',
      'Laporan dan dashboard',
      'Pendampingan dan pelatihan tim',
    ],
  },
];

export const PACKAGE_GROUP_ORDER = [
  'Website',
  'Aplikasi Penunjang Usaha',
  'Aplikasi Penunjang Kerja',
  'Pendidikan',
];

export const PACKAGE_NOTES = {
  priceAdjustable:
    'Harga bisa menyesuaikan dengan tingkat kesulitan dan banyaknya fitur yang dibutuhkan.',
  excluded: [
    'Server, storage & domain',
    'Rilis ke Play Store',
    'Maintenance berkala',
  ],
  included: [
    'Konsultasi kebutuhan sebelum pengerjaan',
    'Desain responsif di HP dan komputer',
    'Pengujian sebelum diserahkan',
    'Panduan penggunaan',
  ],
};

export const PACKAGE_FAQ = [
  {
    q: 'Apakah harga di atas sudah final?',
    a: 'Harga di atas adalah titik awal. Nominal akhir menyesuaikan tingkat kesulitan dan banyaknya fitur yang Anda butuhkan. Kami selalu sampaikan rincian sebelum pengerjaan dimulai.',
  },
  {
    q: 'Kenapa server, domain, dan rilis Play Store tidak termasuk?',
    a: 'Biaya tersebut bergantung pada penyedia layanan yang Anda pilih dan berulang setiap tahun atau sekali bayar per akun. Kami bantu urus prosesnya, biaya layanan pihak ketiga dibayar terpisah.',
  },
  {
    q: 'Apa itu biaya maintenance?',
    a: 'Maintenance adalah perawatan berkala setelah website atau aplikasi berjalan: pembaruan keamanan, perbaikan bug, backup data, dan penyesuaian kecil. Biayanya terpisah dari harga paket dan bisa dipilih per bulan atau per tahun sesuai kebutuhan Anda.',
  },
  {
    q: 'Apakah bisa minta paket yang tidak ada di daftar?',
    a: 'Bisa. Ceritakan kebutuhan Anda lewat WhatsApp, kami susun penawaran khusus sesuai kebutuhan.',
  },
  {
    q: 'Bagaimana alur pembayarannya?',
    a: 'Pembayaran dilakukan bertahap: sebagian di awal sebagai tanda jadi, sisanya setelah pekerjaan selesai dan Anda setujui hasilnya.',
  },
  {
    q: 'Apakah ada garansi setelah jadi?',
    a: 'Ada. Kami beri pendampingan dan perbaikan untuk bug atau kendala teknis setelah website atau aplikasi diserahkan.',
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
  email: 'dimasmandala2199@gmail.com',
};

export const SERVICE_OPTIONS = [
  'Company Profile',
  'Landing Page',
  'Toko Online',
  'Aplikasi Web',
  'Aplikasi Mobile',
  'Sistem & Dashboard',
  'Belum tahu, mau konsultasi dulu',
];

export const waLink = (text) =>
  text ? `${CONTACT.waLink}?text=${encodeURIComponent(text)}` : CONTACT.waLink;
