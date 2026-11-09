/* kredit-maliki: Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id. Lisensi MIT + wajib atribusi (lihat LICENSE). */
// SEMUA teks video ada di sini. Ganti isinya, simpan, lalu render ulang.
// Durasi dalam frame (30 frame = 1 detik).
export const konten = {
  topik: "// 01 — rumus prompt",
  akun: "@akunkamu",
  label: "TUTOR AI",
  hook: { judul: "Prompt kamu", aksen: "kurang jelas?", sub: "Pakai rumus 3 langkah ini.", durasi: 90 },
  langkah: [
    { nomor: "01", judul: "Peran", isi: "Beri AI peran yang jelas, misalnya: kamu adalah guru SD.", warna: "biru", durasi: 90 },
    { nomor: "02", judul: "Tugas", isi: "Tulis apa yang harus dikerjakan, satu kalimat saja.", warna: "oranye", durasi: 90 },
    { nomor: "03", judul: "Format", isi: "Minta bentuk hasil: tabel, poin, atau 100 kata.", warna: "hijau", durasi: 90 },
  ],
  prompt: {
    judul: "Contoh prompt",
    kode: "Kamu adalah guru SD.\nJelaskan fotosintesis\nuntuk anak kelas 4.\nFormat: 5 poin pendek.",
    durasi: 150,
  },
  hasil: { judul: "Hasilnya", poin: ["Jawaban lebih terarah", "Bahasa sesuai pembaca", "Format rapi, siap pakai"], durasi: 105 },
  ajakan: { judul: "Simpan & coba!", baris: ["Follow untuk tips berikutnya", "Share ke teman yang butuh"], durasi: 90 },
  // LOGO & FOTO — nama berkas di folder public/. Ganti = timpa berkas bernama sama atau ubah nama di sini.
  // Kosongkan ("") untuk menyembunyikan slot. Logo kosong/gagal dimuat = inisial dari akun.
  gambar: {
    logo: "logo.svg",        // 1:1, tampil di header tiap adegan
    watermark: true,         // logo kecil transparan di pojok kanan bawah sepanjang video
    hasil: "hasil.svg",      // 16:9, tangkapan layar hasil di adegan "Hasilnya"
    profil: "profil.svg",    // 1:1, foto/avatar kamu di adegan ajakan
  },
} as const;

export type NamaWarna = "biru" | "oranye" | "hijau" | "ungu";
