# 🎓 Implementation Plan — Graduation Website (Luxury Gold & Black Theme)

## 1. Tech Stack

| Kategori | Pilihan | Alasan |
|---|---|---|
| Framework | React 18 + Vite | Build cepat, HMR ringan |
| Styling | TailwindCSS + custom CSS vars | Kontrol warna emas/hitam presisi |
| Animasi | Framer Motion | Transisi antar section yang smooth |
| Scroll | React Scroll / Intersection Observer | Trigger animasi saat section masuk viewport |
| Icons | Lucide React | Ikon minimalis elegan |
| Font | Google Fonts: "Playfair Display" (heading) + "Cormorant" / "Inter" (body) | Kesan mewah + tetap terbaca |
| Countdown | dayjs / date-fns | Hitung mundur ke hari-H |
| Gallery | Swiper.js atau custom Framer Motion carousel | Foto galeri interaktif |
| Maps | Google Maps Embed / React-Leaflet | Lokasi acara |
| State | React Context / Zustand (opsional) | Kalau perlu share data (RSVP, tema, dsb) |

---

## 2. Color Palette & Design Tokens

```css
--color-black-primary:   #0A0A0A;   /* background utama */
--color-black-soft:      #1A1A1A;   /* card/section alt */
--color-gold-primary:    #D4AF37;   /* aksen utama, teks penting */
--color-gold-light:      #F5D982;   /* highlight, hover */
--color-gold-muted:      #8B7332;   /* border, divider */
--color-white-cream:     #F8F5EC;   /* teks body di atas hitam */
```

**Prinsip desain:**
- Banyak *negative space*, jangan ramai
- Garis emas tipis (1px) sebagai divider elegan
- Efek *shimmer/gradient* emas untuk teks besar (nama graduate)
- Shadow lembut, hindari flat design terlalu datar
- Micro-interaction halus (bukan animasi berlebihan)

---

## 3. Struktur Komponen React

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx (opsional, dot navigation per section)
│   │   └── ScrollProgress.jsx (indikator scroll emas tipis)
│   ├── sections/
│   │   ├── 01-OpeningScreen.jsx
│   │   ├── 02-HeroIntro.jsx
│   │   ├── 03-Journey.jsx
│   │   ├── 04-GraduationAnnouncement.jsx
│   │   ├── 05-EventInfo.jsx
│   │   ├── 06-Countdown.jsx
│   │   ├── 07-PhotoGallery.jsx
│   │   ├── 08-GuestCongrats.jsx
│   │   ├── 09-LocationMaps.jsx
│   │   └── 10-FinalCelebration.jsx
│   └── ui/
│       ├── GoldDivider.jsx
│       ├── AnimatedText.jsx
│       ├── CountdownTimer.jsx
│       ├── ConfettiEffect.jsx
│       └── MusicToggle.jsx (background music on/off)
├── hooks/
│   └── useScrollReveal.js
├── data/
│   └── content.js (semua teks/tanggal/foto dikelola terpusat)
└── App.jsx
```

---

## 4. Detail Per Section

### 01. Opening Screen (Cover/Invitation Gate)
- Full-screen hitam dengan monogram emas (inisial graduate)
- Tombol "Buka Undangan" dengan efek *glow* emas saat hover
- Musik latar bisa di-trigger di sini (autoplay browser modern butuh klik dulu)
- Transisi: fade + scale saat masuk ke Hero

### 02. Hero / Graduate Introduction
- Foto graduate (toga) dengan frame emas dekoratif
- Nama besar pakai font Playfair Display + efek *gold shimmer*
- Subtitle: jurusan, universitas, tahun kelulusan
- Animasi: `fade-up` staggered pakai Framer Motion

### 03. The Journey
- Timeline vertikal bergaya elegan (garis emas di tengah, titik-titik milestone)
- Tiap milestone: tahun masuk kuliah → organisasi → magang → skripsi → wisuda
- Animasi scroll-reveal per item timeline

### 04. Graduation Announcement
- Kalimat formal "Dengan penuh rasa syukur, kami mengumumkan..."
- Bisa tampilkan quote/motto inspiratif graduate
- Ornamen garis emas melengkung (SVG) di atas/bawah teks

### 05. Event Information
- Card info: Tanggal, Waktu, Dresscode, Venue
- Layout grid 2 kolom (desktop) / stack (mobile)
- Icon emas minimalis (kalender, jam, lokasi)

### 06. Countdown
- Timer real-time (hari, jam, menit, detik) ke tanggal wisuda
- Angka besar dengan efek *flip* atau *pulse* emas
- Background gradient hitam-ke-emas subtle

### 07. Photo Gallery
- Grid masonry atau carousel swipeable
- Lightbox saat foto diklik (zoom in dengan overlay hitam transparan)
- Hover effect: border emas + sedikit scale up

### 08. Guest Congratulations
- Form ucapan selamat (nama + pesan) — untuk MVP frontend-only, simpan di state lokal/localStorage
- List ucapan tampil seperti "wall of love" dengan card gelap bertepi emas
- Animasi masuk: slide-in bergantian kiri-kanan

### 09. Location / Maps
- Embed Google Maps dengan style custom (jika bisa, ubah tone map jadi gelap agar konsisten tema)
- Tombol "Buka di Google Maps" dan "Buka di Waze"
- Info venue tambahan (parkir, patokan)

### 10. Final Celebration 🎉
- Ucapan penutup + confetti animasi emas (canvas-confetti atau custom SVG particle)
- Tombol share ke sosial media / copy link
- Tanda tangan digital graduate (bisa pakai font script emas)

---

## 5. Interaksi & Animasi Global

| Elemen | Efek |
|---|---|
| Scroll antar section | Snap-scroll (opsional) + fade/slide reveal |
| Judul besar | Gold gradient shimmer (CSS `background-clip: text`) |
| Divider | Garis emas tipis dengan animasi "draw" (SVG stroke-dashoffset) |
| Tombol | Hover: glow shadow emas, scale 1.03 |
| Loading | Elegant preloader dengan logo/inisial graduate |
| Cursor (opsional desktop) | Custom cursor emas kecil untuk kesan premium |

---

## 6. Responsive Strategy
- Mobile-first, karena mayoritas tamu akan buka via WhatsApp link
- Section height: `min-h-screen` dengan padding aman untuk notch
- Font size scaling pakai `clamp()` agar tetap proporsional di semua device

---

## 7. Roadmap Pengerjaan (Estimasi)

| Tahap | Task | Estimasi |
|---|---|---|
| 1 | Setup project, Tailwind config, palet warna, font | 0.5 hari |
| 2 | Komponen UI dasar (GoldDivider, AnimatedText, Countdown) | 1 hari |
| 3 | Section 1–4 (Opening → Announcement) | 1 hari |
| 4 | Section 5–7 (Event Info, Countdown, Gallery) | 1.5 hari |
| 5 | Section 8–10 (Ucapan, Maps, Final) | 1 hari |
| 6 | Polish animasi, responsive testing, optimasi asset | 1 hari |
