import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

export const AKSEN = { biru: "#3b82f6", oranye: "#f59e0b", hijau: "#10b981", ungu: "#a855f7" } as const;
export const SANS = "Inter, 'Helvetica Neue', Arial, sans-serif";
export const MONO = "'JetBrains Mono', Menlo, Consolas, monospace";
export type Tema = "gelap" | "terang";
export const PALET = {
  gelap: { latar: "#0b0c0f", grid: "rgba(255,255,255,.06)", tinta: "#f4f5f7", redup: "#8a909b", kartu: "#16181d", garis: "rgba(255,255,255,.12)" },
  terang: { latar: "#f1f2f5", grid: "rgba(15,17,22,.07)", tinta: "#111318", redup: "#5f6570", kartu: "#ffffff", garis: "rgba(15,17,22,.1)" },
};
const jepit = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
export const masuk = (f: number, mulai: number, lama = 12) => interpolate(f, [mulai, mulai + lama], [0, 1], { ...jepit, easing: Easing.out(Easing.cubic) });

export const Latar: React.FC<{ tema: Tema; children: React.ReactNode }> = ({ tema, children }) => {
  const p = PALET[tema];
  return (
    <AbsoluteFill style={{ background: p.latar, color: p.tinta, fontFamily: SANS }}>
      <AbsoluteFill style={{ backgroundImage: `linear-gradient(${p.grid} 1px,transparent 1px),linear-gradient(90deg,${p.grid} 1px,transparent 1px)`, backgroundSize: "72px 72px" }} />
      {children}
    </AbsoluteFill>
  );
};

export const Header: React.FC<{ tema: Tema; kiri: string; kanan: string; akun: string }> = ({ tema, kiri, kanan, akun }) => {
  const p = PALET[tema];
  return (
    <div style={{ position: "absolute", top: 160, left: 72, right: 72, fontFamily: MONO, color: p.redup, fontSize: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}><span>{kiri}</span><span style={{ color: AKSEN.biru }}>{kanan}</span></div>
      <div style={{ marginTop: 8, fontSize: 22 }}>{akun}</div>
    </div>
  );
};

export const Kartu: React.FC<{ tema: Tema; style?: React.CSSProperties; children: React.ReactNode }> = ({ tema, style, children }) => {
  const p = PALET[tema];
  return <div style={{ background: p.kartu, border: `2px solid ${p.garis}`, borderRadius: 36, padding: 56, boxShadow: "0 30px 70px rgba(0,0,0,.25)", ...style }}>{children}</div>;
};
