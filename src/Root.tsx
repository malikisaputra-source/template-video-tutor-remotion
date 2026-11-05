import React from "react";
import { Composition } from "remotion";
import { Video, durasiTotal } from "./Video";

export const RemotionRoot: React.FC = () => (
  <Composition id="TutorReels" component={Video} durationInFrames={durasiTotal()} fps={30} width={1080} height={1920} />
);
