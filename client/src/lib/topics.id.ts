// Indonesian topic content for Ah Poong Sentul guide.
// Honesty rule: only location facts are stated as verified. Operating details
// (prices, menus, hours per vendor, zoo/boat status) are framed as "confirm on site"
// and linked to dated public sources. Do not invent current operating facts.

export interface TopicContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  updated: string;
  facts: [string, string][];
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const idContent: Record<string, TopicContent> = {
  "jam-buka": {
    title: "Jam Buka",
    metaTitle: "Jam Buka Ah Poong Sentul: Catatan Peta & Cara Cek Hari Ini",
    metaDescription:
      "Jam buka Ah Poong Sentul menurut Google Maps (19 Okt 2026): Senin–Jumat 10.00–21.00, Sabtu–Minggu 08.00–22.00. Sumber berbeda tanggal; konfirmasi sebelum berangkat.",
    h1: "Jam buka Ah Poong Sentul",
    lead: "Peta mencatat jam buka berbeda untuk hari kerja dan akhir pekan, tetapi dua sumber bertanggal berbeda tidak sama—jelaskan dulu sebelum datang.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Peta 19 Okt 2026", "Sen–Jum 10.00–21.00"],
      ["Peta 19 Okt 2026", "Sab–Min 08.00–22.00"],
      ["Sumber lama", "Artikel Sentul City 17 Apr 2024 menyebut tutup hari kerja 22.00"],
    ],
    sections: [
      {
        heading: "Apa yang tercatat di peta",
        body: "Google Maps, diperiksa 19 Oktober 2026, mencantumkan Senin–Jumat 10.00–21.00 dan Sabtu–Minggu 08.00–22.00. Angka ini adalah ringkasan tempat, bukan jaminan setiap penjual atau wahana mengikuti daftar yang sama.",
      },
      {
        heading: "Mengapa dua angka berbeda",
        body: "Artikel pengembang Sentul City tertanggal 17 April 2024 menyebut tutup hari kerja pukul 22.00, berbeda dengan snapshot peta 2026. Waktu operasional dapat berubah; jangan asumsikan satu angka berlaku untuk semua layanan.",
      },
      {
        heading: "Cara cek hari ini",
        body: "Buka daftar Google Maps Ah Poong Sentul dan akun media @ahpoongfoodmarket yang dirujuk Sentul City sebelum berangkat. Jika ragu, hubungi pengelola atau datang pada rentang siang yang lebih aman (11.00–18.00).",
      },
    ],
    faqs: [
      {
        q: "Jam berapa Ah Poong Sentul buka hari ini?",
        a: "Peta per 19 Oktober 2026 mencatat Sen–Jum 10.00–21.00 dan Sab–Min 08.00–22.00. Konfirmasikan hari kunjungan Anda lewat peta atau media resmi karena waktu dapat berubah.",
      },
      {
        q: "Apakah akhir pekan buka lebih pagi?",
        a: "Snapshot peta 2026 mencatat Sabtu–Minggu mulai 08.00, lebih awal dari hari kerja (10.00). Angka ini belum tentu berlaku untuk semua tenant; cek masing-masing.",
      },
      {
        q: "Apakah semua warung tutup di jam yang sama?",
        a: "Tidak dijamin. Daftar peta adalah ringkasan; penjual, kafe, dan kegiatan bisa punya jam sendiri. Datang siang hari mengurangi risiko tempat sudah tutup.",
      },
    ],
  },

  "biaya-masuk": {
    title: "Biaya Masuk",
    metaTitle: "Biaya Masuk Ah Poong Sentul: Masuk vs Makan, Parkir & Wahana",
    metaDescription:
      "Tarif masuk Ah Poong Sentul saat ini belum terverifikasi. Pelajari bedanya biaya masuk area, makan/minum, parkir, perahu, dan permainan anak sebelum membeli.",
    h1: "Biaya masuk & biaya lainnya",
    lead: "Panduan ini tidak memegang daftar harga resmi. Yang bisa membantu adalah memisahkan jenis biaya supaya Anda tidak mengira satu pembelian sudah mencakup semuanya.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Status", "Tarif masuk area belum terverifikasi"],
      ["Pisahkan", "Makan, parkir, perahu, permainan anak"],
      ["Saran", "Tanya harga tiap layanan sebelum bayar"],
    ],
    sections: [
      {
        heading: "Yang belum diverifikasi",
        body: "Biaya masuk area, tiket, dan paket apa pun belum kami verifikasi dari sumber resmi terkini. Jangan anggap kunjungan gratis, dan jangan anggap harga di artikel lama masih berlaku.",
      },
      {
        heading: "Jenis biaya yang sering terpisah",
        body: "Di ruang kuliner tepi air seperti ini, biaya makan/minum, parkir, perahu, dan permainan anak biasanya dihitung sendiri-sendiri. Tanyakan apa yang termasuk sebelum membayar agar tidak ada kejutan.",
      },
      {
        heading: "Cara menghindari salah paham",
        body: "Tanya langsung ke penjual atau loket: apakah ada biaya masuk area, berapa tarif parkir, dan apakah wahana anak/perahu berbayar terpisah. Catat harga sebelum pesan.",
      },
    ],
    faqs: [
      {
        q: "Apakah Ah Poong Sentul berbayar?",
        a: "Tarif masuk saat ini belum terverifikasi. Makanan, parkir, perahu, dan permainan anak mungkin punya ketentuan terpisah; tanyakan apa yang termasuk sebelum membeli.",
      },
      {
        q: "Berapa tiket masuk Ah Poong Sentul?",
        a: "Kami tidak memiliki daftar harga resmi terkini. Konfirmasikan di lokasi atau lewat media resmi sebelum berangkat, dan jangan mengandalkan angka dari artikel lama.",
      },
      {
        q: "Apakah makan sudah termasuk tiket?",
        a: "Tidak dijamin. Pembelian makanan sebaiknya tidak diasumsikan mencakup masuk area atau wahana lain. Tanyakan cakupan tiap harga secara langsung.",
      },
    ],
  },

  "apakah-buka": {
    title: "Apakah Buka?",
    metaTitle: "Apakah Ah Poong Sentul Buka Hari Ini? Cara Cek Sebelum Berangkat",
    metaDescription:
      "Cara memastikan Ah Poong Sentul buka sebelum Anda datang: cek Google Maps, akun media resmi, dan cuaca. Panduan independen non-komersial.",
    h1: "Apakah Ah Poong Sentul buka hari ini?",
    lead: "Kami tidak bisa menjamin status buka tutup secara real-time. Halaman ini memberi langkah cek mandiri supaya Anda tidak sia-sia datang.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Langkah 1", "Buka daftar Google Maps Ah Poong Sentul"],
      ["Langkah 2", "Cek @ahpoongfoodmarket (dirujuk Sentul City)"],
      ["Langkah 3", "Perhatikan cuaca & hari besar"],
    ],
    sections: [
      {
        heading: "Cek lewat peta dan media",
        body: "Buka daftar Google Maps Ah Poong Sentul untuk jam dan status terkini, lalu cek akun Instagram @ahpoongfoodmarket yang ditautkan oleh artikel Sentul City sebagai sumber pembaruan.",
      },
      {
        heading: "Kenapa tidak ada tombol 'buka sekarang'",
        body: "Kami adalah panduan independen, bukan operator, sehingga tidak memiliki akses status langsung. Menampilkan status yang tidak diverifikasi justru bisa menyesatkan pengunjung.",
      },
      {
        heading: "Waktu yang paling aman",
        body: "Jika Anda ragu, datanglah pada rentang siang hari (sekitar 11.00–18.00) pada hari biasa. Hindari datang sangat pagi atau mendekati jam tutup tanpa cek dulu.",
      },
    ],
    faqs: [
      {
        q: "Bagaimana cara tahu Ah Poong buka hari ini?",
        a: "Cek Google Maps untuk jam dan status, lalu akun media resmi yang dirujuk Sentul City. Kami tidak menampilkan status langsung karena bukan operator tempat.",
      },
      {
        q: "Apakah Ah Poong tutup saat hujan?",
        a: "Tidak ada konfirmasi resmi soal kebijakan hujan. Sebagian pengalaman berlangsung di luar ruang, jadi curah hujan bisa mengubah kenyamanan; cek langsung sebelum datang.",
      },
      {
        q: "Apakah buka saat hari libur nasional?",
        a: "Jam hari libur berpotensi berbeda dari hari biasa. Konfirmasikan lewat peta atau media resmi karena panduan ini tidak memegang jadwal hari libur.",
      },
    ],
  },

  "waktu-terbaik": {
    title: "Waktu Terbaik",
    metaTitle: "Waktu Terbaik & Lama Kunjungan ke Ah Poong Sentul",
    metaDescription:
      "Saran waktu terbaik ke Ah Poong Sentul: sore memberi cahaya nyaman, akhir pekan lebih ramai. Alokasikan 1–2 jam, lebih lama bila gabung kawasan Sentul.",
    h1: "Kapan waktu terbaik datang?",
    lead: "Tidak ada satu jawaban benar, tetapi pola umum cahaya, keramaian, dan durasi bisa membantu menyusun rencana.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Saran durasi", "1–2 jam untuk makan & jalan"],
      ["Cahaya nyaman", "Siang menjelang sore"],
      ["Keramaian", "Akhir pekan & hari libur lebih padat"],
    ],
    sections: [
      {
        heading: "Siang menjelang sore",
        body: "Ruang tepi air biasanya paling nyaman saat cahaya lebih lembut, yaitu siang menjelang sore. Anda bisa makan tenang dan berjalan tanpa panas terik.",
      },
      {
        heading: "Akhir pekan butuh waktu lebih",
        body: "Sabtu, Minggu, dan hari libur berpotensi lebih ramai. Beri jeda ekstra untuk parkir, antrean makanan, dan berpindah antararea.",
      },
      {
        heading: "Berapa lama cukup",
        body: "Sebagai panduan persiapan, alokasikan 1–2 jam untuk makan dan jalan santai. Tambahkan waktu bila menggabungkan kunjungan dengan ruang hijau atau tujuan lain di Sentul.",
      },
    ],
    faqs: [
      {
        q: "Jam berapa paling enak ke Ah Poong?",
        a: "Siang menjelang sore memberi cahaya lebih nyaman untuk ruang tepi air. Hindari datang terlalu pagi bila Anda ingin semua warung sudah buka.",
      },
      {
        q: "Berapa lama ideal di Ah Poong?",
        a: "Saran perencanaan: 1–2 jam untuk makan dan berjalan ringan. Lebih lama bila gabung kawasan Sentul lain.",
      },
      {
        q: "Apakah malam lebih seru?",
        a: "Beberapa ruang tepi air terasa beda di malam hari, tetapi jam operasional per malam belum kami verifikasi. Cek peta sebelum merencanakan kunjungan malam.",
      },
    ],
  },

  "parkir": {
    title: "Parkir",
    metaTitle: "Parkir di Ah Poong Sentul: Lokasi, Kapasitas & Tips Akhir Pekan",
    metaDescription:
      "Parkir Ah Poong Sentul: gunakan area resmi, cek kapasitas saat tiba, dan siapkan waktu lebih akhir pekan. Tarif parkir belum terverifikasi—tanya di lokasi.",
    h1: "Parkir & kendaraan",
    lead: "Tidak ada jaminan tempat tepat di depan pintu. Gunakan area parkir resmi dan konfirmasi ketentuan saat tiba.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Gunakan", "Area parkir resmi yang ditetapkan"],
      ["Tarif", "Belum terverifikasi—tanya di lokasi"],
      ["Akhir pekan", "Datang lebih awal & siap antre"],
    ],
    sections: [
      {
        heading: "Area resmi",
        body: "Ikuti rambu kawasan dan gunakan area parkir yang ditetapkan pengelola. Jangan mengandalkan tempat tepat di depan pintu masuk karena kapasitas terbatas.",
      },
      {
        heading: "Tarif & kapasitas",
        body: "Tarif parkir dan kapasitas belum kami verifikasi. Cek langsung saat tiba dan simpan bukti pembayaran bila ada.",
      },
      {
        heading: "Tips akhir pekan",
        body: "Sabtu–Minggu dan hari libur cenderung lebih padat. Datang lebih awal, siapkan waktu ekstra, dan pertimbangkan transportasi berbasis aplikasi bila parkir penuh.",
      },
    ],
    faqs: [
      {
        q: "Apakah ada parkir di Ah Poong Sentul?",
        a: "Gunakan area parkir resmi yang ditetapkan di lokasi. Kapasitas dan ketersediaan bisa berubah saat ramai, jadi cek saat tiba.",
      },
      {
        q: "Berapa tarif parkir?",
        a: "Tarif parkir belum terverifikasi. Tanyakan dan catat harga di lokasi sebelum meninggalkan kendaraan.",
      },
      {
        q: "Bolehkah turun tepat di depan pintu?",
        a: "Tidak dijamin ada ruang di depan pintu. Gunakan drop-off yang tidak menghalangi arus dan ikuti arahan petugas setempat.",
      },
    ],
  },

  "fasilitas": {
    title: "Fasilitas",
    metaTitle: "Fasilitas Ah Poong Sentul: Toilet, Musala, Tempat Duduk & Lainnya",
    metaDescription:
      "Fasilitas Ah Poong Sentul seperti toilet dan musala perlu dicek saat tiba. Bawa kebutuhan pribadi dasar dan tanyakan lokasi fasilitas aktif di lokasi.",
    h1: "Fasilitas di lokasi",
    lead: "Panduan ini tidak memegang peta fasilitas resmi. Yang penting: tanyakan lokasi yang aktif dan siapkan kebutuhan dasar sendiri.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Cek di lokasi", "Toilet & musala yang sedang aktif"],
      ["Bawa", "Kebersihan & perlindungan pribadi"],
      ["Ruang terbuka", "Suhu & cuaca memengaruhi kenyamanan"],
    ],
    sections: [
      {
        heading: "Toilet & kebersihan",
        body: "Tanyakan lokasi fasilitas yang sedang aktif di lapangan. Bawa kebutuhan pribadi dasar karena ketersediaan fasilitas umum bisa berbeda antarwaktu.",
      },
      {
        heading: "Tempat ibadah",
        body: "Jika Anda memerlukan ruang musala, tanyakan petugas atau penjual di lokasi. Kami tidak memverifikasi keberadaan atau jam musala.",
      },
      {
        heading: "Tempat duduk & istirahat",
        body: "Area ini berorientasi pada duduk tepi air, tetapi jumlah dan ketersediaan kursi mengikuti kondisi hari. Datang lebih awal membantu mendapat tempat nyaman.",
      },
    ],
    faqs: [
      {
        q: "Apakah tersedia toilet di Ah Poong?",
        a: "Fasilitas semacam ini perlu ditanyakan atau dilihat saat tiba. Gunakan area resmi dan ikuti rambu di lokasi.",
      },
      {
        q: "Apakah ada musala?",
        a: "Kami tidak memverifikasi keberadaan musala. Tanyakan petugas di lokasi bila Anda membutuhkannya.",
      },
      {
        q: "Apakah bisa duduk santai tepi sungai?",
        a: "Area ini dirancang untuk duduk tepi air, tetapi ketersediaan tempat duduk mengikuti kondisi hari. Datang lebih awal membantu.",
      },
    ],
  },

  "dari-jakarta": {
    title: "Dari Jakarta",
    metaTitle: "Dari Jakarta ke Ah Poong Sentul: Rute, Waktu & Transportasi",
    metaDescription:
      "Cara ke Ah Poong Sentul dari Jakarta: lewat jaringan jalan Bogor/Sentul, sewa berizin, atau aplikasi. Waktu tempuh sangat dipengaruhi lalu lintas.",
    h1: "Dari Jakarta ke Ah Poong Sentul",
    lead: "Jarak darat Jakarta–Sentul bukan masalah; lalu lintaslah yang menentukan. Rencanakan buffer besar pada jam sibuk.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Arah", "Menuju Bogor / Sentul"],
      ["Waktu", "Sangat dipengaruhi lalu lintas"],
      ["Opsi", "Sewa, aplikasi, atau kereta + lanjutan"],
    ],
    sections: [
      {
        heading: "Lewat jalan darat Bogor–Sentul",
        body: "Dari Jakarta, lanjutkan perjalanan darat menuju Bogor/Sentul melalui jaringan jalan yang aktif. Waktu tempuh bisa berubah tajam pada jam sibuk pagi dan sore.",
      },
      {
        heading: "Pilihan kendaraan",
        body: "Gunakan kendaraan berizin, layanan sewa, atau layanan berbasis aplikasi sesuai titik jemput Anda. Masukkan 'Ah Poong Sentul' sebagai tujuan dan cek estimasi sebelum naik.",
      },
      {
        heading: "Kereta sebagai opsi",
        body: "Beberapa pengunjung memadukan kereta ke arah Bogor/Sentul lalu menyambung dengan taksi berizin atau aplikasi dari titik turun yang aman. Rute dan jadwal perlu dicek hari keberangkatan.",
      },
    ],
    faqs: [
      {
        q: "Berapa lama dari Jakarta ke Ah Poong Sentul?",
        a: "Tergantung lalu lintas secara besar; kami tidak menjanjikan angka pasti. Beri buffer waktu terutama saat jam sibuk.",
      },
      {
        q: "Lewat mana dari Jakarta?",
        a: "Melalui jaringan jalan menuju Bogor/Sentul. Gunakan peta untuk rute dan kondisi lalu lintas terkini sebelum berangkat.",
      },
      {
        q: "Bisa pakai Grab atau Gojek dari Jakarta?",
        a: "Bisa bila titik jemput mengizinkan dan estimasi wajar. Untuk jarak jauh, banyak yang memilih sewa harian; bandingkan sebelum memesan.",
      },
    ],
  },

  "dari-bogor": {
    title: "Dari Bogor",
    metaTitle: "Dari Bogor ke Ah Poong Sentul: Rute Singkat & Transportasi",
    metaDescription:
      "Cara ke Ah Poong Sentul dari Kota Bogor: jarak lebih dekat lewat jalan Sentul. Cek rute, angkutan umum, dan lanjutan aplikasi hari keberangkatan.",
    h1: "Dari Bogor ke Ah Poong Sentul",
    lead: "Dari Kota Bogor, Ah Poong relatif lebih dekat karena berada di sisi Sentul. Waktu tetap bergantung lalu lintas lokal.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Posisi", "Sisi Sentul, Kabupaten Bogor"],
      ["Lebih dekat", "Dari Kota Bogor daripada Jakarta"],
      ["Opsi", "Aplikasi, taksi, atau angkutan umum"],
    ],
    sections: [
      {
        heading: "Arah Sentul",
        body: "Ah Poong berada di kawasan Sentul, Kabupaten Bogor. Dari pusat Kota Bogor, ambil jaringan jalan menuju arah Sentul dan ikuti peta ke Jl. Ir H. Juanda, Cipambuan.",
      },
      {
        heading: "Angkutan umum",
        body: "Cari layanan angkutan yang aktif menuju Sentul pada hari keberangkatan, lalu sambung dengan taksi berizin atau aplikasi dari titik turun yang aman. Rute dapat berubah.",
      },
      {
        heading: "Aplikasi lebih praktis",
        body: "Untuk jarak dalam kota, layanan berbasis aplikasi sering paling mudah. Masukkan 'Ah Poong Sentul' dan cek estimasi serta titik jemput sebelum naik.",
      },
    ],
    faqs: [
      {
        q: "Berapa jauh Bogor ke Ah Poong Sentul?",
        a: "Lebih dekat daripada dari Jakarta karena posisinya di sisi Sentul, tetapi jarak pasti dan waktu tergantung rute serta lalu lintas hari itu.",
      },
      {
        q: "Ada angkutan umum langsung?",
        a: "Kami tidak memverifikasi rute langsung. Cek layanan aktif ke Sentul lalu sambung dengan aplikasi atau taksi dari titik turun aman.",
      },
      {
        q: "Lebih baik Grab atau kendaraan pribadi?",
        a: "Tergantung ketersediaan dan kenyamanan. Kendaraan pribadi butuh parkir; aplikasi butuh titik jemput yang pas. Bandingkan hari keberangkatan.",
      },
    ],
  },

  "kendaraan-pribadi": {
    title: "Kendaraan Pribadi",
    metaTitle: "Rute Mobil ke Ah Poong Sentul & Pintu Tol Terdekat",
    metaDescription:
      "Rute kendaraan pribadi ke Ah Poong Sentul via jalan Sentul. Gunakan peta untuk pintu tol terdekat; panduan tidak memegang nama tol resmi terverifikasi.",
    h1: "Rute kendaraan pribadi",
    lead: "Arah umum mudah: menuju Sentul lalu ke Jl. Ir H. Juanda. Detail pintu tol terdekat cek di peta karena bisa berubah.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Tujuan", "Jl. Ir H. Juanda, Cipambuan, Sentul"],
      ["Navigasi", "Gunakan peta + 'Ah Poong Sentul'"],
      ["Tol", "Cek pintu terdekat di peta hari ini"],
    ],
    sections: [
      {
        heading: "Arah ke Sentul",
        body: "Gunakan navigasi menuju 'Ah Poong Sentul' dan ikuti ke Jl. Ir H. Juanda, Cipambuan, Babakan Madang. Kawasan ini dalam Ecoart Park Sentul City.",
      },
      {
        heading: "Pintu tol terdekat",
        body: "Nama dan jarak pintu tol terdekat dapat berubah; cek di aplikasi peta pada hari keberangkatan. Kami tidak mencantumkan nama tol tertentu agar tidak menyesatkan bila rute berubah.",
      },
      {
        heading: "Saat tiba",
        body: "Ikuti rambu kawasan dan gunakan area parkir resmi. Jangan mengandalkan tempat tepat di depan pintu karena kapasitas terbatas, terutama akhir pekan.",
      },
    ],
    faqs: [
      {
        q: "Lewat pintu tol mana ke Ah Poong?",
        a: "Cek di peta hari keberangkatan; nama pintu tol terdekat bisa berubah. Arah umum adalah menuju Sentul, lalu ke Jl. Ir H. Juanda, Cipambuan.",
      },
      {
        q: "Apakah mudah dijangkau mobil?",
        a: "Ya, via jalan darat Sentul. Ikuti navigasi ke 'Ah Poong Sentul' dan gunakan parkir resmi saat tiba.",
      },
      {
        q: "Boleh parkir di depan pintu?",
        a: "Tidak dijamin. Gunakan drop-off yang tidak menghalangi arus dan ikuti arahan petugas setempat.",
      },
    ],
  },

  "grab-gojek": {
    title: "Grab & Gojek",
    metaTitle: "Grab, Gojek & Taksi ke Ah Poong Sentul: Tips Naik & Turun",
    metaDescription:
      "Naik Grab/Gojek atau taksi ke Ah Poong Sentul: masukkan 'Ah Poong Sentul', cek estimasi & titik jemput, turun di titik aman. Cocok dari Jakarta atau Bogor.",
    h1: "Ride-hailing & taksi",
    lead: "Layanan berbasis aplikasi sering opsi paling sederhana, asal titik jemput dan turun dipastikan sejak awal.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Tujuan", "Ketik 'Ah Poong Sentul'"],
      ["Cek", "Estimasi & titik jemput sebelum naik"],
      ["Turun", "Di titik aman, ikuti petugas"],
    ],
    sections: [
      {
        heading: "Masukkan tujuan dengan benar",
        body: "Ketik 'Ah Poong Sentul' sebagai tujuan di aplikasi. Periksa apakah titik jemput Anda diizinkan dan bandingkan estimasi sebelum memesan.",
      },
      {
        heading: "Titik turun",
        body: "Gunakan titik turun yang tidak menghalangi arus kendaraan. Ikuti arahan petugas setempat bila ada penyesuaian titik turun.",
      },
      {
        heading: "Pulang kembali",
        body: "Untuk kembali, cari titik jemput yang aman dan pastikan aplikasi bisa menjangkau area tersebut. Waktu tunggu bisa lebih lama saat ramai.",
      },
    ],
    faqs: [
      {
        q: "Bisa ke Ah Poong pakai Grab atau Gojek?",
        a: "Bisa. Ketik 'Ah Poong Sentul', cek estimasi dan titik jemput, lalu turun di titik yang tidak menghalangi arus.",
      },
      {
        q: "Berapa kira-kira ongkos dari Bogor?",
        a: "Estimasi tampil di aplikasi berdasarkan titik jemput dan lalu lintas. Kami tidak menjanjikan angka tetap.",
      },
      {
        q: "Apakah mudah dapat taksi pulang?",
        a: "Tergantung waktu dan ketersediaan. Waktu tunggu cenderung lebih lama saat akhir pekan atau malam; siapkan rencana pulang lebih awal.",
      },
    ],
  },

  "transport-umum": {
    title: "Transportasi Umum",
    metaTitle: "Transportasi Umum ke Ah Poong Sentul: Bus, KRL & Lanjutan",
    metaDescription:
      "Transportasi umum ke Ah Poong Sentul: kereta ke arah Bogor/Sentul lalu lanjut taksi/aplikasi. Rute bus langsung belum terverifikasi—cek hari keberangkatan.",
    h1: "Transportasi umum",
    lead: "Tidak ada jalur tunggal yang kami verifikasi. Pola umum: sambungan ke Sentul lalu lanjutan aplikasi dari titik turun aman.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Pola", "Sentul lalu lanjut aplikasi"],
      ["KRL", "Cek rute ke arah Bogor/Sentul"],
      ["Bus langsung", "Belum terverifikasi"],
    ],
    sections: [
      {
        heading: "Kereta sebagai tulang punggung",
        body: "Beberapa pengunjung memadukan layanan kereta ke arah Bogor/Sentul, lalu menyambung dengan taksi berizin atau aplikasi dari stasiun/titik turun yang aman.",
      },
      {
        heading: "Bus & angkutan lokal",
        body: "Kami tidak memverifikasi rute bus langsung ke Ah Poong. Cari layanan yang aktif menuju Sentul pada hari keberangkatan dan cek titik berhenti.",
      },
      {
        heading: "Lanjutan terakhir",
        body: "Segmen terakhir sering ditempuh dengan aplikasi karena lokasi di dalam kawasan. Pastikan titik jemput aman dan estimasi wajar sebelum naik.",
      },
    ],
    faqs: [
      {
        q: "Ada KRL atau bus langsung ke Ah Poong?",
        a: "Kami tidak memverifikasi rute langsung. Pola umum adalah kereta ke arah Bogor/Sentul lalu lanjut aplikasi dari titik turun aman.",
      },
      {
        q: "Stasiun terdekat di mana?",
        a: "Cek peta dan jadwal kereta ke arah Sentul/Bogor hari keberangkatan. Jarak tempuh dari stasiun ke Ah Poong perlu dikonfirmasi via aplikasi.",
      },
      {
        q: "Apakah bisa tanpa aplikasi sama sekali?",
        a: "Mungkin, tetapi segmen terakhir di dalam kawasan lebih mudah dengan aplikasi. Pertimbangkan kenyamanan dan waktu tunggu.",
      },
    ],
  },

  "menu-makanan": {
    title: "Menu & Makanan",
    metaTitle: "Menu Ah Poong Sentul: Cara Memilih Makanan & Minuman Tepi Sungai",
    metaDescription:
      "Menu Ah Poong Sentul bervariasi per penjual. Panduan tidak memegang daftar menu resmi—tanya hidangan, harga, dan cara bayar langsung ke penjual.",
    h1: "Menu & cara memilih makanan",
    lead: "Kuliner datang dari banyak penjual, sehingga tidak ada satu menu resmi. Tanyakan langsung sebelum memesan.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Sumber", "Banyak penjual berbeda"],
      ["Menu resmi", "Tidak kami pegang"],
      ["Cara", "Tanya hidangan & harga di tempat"],
    ],
    sections: [
      {
        heading: "Mengapa tidak ada daftar menu",
        body: "Ah Poong adalah ruang kuliner tepi air dengan berbagai penjual. Menu, harga, dan ketersediaan dapat berubah setiap hari, sehingga daftar statis justru bisa menyesatkan.",
      },
      {
        heading: "Cara memilih",
        body: "Lihat tampilan makanan, tanya hidangan, porsi, bahan, harga, pajak, dan cara pembayaran kepada penjual. Bandingkan beberapa penjual sebelum memutuskan.",
      },
      {
        heading: "Sesuaikan kebutuhan",
        body: "Untuk kebutuhan khusus (halal, vegetarian, alergi), jangan asumsikan kategori otomatis sesuai. Konfirmasikan bahan dan persiapan langsung ke penjual.",
      },
    ],
    faqs: [
      {
        q: "Di mana menu dan harga makanan terbaru?",
        a: "Panduan ini tidak memiliki daftar menu terverifikasi. Tanyakan menu, porsi, bahan, harga, dan cara bayar langsung ke penjual sebelum memesan.",
      },
      {
        q: "Apa saja jenis makanan di Ah Poong?",
        a: "Bervariasi per penjual; artikel Sentul City menyebut sajian regional. Kami tidak merinci daftar karena bisa berubah setiap hari.",
      },
      {
        q: "Apakah bisa lihat dulu sebelum pesan?",
        a: "Ya, area ini terbuka sehingga Anda bisa melihat pilihan penjual. Tanya harga sebelum membeli agar tidak ada kejutan.",
      },
    ],
  },

  "warung-temon": {
    title: "Warung Temon",
    metaTitle: "Warung Temon Ah Poong: Kuliner Yogyakarta & Cara Mencari",
    metaDescription:
      "Warung Temon di Ah Poong Sentul menurut artikel Sentul City 2024 menyajikan kuliner khas Yogyakarta. Cek keberadaan & jam langsung di lokasi.",
    h1: "Warung Temon di Ah Poong",
    lead: "Sentul City pernah menulis tentang Warung Temon sebagai salah satu penjual kuliner khas Yogyakarta di Ah Poong. Status hari ini perlu dicek di lokasi.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Sumber", "Artikel Sentul City 17 Apr 2024"],
      ["Kuliner", "Khas Yogyakarta"],
      ["Status", "Cek keberadaan & jam di lokasi"],
    ],
    sections: [
      {
        heading: "Apa yang diketahui",
        body: "Artikel pengembang Sentul City tertanggal 17 April 2024 menyebut Warung Temon di Ah Poong menyajikan kuliner khas Yogyakarta. Itu adalah informasi historis, bukan jaminan masih ada hari ini.",
      },
      {
        heading: "Cara mencarinya",
        body: "Bila tertarik, tanyakan Warung Temon kepada petugas atau penjual lain saat tiba, atau cek pembaruan media resmi. Jangan asumsikan lokasinya tetap sama.",
      },
      {
        heading: "Catatan jujur",
        body: "Kami tidak memverifikasi menu, harga, atau jam Warung Temon saat ini. Anggap sebagai ide pencarian, bukan daftar tempat yang dijamin tersedia.",
      },
    ],
    faqs: [
      {
        q: "Warung Temon itu apa?",
        a: "Menurut artikel Sentul City 2024, Warung Temon di Ah Poong menyajikan kuliner khas Yogyakarta. Informasi itu historis; status hari ini cek di lokasi.",
      },
      {
        q: "Apakah Warung Temon masih ada?",
        a: "Kami tidak memverifikasi keberadaannya saat ini. Tanyakan di lokasi atau cek media resmi sebelum datang khusus untuk itu.",
      },
      {
        q: "Di mana letak Warung Temon?",
        a: "Kami tidak memegang posisi pasti. Tanyakan petugas di kawasan Ah Poong saat tiba.",
      },
    ],
  },

  "kuliner-halal": {
    title: "Makanan Halal",
    metaTitle: "Makanan Halal di Ah Poong Sentul: Cara Mempastikan per Penjual",
    metaDescription:
      "Cara memastikan makanan halal di Ah Poong Sentul: tanya sertifikasi, bahan, dan cara penyajian per penjual. Jangan asumsikan kategori otomatis halal.",
    h1: "Makanan halal: cara memastikan",
    lead: "Karena banyak penjual berbeda, status halal harus dicek per penjual, bukan per kawasan.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Cek per penjual", "Bukan per kawasan"],
      ["Tanya", "Sertifikat, bahan, penyajian"],
      ["Hindari", "Asumsi otomatis halal"],
    ],
    sections: [
      {
        heading: "Mengapa harus per penjual",
        body: "Ruang kuliner ini diisi banyak penjual independen. Satu penjual bersertifikat belum berarti semua penjual halal. Konfirmasi masing-masing.",
      },
      {
        heading: "Pertanyaan yang bisa diajukan",
        body: "Tanyakan sertifikasi halal, bahan penyedap, penggunaan alkohol dalam masakan, dan apakah alat masak terpisah. Penjual yang jelas biasanya akan menjelaskan.",
      },
      {
        heading: "Bila ragu",
        body: "Jika informasi tidak jelas, pilih penjual dengan label halal terlihat atau makanan nabati yang Anda kenali. Keputusan tetap di tangan Anda.",
      },
    ],
    faqs: [
      {
        q: "Apakah semua makanan di Ah Poong halal?",
        a: "Tidak dijamin. Banyak penjual independen; cek sertifikasi dan bahan per penjual, bukan menganggap seluruh kawasan otomatis halal.",
      },
      {
        q: "Bagaimana cara cek halal?",
        a: "Tanya sertifikat, bahan, dan cara penyajian langsung ke penjual. Pilih penjual dengan label halal terlihat bila ragu.",
      },
      {
        q: "Amankah makan nabati?",
        a: "Makanan nabati bisa pilihan lebih aman bila diolah terpisah, tetapi tetap tanyakan bahan penyedap dan alat masak sebelum memesan.",
      },
    ],
  },

  "makanan-vegetarian": {
    title: "Vegetarian",
    metaTitle: "Pilihan Vegetarian di Ah Poong Sentul: Tips Memesan Tanpa Daging",
    metaDescription:
      "Pilihan vegetarian di Ah Poong Sentul: tanya bahan & kaldu per penjual. Tidak ada daftar vegetarian resmi—konfirmasi penyajian sebelum pesan.",
    h1: "Pilihan vegetarian",
    lead: "Tanpa daftar menu resmi, opsi vegetarian harus dikonfirmasi per penjual, termasuk kaldu dan alat masak.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Tanya", "Bahan, kaldu, alat masak"],
      ["Daftar resmi", "Tidak kami pegang"],
      ["Cek", "Penyajian per penjual"],
    ],
    sections: [
      {
        heading: "Konfirmasi bahan",
        body: "Tanyakan apakah hidangan menggunakan kaldu daging, tepung campuran, atau alat masak bersama. Penjual yang paham biasanya menjawab terbuka.",
      },
      {
        heading: "Opsi yang sering ada",
        body: "Ruang kuliner tepi air sering punya hidangan nabati atau berbasis tahu/tempe, tetapi ketersediaan bergantung penjual hari itu. Lihat dulu sebelum memesan.",
      },
      {
        heading: "Hindari asumsi",
        body: "Jangan anggap 'sayur' otomatis vegetarian ketat. Pastikan tanpa kaldu atau campuran hewani sesuai kebutuhan Anda.",
      },
    ],
    faqs: [
      {
        q: "Apakah ada makanan vegetarian di Ah Poong?",
        a: "Kemungkinan ada hidangan nabati, tetapi kami tidak memegang daftar resmi. Tanyakan bahan dan kaldu per penjual sebelum memesan.",
      },
      {
        q: "Apakah aman untuk vegetarian ketat?",
        a: "Tergantung penjual. Konfirmasi tanpa kaldu daging dan alat masak terpisah; bila ragu, pilih hidangan yang Anda kenali.",
      },
      {
        q: "Bagaimana pesan tanpa daging?",
        a: "Katakan kebutuhan Anda dengan jelas ke penjual, lalu tanyakan bahan penyedap dan cara memasak sebelum membayar.",
      },
    ],
  },

  "kafe-tepi-sungai": {
    title: "Kafe Tepi Sungai",
    metaTitle: "Kafe & Resto Tepi Sungai Ah Poong: Cara Memilih Tempat Duduk",
    metaDescription:
      "Kafe dan resto tepi sungai di Ah Poong: pilih dari tampilan & posisi duduk. Jam dan ketersediaan cek di lokasi; kami tidak pegang daftar resmi.",
    h1: "Kafe & resto tepi sungai",
    lead: "Suasana tepi air adalah daya tarik utama. Pilih tempat dari posisi duduk dan jenis hidangan yang Anda mau.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Daya tarik", "Posisi duduk tepi air"],
      ["Pilih", "Dari tampilan & jenis hidangan"],
      ["Jam", "Cek di lokasi"],
    ],
    sections: [
      {
        heading: "Pilih dari tampilan",
        body: "Karena tidak ada daftar resmi, kelilingi area dan lihat penataan duduk tepi air, lalu pilih yang paling sesuai suasana yang Anda cari.",
      },
      {
        heading: "Waktu terbaik duduk tepi air",
        body: "Siang menjelang sore sering memberi cahaya paling nyaman untuk duduk menghadap lanskap sungai. Datang lebih awal membantu dapat tempat strategis.",
      },
      {
        heading: "Sesuaikan anggaran",
        body: "Bandingkan beberapa penjual untuk harga dan porsi. Tanya sebelum duduk bila ada minimum order atau batas waktu meja.",
      },
    ],
    faqs: [
      {
        q: "Di mana kafe tepi sungai di Ah Poong?",
        a: "Area ini dirancang dengan duduk tepi air. Kelilingi dan pilih dari tampilan; kami tidak memegang daftar nama resmi.",
      },
      {
        q: "Bagaimana dapat tempat duduk enak?",
        a: "Datang lebih awal, terutama akhir pekan. Posisi tepi air paling dicari saat sore.",
      },
      {
        q: "Apakah ada batas waktu duduk?",
        a: "Kami tidak memverifikasi kebijakan meja. Tanya penjual bila Anda berencana duduk lama.",
      },
    ],
  },

  "makan-keluarga": {
    title: "Makan Keluarga",
    metaTitle: "Makan Bersama Keluarga di Ah Poong Sentul: Tips Duduk & Anak",
    metaDescription:
      "Makan keluarga di Ah Poong Sentul: pilih meja luas tepi air, cek ketersediaan, dan siapkan kebutuhan anak. Area terbuka; awasi cuaca & keramaian.",
    h1: "Makan bersama keluarga",
    lead: "Ruang tepi air cocok untuk kumpul, asal meja dan ketersediaan disiapkan, terutama bila ada anak.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Pilih", "Meja luas & tepi air"],
      ["Anak", "Siapkan kebutuhan & pengawasan"],
      ["Cuaca", "Area terbuka; awasi hujan/panas"],
    ],
    sections: [
      {
        heading: "Cari meja yang pas",
        body: "Untuk grup keluarga, pilih meja lebih luas dan dekat area duduk tepi air. Datang lebih awal membantu dapat tempat sebelum ramai.",
      },
      {
        heading: "Kebutuhan anak",
        body: "Siapkan kebutuhan dasar anak, jangan asumsikan tersedia kursi khusus atau alat makan anak. Awasi mereka di area terbuka dekat air.",
      },
      {
        heading: "Cuaca & kenyamanan",
        body: "Sebagian pengalaman berlangsung di luar ruang. Bawa pelindung hujan atau matahari, dan pilih saat cahaya nyaman untuk keluarga.",
      },
    ],
    faqs: [
      {
        q: "Apakah cocok untuk keluarga dengan anak?",
        a: "Area tepi air cocok untuk kumpul keluarga. Siapkan kebutuhan anak dan awasi mereka di ruang terbuka dekat air.",
      },
      {
        q: "Apakah ada kursi/alas anak?",
        a: "Kami tidak memverifikasi ketersediaan alat makan atau kursi khusus anak. Bawa bila diperlukan.",
      },
      {
        q: "Kapan paling nyaman untuk keluarga?",
        a: "Siang menjelang sore biasanya paling nyaman. Hindari puncak keramaian bila anak mudah lelah.",
      },
    ],
  },

  "jadwal-makan": {
    title: "Sarapan–Siang–Malam",
    metaTitle: "Sarapan, Makan Siang & Malam di Ah Poong Sentul",
    metaDescription:
      "Kapan makan di Ah Poong Sentul: sarapan pagi mungkin belum buka, siang paling aman, malam cek jam. Semua bergantung jam penjual hari itu.",
    h1: "Sarapan, siang, atau malam?",
    lead: "Waktu makan terbaik mengikuti jam buka penjual, bukan satu aturan. Siang hari paling aman untuk variasi lengkap.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Sarapan", "Mungkin belum banyak buka"],
      ["Siang", "Paling aman & lengkap"],
      ["Malam", "Cek jam per penjual"],
    ],
    sections: [
      {
        heading: "Sarapan pagi",
        body: "Karena peta mencatat buka mulai 08.00–10.00 tergantai hari, opsi sarapan pagi mungkin belum lengkap. Datang terlalu pagi berisiko banyak warung masih tutup.",
      },
      {
        heading: "Makan siang",
        body: "Siang hari biasanya paling aman untuk variasi penjual yang lengkap dan cahaya nyaman. Ini waktu yang kami anjurkan untuk kunjungan pertama.",
      },
      {
        heading: "Makan malam",
        body: "Beberapa ruang tepi air terasa beda di malam hari, tetapi jam operasional per malam belum terverifikasi. Cek peta dan penjual sebelum merencanakan makan malam.",
      },
    ],
    faqs: [
      {
        q: "Bisa sarapan di Ah Poong?",
        a: "Mungkin terbatas karena jam buka tergantung hari. Datang terlalu pagi berisiko warung masih tutup; siang lebih aman.",
      },
      {
        q: "Kapan makan siang terbaik?",
        a: "Siang hari memberi variasi penjual lengkap dan cahaya nyaman. Waktu yang kami anjurkan untuk kunjungan pertama.",
      },
      {
        q: "Apakah buka untuk makan malam?",
        a: "Jam malam belum terverifikasi. Cek peta dan tanya penjual sebelum merencanakan kunjungan malam.",
      },
    ],
  },

  "bersama-anak": {
    title: "Bersama Anak",
    metaTitle: "Berkunjung ke Ah Poong Sentul dengan Anak: Tips & Persiapan",
    metaDescription:
      "Ah Poong Sentul dengan anak: area terbuka tepi air butuh pengawasan, bawa kebutuhan dasar, dan cek fasilitas saat tiba. Bukan tempat bermain terverifikasi.",
    h1: "Berkunjung dengan anak",
    lead: "Kawasan tepi air bisa menyenangkan untuk keluarga, asal pengawasan dan persiapan disiapkan sejak awal.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Awasi", "Dekat air & keramaian"],
      ["Bawa", "Kebutuhan dasar anak"],
      ["Fasilitas", "Cek saat tiba"],
    ],
    sections: [
      {
        heading: "Keamanan dekat air",
        body: "Area ini berbatasan dengan lanskap air. Awasi anak secara langsung, jangan biarkan bermain mendekati tepi tanpa pengawasan.",
      },
      {
        heading: "Persiapan dasar",
        body: "Bawa kebutuhan dasar anak (pakaian ganti, pelindung matahari/hujan, camilan). Jangan asumsikan tersedia di lokasi.",
      },
      {
        heading: "Fasilitas & istirahat",
        body: "Cek lokasi toilet dan tempat duduk saat tiba. Beri jeda istirahat agar anak tidak lelah di area terbuka.",
      },
    ],
    faqs: [
      {
        q: "Apakah aman untuk anak?",
        a: "Aman bila diawasi, terutama dekat air dan keramaian. Ini bukan taman bermain tertutup; pengawasan orang tua penting.",
      },
      {
        q: "Apa yang harus dibawa untuk anak?",
        a: "Pakaian ganti, pelindung cuaca, dan camilan. Jangan asumsikan fasilitas anak tersedia di lokasi.",
      },
      {
        q: "Apakah ada area bermain khusus?",
        a: "Kami tidak memverifikasi area bermain khusus. Lihat di lokasi; jangan janjikan wahana pada anak sebelum cek.",
      },
    ],
  },

  "permainan-anak": {
    title: "Permainan Anak",
    metaTitle: "Area Bermain Anak di Ah Poong Sentul: Status & Cara Cek",
    metaDescription:
      "Artikel Sentul City 2024 menyebut kegiatan anak di Ah Poong, tetapi status hari ini belum terverifikasi. Konfirmasikan operasional & usia di lokasi.",
    h1: "Permainan & kegiatan anak",
    lead: "Sumber lama menyebut aktivitas anak, tapi itu bukan jaminan layanan sekarang. Konfirmasikan sebelum mengandalkan wahana.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Sumber lama", "Artikel Sentul City 2024"],
      ["Status", "Belum terverifikasi hari ini"],
      ["Cek", "Operasional, usia, biaya, cuaca"],
    ],
    sections: [
      {
        heading: "Apa yang diketahui",
        body: "Artikel Sentul City 17 April 2024 menyebut kegiatan anak di Ah Poong. Itu informasi historis, bukan konfirmasi layanan saat ini.",
      },
      {
        heading: "Konfirmasi sebelum bergantung",
        body: "Tanyakan operasional, batas usia, pengawasan, biaya, dan ketentuan cuaca langsung di lokasi. Jangan anggap termasuk dalam makan atau akses area.",
      },
      {
        heading: "Alternatif aman",
        body: "Bila wahana tidak tersedia, nikmati jalan santai tepi air dengan pengawasan. Jangan kecewakan anak dengan janji wahana yang belum pasti.",
      },
    ],
    faqs: [
      {
        q: "Apakah ada permainan anak di Ah Poong?",
        a: "Artikel 2024 menyebut kegiatan anak, tetapi status hari ini belum terverifikasi. Konfirmasikan operasional dan usia di lokasi.",
      },
      {
        q: "Berapa batas usia wahana?",
        a: "Kami tidak memegang aturan usia saat ini. Tanya langsung ke penyedia di lokasi.",
      },
      {
        q: "Apakah permainan termasuk tiket masuk?",
        a: "Tidak dijamin. Tanyakan apakah berbayar terpisah dan apa saja yang termasuk sebelum membayar.",
      },
    ],
  },

  "mini-zoo": {
    title: "Mini Zoo",
    metaTitle: "Mini Zoo Ah Poong Sentul: Status & Cara Mempastikan",
    metaDescription:
      "Mini zoo Ah Poong Sentul sering dicari, tetapi status operasional hari ini belum terverifikasi. Konfirmasikan keberadaan & jam di lokasi sebelum datang.",
    h1: "Mini zoo: status & cara cek",
    lead: "Banyak pengunjung mencari mini zoo, namun kami tidak memverifikasi keberadaan atau jam operasionalnya saat ini.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Pencarian", "Sering muncul di query"],
      ["Status", "Belum terverifikasi"],
      ["Cek", "Keberadaan & jam di lokasi"],
    ],
    sections: [
      {
        heading: "Mengapa halaman ini ada",
        body: "Istilah 'mini zoo' sering dicari bersama Ah Poong. Kami membuat halaman ini agar pengunjung tidak mengandalkan informasi yang belum pasti.",
      },
      {
        heading: "Yang belum kami tahui",
        body: "Kami tidak memverifikasi apakah ada mini zoo, di mana letaknya, jam buka, harga, atau jenis hewan. Jangan rencanakan perjalanan hanya berdasar asumsi ini.",
      },
      {
        heading: "Cara memastikan",
        body: "Cek daftar Google Maps, tanya petugas di lokasi, atau lihat pembaruan media resmi sebelum datang khusus untuk mini zoo.",
      },
    ],
    faqs: [
      {
        q: "Apakah Ah Poong punya mini zoo?",
        a: "Kami tidak memverifikasi keberadaannya saat ini. Cek peta atau tanya petugas di lokasi sebelum datang khusus untuk itu.",
      },
      {
        q: "Di mana letak mini zoo di Ah Poong?",
        a: "Kami tidak memegang posisi pasti. Tanyakan petugas saat tiba; jangan asumsikan lokasinya tetap.",
      },
      {
        q: "Berapa harga tiket mini zoo?",
        a: "Kami tidak memegang harga. Konfirmasikan di lokasi bila memang tersedia.",
      },
    ],
  },

  "perahu-aktivitas-air": {
    title: "Perahu & Air",
    metaTitle: "Perahu & Aktivitas Air Ah Poong Sentul: Status & Cara Cek",
    metaDescription:
      "Perahu & aktivitas air di Ah Poong: artikel 2024 menyebutnya, tetapi operasional hari ini belum terverifikasi. Konfirmasikan sebelum bergantung.",
    h1: "Perahu & aktivitas air",
    lead: "Sumber lama menyebut aktivitas air, tapi bukan jaminan layanan sekarang. Konfirmasikan operasional, usia, dan cuaca di lokasi.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Sumber lama", "Artikel Sentul City 2024"],
      ["Status", "Belum terverifikasi"],
      ["Cek", "Operasional, usia, cuaca"],
    ],
    sections: [
      {
        heading: "Apa yang diketahui",
        body: "Artikel Sentul City 17 April 2024 menyebut kegiatan air/perahu di Ah Poong. Informasi itu historis, bukan konfirmasi hari ini.",
      },
      {
        heading: "Konfirmasi sebelum naik",
        body: "Tanyakan operasional, batas usia, pengawasan, biaya, dan ketentuan cuaca langsung. Jangan anggap termasuk makan atau akses area.",
      },
      {
        heading: "Keamanan air",
        body: "Bila tersedia, ikuti arahan keselamatan penyedia. Awasi anak dan jangan mendekati area air tanpa pengawasan.",
      },
    ],
    faqs: [
      {
        q: "Apakah ada perahu di Ah Poong?",
        a: "Artikel 2024 menyebut aktivitas air, tetapi status hari ini belum terverifikasi. Konfirmasikan operasional di lokasi.",
      },
      {
        q: "Berapa harga perahu?",
        a: "Kami tidak memegang harga. Tanya penyedia langsung bila layanan tersedia.",
      },
      {
        q: "Apakah aman untuk anak?",
        a: "Tergantung penyedia dan cuaca. Awasi anak dan ikuti arahan keselamatan; jangan asumsikan aman tanpa konfirmasi.",
      },
    ],
  },

  "hari-hujan": {
    title: "Hari Hujan",
    metaTitle: "Kunjungan Saat Hujan di Ah Poong Sentul: Tips & Alternatif",
    metaDescription:
      "Ah Poong Sentul sebagian terbuka; saat hujan bawa pelindung dan cek cuaca. Tidak ada daftar indoor terverifikasi—rencanakan fleksibel.",
    h1: "Kunjungan saat hujan",
    lead: "Sebagian pengalaman berlangsung di luar ruang, jadi hujan mengubah kenyamanan. Siapkan rencana fleksibel.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Kondisi", "Sebagian ruang terbuka"],
      ["Bawa", "Pelindung hujan"],
      ["Indoor", "Tidak terverifikasi"],
    ],
    sections: [
      {
        heading: "Cek cuaca dulu",
        body: "Cek prakiraan cuaca sebelum berangkat. Curah hujan bisa membuat permukaan terbuka licin dan mengurangi kenyamanan duduk tepi air.",
      },
      {
        heading: "Bawa persiapan",
        body: "Siapkan payung atau jas hujan, sepatu nyaman, dan baju ganti. Area ini tidak menjamin seluruh ruang tertutup.",
      },
      {
        heading: "Alternatif fleksibel",
        body: "Jika hujan lebat, pertimbangkan geser jadwal atau gabungkan dengan tujuan indoor di Sentul City yang Anda verifikasi sendiri via peta.",
      },
    ],
    faqs: [
      {
        q: "Apakah Ah Poong tutup saat hujan?",
        a: "Tidak ada konfirmasi resmi. Sebagian ruang terbuka; hujan bisa mengurangi kenyamanan. Cek langsung sebelum datang.",
      },
      {
        q: "Ada area indoor?",
        a: "Kami tidak memverifikasi ruang tertutup khusus. Bawa pelindung dan rencanakan fleksibel bila hujan.",
      },
      {
        q: "Kapan sebaiknya hindari?",
        a: "Hindari datang saat prakiraan hujan lebat bila Anda ingin duduk tepi air nyaman. Cek cuaca hari keberangkatan.",
      },
    ],
  },

  "akses-kursi-roda": {
    title: "Akses Kursi Roda",
    metaTitle: "Aksesibilitas & Kereta Bayi di Ah Poong Sentul",
    metaDescription:
      "Akses kursi roda & kereta bayi di Ah Poong: jalur luar ruang & permukaan berubah. Cek kenyamanan di lokasi; panduan tidak menjamin akses penuh.",
    h1: "Aksesibilitas & kereta bayi",
    lead: "Kawasan ini punya jalur luar ruang dengan permukaan berubah; kenyamanan pengguna kursi roda perlu dicek di lokasi.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Jalur", "Luar ruang, permukaan berubah"],
      ["Cek", "Kenyamanan & akses rambu"],
      ["Bayi", "Bawa kebutuhan sendiri"],
    ],
    sections: [
      {
        heading: "Permukaan & jalur",
        body: "Jalur luar ruang, perubahan permukaan, dan keramaian dapat memengaruhi kenyamanan pengguna kursi roda serta dorongan kereta bayi.",
      },
      {
        heading: "Cek di lokasi",
        body: "Tanyakan petugas tentang akses rambu, jalur datar, dan area parkir terdekat. Kami tidak menjamin akses penuh karena kondisi hari berbeda.",
      },
      {
        heading: "Kereta bayi",
        body: "Bawa kebutuhan dasar bayi sendiri. Uji kenyamanan jalur saat tiba sebelum menjauh dari titik turun.",
      },
    ],
    faqs: [
      {
        q: "Apakah ramah kursi roda?",
        a: "Jalur luar ruang dengan permukaan berubah bisa menantang. Cek akses di lokasi; kami tidak menjamin akses penuh.",
      },
      {
        q: "Boleh bawa kereta bayi?",
        a: "Bisa, tetapi uji kenyamanan jalur saat tiba. Bawa kebutuhan bayi sendiri.",
      },
      {
        q: "Di mana parkir terdekat untuk akses?",
        a: "Gunakan area parkir resmi dan tanyakan titik terdekat ke pintu masuk kepada petugas.",
      },
    ],
  },

  "cara-bayar": {
    title: "Cara Bayar",
    metaTitle: "Cara Bayar di Ah Poong Sentul: Tunai, Kartu & QRIS",
    metaDescription:
      "Cara bayar di Ah Poong Sentul bervariasi per penjual. Tanya tunai, kartu, atau QRIS langsung; bawa uang tunai cadangan untuk amannya.",
    h1: "Cara bayar di lokasi",
    lead: "Karena banyak penjual independen, metode pembayaran bisa berbeda. Siapkan lebih dari satu opsi.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Bervariasi", "Per penjual"],
      ["Tanya", "Tunai, kartu, QRIS"],
      ["Cadangan", "Bawa tunai"],
    ],
    sections: [
      {
        heading: "Tanya tiap penjual",
        body: "Beberapa penjual mungkin menerima tunai, kartu, atau QRIS; yang lain hanya tunai. Tanyakan sebelum memesan agar tidak terhenti saat bayar.",
      },
      {
        heading: "Siapkan tunai",
        body: "Bawa uang tunai cadangan meski Anda biasa pakai pembayaran digital. Sinyal dan mesin pembayaran bisa bermasalah di area terbuka.",
      },
      {
        heading: "QRIS umum di Indonesia",
        body: "Banyak pedagang Indonesia menggunakan QRIS, tetapi bukan jaminan semua penjual di Ah Poong mendukungnya. Konfirmasikan per penjual.",
      },
    ],
    faqs: [
      {
        q: "Apakah Ah Poong terima QRIS?",
        a: "Mungkin sebagian penjual, tetapi kami tidak menjamin semua mendukung QRIS. Tanyakan per penjual sebelum memesan.",
      },
      {
        q: "Apakah harus bawa tunai?",
        a: "Sangat disarankan. Bawa tunai cadangan karena sinyal dan mesin bisa bermasalah di area terbuka.",
      },
      {
        q: "Apakah kartu debit/kredit diterima?",
        a: "Tergantung penjual. Tanya sebelum memesan; jangan asumsikan semua menerima kartu.",
      },
    ],
  },

  "eco-art-park": {
    title: "Eco Art Park",
    metaTitle: "Eco Art Park Sentul & Hubungannya dengan Ah Poong",
    metaDescription:
      "Ah Poong Sentul berada dalam Ecoart Park Sentul City. Pelajari posisinya sebagai kawasan tepi air dan cara menyusun kunjungan di dalamnya.",
    h1: "Eco Art Park & Ah Poong",
    lead: "Ah Poong adalah bagian dari kawasan Ecoart Park Sentul City—bukan tempat terpisah. Memahami ini membantu navigasi.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Posil", "Dalam Ecoart Park Sentul City"],
      ["Alamat", "Jl. Ir H. Juanda, Cipambuan"],
      ["Konteks", "Kawasan tepi air Sentul"],
    ],
    sections: [
      {
        heading: "Satu kawasan",
        body: "Ah Poong Sentul tercantum berada di dalam Ecoart Park Sentul City, di sisi Jl. Ir H. Juanda, Cipambuan. Ini membantu Anda memahami arah navigasi di dalam kawasan.",
      },
      {
        heading: "Cara memanfaatkan",
        body: "Gunakan peta untuk melihat posisi Ah Poong dalam kawasan, lalu rencanakan parkir dan jalan kaki dari titik parkir ke area duduk tepi air.",
      },
      {
        heading: "Jangan asumsikan seluruh kawasan serupa",
        body: "Nama 'Eco Art Park' mencakup area lebih luas; fasilitas di luar Ah Poong belum kami verifikasi. Fokus ke Ah Poong kecuali Anda cek bagian lain via peta.",
      },
    ],
    faqs: [
      {
        q: "Apakah Ah Poong bagian dari Eco Art Park?",
        a: "Ya, Ah Poong berada di dalam Ecoart Park Sentul City di Jl. Ir H. Juanda, Cipambuan.",
      },
      {
        q: "Apakah tiket masuk kawasan sama dengan Ah Poong?",
        a: "Kami tidak memverifikasi skema tiket kawasan. Tanyakan di lokasi mengenai biaya masuk area.",
      },
      {
        q: "Apa bedanya Eco Art Park dan Ah Poong?",
        a: "Ah Poong adalah ruang kuliner tepi air dalam kawasan Ecoart Park. Bagian lain kawasan belum kami verifikasi.",
      },
    ],
  },

  "taman-budaya": {
    title: "Taman Budaya",
    metaTitle: "Ah Poong + Taman Budaya Sentul: Rencana Kombinasi",
    metaDescription:
      "Gabungan Ah Poong dan Taman Budaya Sentul: susun sebagai setengah hari. Jarak & waktu tempuh antarkeduanya cek di peta sebelum berangkat.",
    h1: "Ah Poong & Taman Budaya",
    lead: "Bila Anda ingin hari budaya dan kuliner, gabungkan Ah Poong dengan ruang Taman Budaya di Sentul. Verifikasi jarak via peta.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Ide", "Setengah hari budaya + kuliner"],
      ["Jarak", "Cek di peta Sentul"],
      ["Cek", "Jam & akses masing-masing"],
    ],
    sections: [
      {
        heading: "Logika penggabungan",
        body: "Taman Budaya di kawasan Sentul bisa menjadi pasangan siang hari sebelum atau sesudah makan di Ah Poong. Susun berdasar letak di peta, bukan daftar rekomendasi.",
      },
      {
        heading: "Verifikasi jarak",
        body: "Kami tidak memegang jarak pasti dan waktu tempuh antara Ah Poong dan Taman Budaya. Cek di peta pada hari keberangkatan sebelum mengunci rencana.",
      },
      {
        heading: "Urutan yang masuk akal",
        body: "Datang ke ruang budaya saat cahaya nyaman, lalu akhiri dengan makan tepi air di Ah Poong. Sisipkan waktu transportasi antarkeduanya.",
      },
    ],
    faqs: [
      {
        q: "Bisa gabung Ah Poong dan Taman Budaya?",
        a: "Bisa sebagai rencana setengah hari, asal jarak dan waktu tempuh diverifikasi di peta sebelum berangkat.",
      },
      {
        q: "Berapa lama totalnya?",
        a: "Tergantung jarak antar tujuan. Alokasikan minimal separuh hari agar tidak terburu-buru.",
      },
      {
        q: "Mana dulu, Ah Poong atau Taman Budaya?",
        a: "Saran: ruang budaya saat cahaya nyaman, lalu makan di Ah Poong. Sesuaikan dengan jam masing-masing.",
      },
    ],
  },

  "jungleland": {
    title: "JungleLand",
    metaTitle: "Ah Poong + JungleLand Sentul: Rencana Satu Hari Keluarga",
    metaDescription:
      "Gabungan Ah Poong dan JungleLand Adventure di Sentul: satu hari keluarga. Jarak & waktu tempuh cek di peta; seabungkan waktu istirahat.",
    h1: "Ah Poong & JungleLand",
    lead: "JungleLand adalah taman petualangan di kawasan Sentul. Gabungkan dengan Ah Poong untuk hari keluarga utuh, asal jarak diverifikasi.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Ide", "Satu hari keluarga"],
      ["Jarak", "Cek di peta Sentul"],
      ["Istirahat", "Sisipkan waktu antar tujuan"],
    ],
    sections: [
      {
        heading: "Mengapa menggabung",
        body: "JungleLand menawarkan wahana petualangan, sementara Ah Poong memberi jeda kuliner tepi air. Keduanya di kawasan Sentul sehingga logis digabung.",
      },
      {
        heading: "Verifikasi jarak & tiket",
        body: "Kami tidak memegang jarak pasti, waktu tempuh, atau harga tiket JungleLand. Cek di peta dan situs resmi JungleLand sebelum merencanakan.",
      },
      {
        heading: "Urutan harian",
        body: "Banyak yang mulai dari taman petualangan pagi, lalu makan siang/sore di Ah Poong. Beri jeda agar anak tidak lelah.",
      },
    ],
    faqs: [
      {
        q: "Bisa satu hari Ah Poong dan JungleLand?",
        a: "Bisa sebagai hari keluarga, asal jarak dan waktu tempuh antara keduanya diverifikasi di peta.",
      },
      {
        q: "Berapa jarak Ah Poong ke JungleLand?",
        a: "Kami tidak memegang jarak pasti. Cek di peta Sentul pada hari keberangkatan.",
      },
      {
        q: "Perlu beli tiket JungleLand dulu?",
        a: "Ya, JungleLand punya tiket sendiri. Cek situs resmi mereka; panduan ini tidak menjual atau menjamin ketersediaan.",
      },
    ],
  },

  "mal-terdekat": {
    title: "Mal Terdekat",
    metaTitle: "Mal & Tempat Indoor Dekat Ah Poong untuk Hari Hujan",
    metaDescription:
      "Alternatif indoor dekat Ah Poong saat hujan: cari mall/pusat belanja di Sentul City via peta. Kami tidak mencantumkan nama tertentu agar tak menyesatkan.",
    h1: "Alternatif indoor saat hujan",
    lead: "Bila hujan lebat, geser ke tujuan indoor. Kami tidak memverifikasi mall tertentu, jadi cari via peta yang terkini.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Cari", "Mall di Sentul City via peta"],
      ["Jam", "Cek masing-masing"],
      ["Hujan", "Geser rencana ke indoor"],
    ],
    sections: [
      {
        heading: "Cari dari peta",
        body: "Gunakan peta untuk menemukan pusat belanja atau mall di kawasan Sentul City. Kami sengaja tidak mencantumkan nama tertentu agar tidak menyesatkan bila sudah tutup atau pindah.",
      },
      {
        heading: "Cek jam & akses",
        body: "Verifikasi jam buka, jarak, dan cara ke sana dari Ah Poong sebelum berangkat. Jadikan ini cadangan bila cuaca buruk.",
      },
      {
        heading: "Gabung dengan kuliner",
        body: "Beberapa mall punya food court sebagai pengganti duduk tepi air saat hujan. Sesuaikan dengan kebutuhan keluarga.",
      },
    ],
    faqs: [
      {
        q: "Di mana mall terdekat dari Ah Poong?",
        a: "Cari via peta untuk pusat belanja di Sentul City. Kami tidak mencantumkan nama tertentu agar tidak menyesatkan bila berubah.",
      },
      {
        q: "Boleh ganti rencana ke mall saat hujan?",
        a: "Bisa. Jadikan alternatif indoor bila hujan lebat, dan cek jam serta aksesnya dulu.",
      },
      {
        q: "Apakah mall punya makanan serupa?",
        a: "Biasanya ada food court, tetapi jenis dan harga berbeda dari Ah Poong. Sesuaikan ekspektasi.",
      },
    ],
  },

  "rencana-setengah-hari": {
    title: "Rencana Setengah Hari",
    metaTitle: "Rencana Setengah Hari di Ah Poong Sentul",
    metaDescription:
      "Rencana setengah hari Ah Poong Sentul: datang siang, makan tepi air, jalan santai, lalu lanjut tujuan Sentul lain. Fleksibel sesuai cuaca.",
    h1: "Rencana setengah hari",
    lead: "Untuk kunjungan pertama, separuh hari cukup: makan, jalan, dan sedikit menjelajah tepi air.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Waktu", "Sekitar 3–4 jam"],
      ["Fokus", "Makan + jalan santai"],
      ["Lanjut", "Tujuan Sentul lain"],
    ],
    sections: [
      {
        heading: "Alur yang disarankan",
        body: "Datang siang menjelang sore, pesan makan di tepi air, lalu berjalan santai menikmati lanskap. Sisipkan waktu untuk parkir dan antrean.",
      },
      {
        heading: "Jangan terlalu padat",
        body: "Separuh hari lebih nyaman daripada terburu-buru. Biarkan ruang untuk cuaca atau keramaian yang tak terduga.",
      },
      {
        heading: "Lanjutan opsional",
        body: "Bila masih punya waktu, gabungkan dengan ruang hijau atau tujuan Sentul lain yang Anda verifikasi via peta.",
      },
    ],
    faqs: [
      {
        q: "Cukupkah setengah hari di Ah Poong?",
        a: "Untuk kunjungan pertama, ya. Alokasikan 3–4 jam untuk makan dan jalan santai.",
      },
      {
        q: "Kapan mulai terbaik?",
        a: "Siang menjelang sore memberi cahaya nyaman dan variasi penjual lengkap.",
      },
      {
        q: "Bisa tambah tujuan lain?",
        a: "Bisa bila waktu mencukupi. Verifikasi jarak tujuan Sentul lain di peta dulu.",
      },
    ],
  },

  "rencana-sehari-keluarga": {
    title: "Sehari Keluarga",
    metaTitle: "Rencana Sehari Keluarga: Ah Poong + Sentul",
    metaDescription:
      "Rencana sehari keluarga dari Ah Poong: pagi wahana, siang makan tepi air, sore santai. Verifikasi jarak & tiket tiap tujuan di peta.",
    h1: "Rencana sehari keluarga",
    lead: "Hari penuh di Sentul: padukan Ah Poong dengan satu tujuan lain yang diverifikasi, dengan jeda istirahat cukup.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Pola", "Wahana pagi + Ah Poong siang"],
      ["Jeda", "Istirahat cukup untuk anak"],
      ["Verifikasi", "Jarak & tiket tiap tujuan"],
    ],
    sections: [
      {
        heading: "Pola harian",
        body: "Mulai dari taman petualangan atau ruang budaya di Sentul pagi hari, lalu makan siang/sore di Ah Poong, dan tutup dengan jalan santai tepi air.",
      },
      {
        heading: "Jaga ritme anak",
        body: "Sisipkan waktu istirahat dan makan di antara tujuan. Jangan tumpuk terlalu banyak wahana dalam satu hari.",
      },
      {
        heading: "Verifikasi sebelum berangkat",
        body: "Cek jarak, waktu tempuh, dan tiket tiap tujuan di peta. Jangan kunci rencana sebelum semua bagian diverifikasi.",
      },
    ],
    faqs: [
      {
        q: "Bagaimana susun sehari keluarga?",
        a: "Wahana pagi, makan di Ah Poong siang, lalu santai sore. Verifikasi jarak tiap tujuan di peta.",
      },
      {
        q: "Apakah melelahkan untuk anak?",
        a: "Bisa bila terlalu padat. Beri jeda istirahat dan jangan tumpuk banyak wahana.",
      },
      {
        q: "Perlu beli tiket lebih dari satu?",
        a: "Ya, bila gabung taman berbayar. Cek situs resmi masing-masing; panduan ini tidak menjual tiket.",
      },
    ],
  },

  "akhir-pekan-hemat": {
    title: "Akhir Pekan Hemat",
    metaTitle: "Rencana Akhir Pekan Hemat di Ah Poong Sentul",
    metaDescription:
      "Akhir pekan hemat di Ah Poong: datang lebih awal hindari antrean, bandingkan penjual, bawa air & cetakan. Parkir & makan biayanya cek di lokasi.",
    h1: "Akhir pekan hemat",
    lead: "Kunjungan murah tetap mungkin bila Anda datang lebih awal, membandingkan harga, dan menyiapkan kebutuhan sendiri.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Datang", "Lebih awal hindari antrean"],
      ["Banding", "Harga antar penjual"],
      ["Bawa", "Air & kebutuhan dasar"],
    ],
    sections: [
      {
        heading: "Hindari puncak",
        body: "Sabtu–Minggu lebih ramai. Datang lebih awal mengurangi antrean makanan dan menambah peluang dapat tempat duduk tepi air.",
      },
      {
        heading: "Bandung harga",
        body: "Karena banyak penjual, bandingkan harga dan porsi sebelum memutuskan. Tanya sebelum memesan agar sesuai anggaran.",
      },
      {
        heading: "Siapkan sendiri",
        body: "Bawa air minum, pelindung cuaca, dan kebutuhan dasar untuk mengurangi pengeluaran tak terduga di lokasi.",
      },
    ],
    faqs: [
      {
        q: "Apakah bisa hemat di Ah Poong?",
        a: "Bisa dengan datang lebih awal, membandingkan penjual, dan membawa kebutuhan dasar sendiri.",
      },
      {
        q: "Akhir pekan lebih mahal?",
        a: "Harga per penjual bisa berbeda, bukan otomatis lebih mahal. Bandingkan dan tanya sebelum beli.",
      },
      {
        q: "Tips hindari antrean?",
        a: "Datang lebih awal dan hindari jam makan puncak. Siapkan waktu ekstra untuk parkir.",
      },
    ],
  },

  "sore-dan-malam": {
    title: "Sore & Malam",
    metaTitle: "Sore, Makan Malam & Aktivitas Malam di Ah Poong Sentul",
    metaDescription:
      "Sore & malam di Ah Poong: cahaya tenang tepi air, tetapi jam malam belum terverifikasi. Cek peta sebelum rencanakan kunjungan malam.",
    h1: "Sore, makan malam & malam",
    lead: "Sore sering memberi suasana paling tenang, tapi jam operasional malam belum kami verifikasi.",
    updated: "Diperbarui: 28 Oktober 2026",
    facts: [
      ["Sore", "Cahaya tenang tepi air"],
      ["Malam", "Jam belum terverifikasi"],
      ["Cek", "Peta sebelum rencana malam"],
    ],
    sections: [
      {
        heading: "Sore paling nyaman",
        body: "Menjelang sore, cahaya meredup dan suasana tepi air sering paling tenang. Ini waktu favorit banyak pengunjung untuk duduk santai.",
      },
      {
        heading: "Malam butuh verifikasi",
        body: "Jam operasional per malam belum kami verifikasi. Cek peta dan tanya penjual sebelum merencanakan makan malam atau aktivitas malam.",
      },
      {
        heading: "Pulang aman",
        body: "Bila tetap datang malam, siapkan transportasi pulang sejak awal karena aplikasi bisa lebih lama saat ramai.",
      },
    ],
    faqs: [
      {
        q: "Bagaimana suasana sore di Ah Poong?",
        a: "Paling tenang dengan cahaya meredup tepi air. Waktu favorit banyak pengunjung untuk duduk santai.",
      },
      {
        q: "Apakah buka untuk makan malam?",
        a: "Jam malam belum terverifikasi. Cek peta dan tanya penjual sebelum merencanakan kunjungan malam.",
      },
      {
        q: "Apakah aman pulang malam?",
        a: "Siapkan transportasi sejak awal. Waktu tunggu aplikasi cenderung lebih lama saat ramai atau malam.",
      },
    ],
  },
};
