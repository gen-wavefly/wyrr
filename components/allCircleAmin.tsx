import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
// import BgCircleAmin from "./bgCircleAmin";
const BgCircleAmin = dynamic(() => import("./bgCircleAmin"), { ssr: false });

export default function AllCircleAmin() {
  return <></>;
}
