"use client";
import React from "react";
import { CircularProgress, Spacer } from "@nextui-org/react";

import { title } from "@/components/primitives";

export default function loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
      <h1 className={title({ color: "red" })}>Daten werden geladen &nbsp;</h1>
      <Spacer y={7} />
      <CircularProgress
        aria-label="Loading..."
        classNames={{
          svg: "w-36 h-36",
        }}
        color="danger"
      />
    </div>
  );
}
