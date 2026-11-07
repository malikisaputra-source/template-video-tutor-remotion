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
