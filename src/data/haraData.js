export const navLinks = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Services', path: '/services'},
    {label: 'Portfolio', path: '/portfolio'},
    {label: 'Pricing', path: '/pricing'},
    {label: 'Contact', path: '/contact'},
];

export const servicesData = [
    {
        id: 'social-media-management',
        number:'01',
        icon:'⌁',
        title:'Social Media Management',
        desc:'Konten yang konsisten. Brand yang makin dikenal',
        price:'Rp 1.500.0000',
        unit: '/ bulan',
        detailIntro:'Strategi konten bulanan yang terstuktur untuk Instagram dan Tiktok.',
        deliverables:[
            'Editorial Calendar & content planning bulanan',
            'Desain feed & carousel profesional (8-20 post)',
            'Produksi Reels / short form video',
            'Copywriting persuasive & hashtag research',
            'Laporan performa & analitik bulanan'
        ],
    },
    {
        id: 'web-apps-development',
        number:'02',
        icon:'</>',
        title:'Web Apps Development',
        desc:'Website yang bekerja untuk bisnis Anda.',
        price:'Rp 3.000.0000',
        unit: '/ project',
        detailIntro:'Landing page, website korporat, hingga aplikasi web custom berbasis modern stack',
        deliverables:[
            'UI/UX design responsif & mobile-firts',
            'Pengembangan frontend berbasis React / Next.js',
            'Integrasi CMS',
            'Optimasi kecepatan & SEO on-page dasar',
            'Deployment & setup domain SSL',
        ],
    },
    {
        id: 'digital-advertising',
        number:'03',
        icon:'↗',
        title:'Digital Advertising',
        desc:'Campaign dengan tujuan yang terukur.',
        price:'Rp 1.000.0000',
        unit: '/ bulan',
        detailIntro:'Pengelolaan campaign iklan berbayar Meta Ads & Google Ads dengan target konversi.',
        deliverables:[
            'Riset audiens & persona target pasar',
            'Setup pixel, event tracking & funnel',
            'A/B testing visual iklan & copy',
            'Optimasi budget & bids berkala',
            'Laporan konversi & ROAS (Return of ads spend) transparan',
        ],
    },
    {
        id: 'photo-videography',
        number:'04',
        icon:'◎',
        title:'Photo & Videography',
        desc:'Buat produk Anda sulit dilewatkan.',
        price:'Rp 750.0000',
        unit: '/ sesi',
        detailIntro:'Sesi produksi visual produk & commercial video dengan standar sinematik.',
        deliverables:[
            'Sesi pemotretan studio atau on-location',
            'Color grading & retouching resolusi tinggi',
            'Export format vertikal (sosmed) & horizontal (web)',
            'Video reel siap posting',
        ],
    },
    {
        id: 'logo-branding-kit',
        number:'05',
        icon:'✎',
        title:'Logo & Branding Kit',
        desc:'Identitas yang punya karakter sendiri.',
        price:'Rp 1.500.0000',
        unit: '/ project',
        detailIntro:'Perancangan identitas visual lengkap dari filosofi hingga pedoman aplikasi brand.',
        deliverables:[
            'Konsep logo primer, sekunder, & brandmark',
            'Palet warna & sistem tipografi brand',
            'Brand guideline book digital (PDF)',
            'Mockup kartu nama, kemasan, & stationery',
        ],
    },
];

export const pricingPlans = [
    {
        id: 'starter',
        badge: '01 / Social Media',
        title: 'Starter',
        subtitle: 'Langkah awal yang konsisten.',
        price:'Rp 1.5000.000',
        period: 'per bulan',
        serviceId: 'social-media-management',
        features:[
            '8 konten feed / bulan',
            'Design & copywriting',
            'Content planning',
            '1 putaran revisi',
            'Laporan bulanan',
        ],
        btnText:'Pilih Starter ↗',
        featured:false,
    },
    {
        id: 'growth',
        badge: '02 / Social Media',
        title: 'Growth',
        subtitle: 'Lebih banyak cerita, lebih banyak format.',
        price:'Rp 3.000.000',
        period: 'per bulan',
        serviceId: 'social-media-management',
        features:[
            '12 konten feed / bulan',
            '4 Reels / short video',
            '1 sesi produksi foto & video',
            'Content planning',
            'Laporan bulanan',
        ],
        btnText:'Pilih Growth ↗',
        featured:true,
        ribbon:'Rekomendasi paket'
    },
    {
        id: 'pro',
        badge: '03 / Social Media',
        title: 'Pro',
        subtitle: 'Ruang lebih besar untuk brand Anda.',
        price:'Rp 5.000.000',
        period: 'per bulan',
        serviceId: 'social-media-management',
        features:[
            '16-20 konten feed / bulan',
            '8 Reels / short video',
            'Produksi foto & video',
            'Content startegy',
            'Dedicated admin',
        ],
        btnText:'Pilih Pro ↗',
        featured:false,
    },
]

export const portfolioData = [
    {
        id: 'mustika-rasa',
        title: 'Mustika Rasa',
        category:'Photo & Video',
        subtitle:'Photo & Video . Konsep Showcase',
        tagline:'Good food. Good mood.',
        artClass:'rasa',
        icon:'*',
        description: 'Eksplorasi visual menu kuliner nusantara dengan penchayaan natural dan konsep kontemporer.',
        year:'2026',
        client:'Mustika Rasa Culinary',
    },
    {
        id: 'egg-tray-cpl',
        title: 'Egg Tray CPL',
        category:'Advertising',
        subtitle:'Advetising . Konsep Showcase',
        tagline:'MADE FOR A BETTER TOMORROW.',
        artClass:'cpl',
        icon:'↗',
        description: 'Kampanye promosi produk kemasan ramah lingkunan berbasis material pulp daur ulang.',
        year:'2026',
        client:'Cendana Putera Lestari',
    },
]

export const processSteps = [
    {
        number:'01',
        title: 'Kenalan & diskusi',
        desc: 'Ceritakan bisnis, kebutuhan, dan tujuan yang ingin dicapai.'
    },
    {
        number:'02',
        title: 'Rencana & strategi',
        desc: 'Sepakati lingkup kerja, arah visual, timeline, dan estimasi biaya.'
    },
    {
        number:'03',
        title: 'Produksi & review',
        desc: 'Eksekusi ide secara transparan dengan tahapan feedback yang jelas.'
    },
    {
        number:'04',
        title: 'Delivery & dukungan',
        desc: 'Hasil akhir diserahkan siap pakai beserta panduan implementasi.'
    },
];