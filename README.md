# Template Video Tutor Reels (Remotion)

Template video tutorial vertikal (9:16, 1080x1920, 30fps) yang dibuat dengan kode. Cocok untuk konten "tips AI", tutorial singkat, atau edukasi di TikTok, Reels, dan Shorts.

## Fitur
- 7 adegan: Hook, Langkah 1–3, Prompt (efek mengetik), Hasil, Ajakan (follow/share)
- Latar grid gelap/terang bergantian, header meta monospace
- Aksen warna: biru `#3b82f6`, oranye `#f59e0b`, hijau `#10b981`, ungu `#a855f7`
- Semua teks & durasi di satu berkas: `src/konten.ts`
- Tanpa audio bawaan (slot musik opsional)

## Cara menjalankan
1. Install [Node.js](https://nodejs.org) versi 18 ke atas.
2. Buka terminal di folder ini, jalankan `npm install`.
3. Ubah teks di `src/konten.ts`.
4. Pratinjau: `npm run studio` (buka alamat yang muncul di browser).
5. Render video: `npm run render` → hasil di `out/video.mp4`.
6. Cek kode (opsional): `npm run cek`.

## Musik (opsional)
Taruh berkas musikmu (yang lisensinya aman) di `public/musik.mp3`, lalu di `src/Video.tsx` ubah `PAKAI_MUSIK` menjadi `true`.

## Struktur folder
```
src/
  index.ts          titik masuk Remotion
  Root.tsx          daftar komposisi (TutorReels)
  Video.tsx         urutan adegan + slot musik
  konten.ts         SEMUA teks & durasi
  gaya.tsx          warna, font, latar grid, header, kartu
  adegan/Adegan.tsx komponen tiap adegan
public/             tempat musik.mp3 (opsional)
```

## Ubah brand/warna
- Warna aksen: `AKSEN` di `src/gaya.tsx`.
- Warna latar gelap/terang: `PALET` di `src/gaya.tsx`.
- Font: `SANS` dan `MONO` di `src/gaya.tsx`.
- Warna tiap langkah: field `warna` (`biru`/`oranye`/`hijau`/`ungu`) di `src/konten.ts`.

## Lisensi
MIT — lihat `LICENSE`.

## Kredit
Dibuat oleh Maliki Studio — malikisaputra.biz.id, follow TikTok/IG @malikisaputra

---

<!-- kredit-maliki -->
**Kredit:** Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id. Kredit di footer & kepala berkas wajib dipertahankan (lihat LICENSE).

<!-- panduan-ai-maliki -->
## Ubah sendiri sesuai kebutuhanmu pakai AI

Kamu tidak perlu jago coding. Template ini sudah disiapkan supaya mudah diubah AI: ada **AGENTS.md** (aturan proyek untuk AI), **DESIGN.md** (gaya desain), dan skill Claude di folder `.claude/skills/`. Pilih salah satu cara di bawah.

### Cara 1: ChatGPT, Claude, atau Gemini di browser (paling gampang, gratis)
1. Unduh ZIP template ini, lalu ekstrak.
2. Buka chatgpt.com, claude.ai, atau gemini.google.com.
3. Unggah berkas yang mau diubah (biasanya `index.html`, `style.css`, `app.js`, atau berkas data). Unggah juga `AGENTS.md` dan `DESIGN.md` (kalau ada) biar AI paham aturannya. ChatGPT juga bisa menerima ZIP utuh.
4. Tulis permintaanmu (contoh di bawah), lalu minta: "Kirim ulang berkas yang diubah secara utuh."
5. Ganti berkas lama dengan hasil dari AI, lalu buka `index.html` di browser untuk cek.

### Cara 2: Claude Code (paling rapi untuk perubahan besar)
1. Pasang Claude Code (lihat claude.com/claude-code), atau pakai aplikasi Claude Desktop tab Code.
2. Buka folder template ini, lalu jalankan `claude` di terminal folder itu.
3. Tulis permintaanmu. Kalau ada folder `.claude/skills/ubah-…`, Claude Code otomatis memakainya, jadi hasilnya tetap mengikuti desain aslinya.

### Cara 3: Codex (OpenAI)
1. Pasang Codex CLI atau pakai Codex di aplikasi ChatGPT.
2. Buka folder template, jalankan `codex`. Codex otomatis membaca `AGENTS.md`.
3. Tulis permintaanmu, cek perubahannya, lalu setujui.

### Cara 4: Google Antigravity atau Gemini CLI (gratis)
1. Antigravity: buka aplikasinya, pilih **Open Folder** ke folder template ini, lalu tulis permintaan di panel agen.
2. Gemini CLI: jalankan `gemini` di folder template.
3. Di awal, tulis: "Baca AGENTS.md dan DESIGN.md dulu sebelum mengubah apa pun."

### Contoh permintaan yang bisa langsung kamu pakai
- "Ganti nama, logo teks, dan warna utama jadi hijau tua sesuai usahaku: [nama usaha]."
- "Tambahkan kolom [nama kolom] di formulir dan tampilkan di daftar."
- "Ubah semua data contoh jadi data usahaku: [tempel datanya]."
- "Tambahkan halaman/menu baru untuk [kebutuhan], gaya desainnya sama dengan yang sudah ada."
- "Jelaskan dulu cara kerja aplikasi ini dengan bahasa sederhana, baru ubah [bagian]."

### Tips biar hasilnya bagus
- Satu permintaan = satu perubahan. Cek dulu hasilnya, baru minta yang berikutnya.
- Simpan salinan folder asli sebelum mengubah, jadi bisa balik kalau ada yang rusak.
- Kalau ada error, salin pesan errornya (klik kanan > Inspect > Console) lalu tempel ke AI.
- Data aplikasi tersimpan di browser (localStorage). Backup dulu sebelum ganti versi.
- Jangan hapus kredit "Template oleh @malikisaputra". Itu syarat lisensinya.

Masih bingung? Komen di TikTok/IG **@malikisaputra**, nanti aku bantu.
