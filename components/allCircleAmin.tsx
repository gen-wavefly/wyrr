import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
// import BgCircleAmin from "./bgCircleAmin";
const BgCircleAmin = dynamic(() => import("./bgCircleAmin"), { ssr: false });

export default function AllCircleAmin() {
  return (
    <>
      <BgCircleAmin posY={-2600} active id={1} />
      <BgCircleAmin posY={-3200} posX={-100} active id={2} />
      <BgCircleAmin posY={-2900} posX={620} active id={3} />
      <BgCircleAmin posY={-2500} posX={1020} active id={4} />
      <BgCircleAmin posY={-2250} posX={220} id={5} />
      <BgCircleAmin posY={-1800} posX={320} id={6} />
      <BgCircleAmin posY={-1400} posX={820} id={7} />
      {/* <BgCircleAmin  posY={-1400} posX={620} /> */}
      <BgCircleAmin posY={-800} posX={1220} id={8} />
      <BgCircleAmin posY={-400} posX={520} id={9} />
      <BgCircleAmin posY={100} posX={820} id={10} />
    </>
  );
}
