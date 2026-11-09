/* kredit-maliki: Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id. Lisensi MIT + wajib atribusi (lihat LICENSE). */
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { konten, type NamaWarna } from "../konten";
import { AKSEN, Gambar, Header, Kartu, Latar, MONO, PALET, masuk, type Tema } from "../gaya";

const Tengah: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ position: "absolute", inset: "330px 72px 260px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 40 }}>{children}</div>
);
const naik = (f: number, a: number) => ({ opacity: masuk(f, a), transform: `translateY(${(1 - masuk(f, a)) * 40}px)` });

export const Hook: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig(); const h = konten.hook;
  const s = spring({ frame: f - 10, fps, config: { damping: 12 } });
  return (
    <Latar tema="gelap">
      <Header tema="gelap" kiri={konten.topik} kanan={konten.label} akun={konten.akun} />
      <Tengah>
        <div style={{ fontSize: 130, fontWeight: 800, lineHeight: 1.02, ...naik(f, 0) }}>{h.judul}</div>
        <div style={{ fontSize: 130, fontWeight: 800, lineHeight: 1.02, color: AKSEN.oranye, transform: `scale(${0.8 + 0.2 * s})`, transformOrigin: "left", opacity: s }}>{h.aksen}</div>
        <div style={{ fontSize: 50, color: PALET.gelap.redup, ...naik(f, 30) }}>{h.sub}</div>
      </Tengah>
    </Latar>
  );
};

export const Langkah: React.FC<{ i: number }> = ({ i }) => {
  const f = useCurrentFrame(); const l = konten.langkah[i]; const warna = AKSEN[l.warna as NamaWarna];
  const tema: Tema = i % 2 === 0 ? "terang" : "gelap"; const total = konten.langkah.length;
  return (
    <Latar tema={tema}>
      <Header tema={tema} kiri={konten.topik} kanan={`LANGKAH ${i + 1}/${total}`} akun={konten.akun} />
      <Tengah>
        <div style={{ display: "flex", gap: 16 }}>{konten.langkah.map((_, j) => (
          <div key={j} style={{ flex: 1, height: 12, borderRadius: 6, background: j <= i ? warna : PALET[tema].garis }} />))}</div>
        <Kartu tema={tema} style={naik(f, 0)}>
          <div style={{ fontFamily: MONO, fontSize: 40, color: warna }}>{l.nomor}</div>
          <div style={{ fontSize: 110, fontWeight: 800, margin: "16px 0 28px" }}>{l.judul}</div>
          <div style={{ fontSize: 52, lineHeight: 1.35, color: PALET[tema].redup, ...naik(f, 18) }}>{l.isi}</div>
        </Kartu>
      </Tengah>
    </Latar>
  );
};

export const Prompt: React.FC = () => {
  const f = useCurrentFrame(); const p = konten.prompt;
  const n = Math.floor(interpolate(f, [15, p.durasi - 30], [0, p.kode.length], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const kedip = Math.floor(f / 15) % 2 === 0;
  return (
    <Latar tema="gelap">
      <Header tema="gelap" kiri={konten.topik} kanan="PROMPT" akun={konten.akun} />
      <Tengah>
        <div style={{ fontSize: 80, fontWeight: 800, ...naik(f, 0) }}>{p.judul}</div>
        <Kartu tema="gelap" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ display: "flex", gap: 14, padding: "26px 36px", borderBottom: `2px solid ${PALET.gelap.garis}` }}>
            {[AKSEN.oranye, AKSEN.hijau, AKSEN.biru].map((c) => <div key={c} style={{ width: 22, height: 22, borderRadius: 11, background: c }} />)}
            <span style={{ fontFamily: MONO, fontSize: 24, color: PALET.gelap.redup, marginLeft: 12 }}>prompt.txt</span>
          </div>
          <pre style={{ margin: 0, padding: 44, fontFamily: MONO, fontSize: 46, lineHeight: 1.5, whiteSpace: "pre-wrap", color: "#e5e7eb", minHeight: 360 }}>
            {p.kode.slice(0, n)}<span style={{ color: AKSEN.ungu, opacity: kedip ? 1 : 0 }}>▍</span>
          </pre>
        </Kartu>
      </Tengah>
    </Latar>
  );
};

export const Hasil: React.FC = () => {
  const f = useCurrentFrame(); const h = konten.hasil;
  return (
    <Latar tema="terang">
      <Header tema="terang" kiri={konten.topik} kanan="HASIL" akun={konten.akun} />
      <Tengah>
        <div style={{ fontSize: 110, fontWeight: 800, ...naik(f, 0) }}>{h.judul}</div>
        <Gambar src={konten.gambar.hasil} style={{ width: "100%", maxHeight: 420, objectFit: "cover", borderRadius: 28, border: `2px solid ${PALET.terang.garis}`, ...naik(f, 8) }} />
        {h.poin.map((t, j) => (
          <Kartu key={t} tema="terang" style={{ padding: "40px 48px", display: "flex", alignItems: "center", gap: 32, ...naik(f, 15 + j * 15) }}>
            <div style={{ width: 70, height: 70, borderRadius: 35, background: AKSEN.hijau, color: "#fff", fontSize: 44, display: "grid", placeItems: "center", flexShrink: 0 }}>✓</div>
            <div style={{ fontSize: 52, fontWeight: 600 }}>{t}</div>
          </Kartu>))}
      </Tengah>
    </Latar>
  );
};

export const Ajakan: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig(); const a = konten.ajakan;
  const s = spring({ frame: f, fps, config: { damping: 10 } });
  const warna = [AKSEN.biru, AKSEN.ungu];
  return (
    <Latar tema="gelap">
      <Header tema="gelap" kiri={konten.topik} kanan="SELESAI" akun={konten.akun} />
      <Tengah>
        <div style={{ fontSize: 130, fontWeight: 800, transform: `scale(${s})`, transformOrigin: "left" }}>{a.judul}</div>
        {a.baris.map((t, j) => (
          <div key={t} style={{ fontSize: 54, fontWeight: 700, padding: "34px 44px", borderRadius: 999, border: `3px solid ${warna[j % 2]}`, color: warna[j % 2], ...naik(f, 20 + j * 15) }}>{t}</div>))}
        <div style={{ display: "flex", alignItems: "center", gap: 28, fontFamily: MONO, fontSize: 36, color: PALET.gelap.redup, ...naik(f, 55) }}>
          <Gambar src={konten.gambar.profil} style={{ width: 150, height: 150, borderRadius: 75, objectFit: "cover", border: `4px solid ${AKSEN.ungu}` }} />
          {konten.akun}
        </div>
      </Tengah>
    </Latar>
  );
};
