import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import { konten } from "./konten";
import { Ajakan, Hasil, Hook, Langkah, Prompt } from "./adegan/Adegan";

export const durasiTotal = () => konten.hook.durasi + konten.langkah.reduce((a, l) => a + l.durasi, 0) + konten.prompt.durasi + konten.hasil.durasi + konten.ajakan.durasi;

// Musik opsional: taruh public/musik.mp3 lalu ubah PAKAI_MUSIK jadi true.
const PAKAI_MUSIK = false;

export const Video: React.FC = () => (
  <AbsoluteFill>
    <Series>
      <Series.Sequence durationInFrames={konten.hook.durasi}><Hook /></Series.Sequence>
      {konten.langkah.map((l, i) => (
        <Series.Sequence key={i} durationInFrames={l.durasi}><Langkah i={i} /></Series.Sequence>
      ))}
      <Series.Sequence durationInFrames={konten.prompt.durasi}><Prompt /></Series.Sequence>
      <Series.Sequence durationInFrames={konten.hasil.durasi}><Hasil /></Series.Sequence>
      <Series.Sequence durationInFrames={konten.ajakan.durasi}><Ajakan /></Series.Sequence>
    </Series>
    {PAKAI_MUSIK ? <Audio src={staticFile("musik.mp3")} volume={0.3} /> : null}
  </AbsoluteFill>
);
