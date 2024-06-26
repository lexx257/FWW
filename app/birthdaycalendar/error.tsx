"use client";
import React from "react";
import { Spacer, Button } from "@nextui-org/react";

import { title } from "@/components/primitives";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <section>
        <h1 className={title({ color: "red" })}>
          An {error.message} occurred while fetching Data &nbsp;
        </h1>
      </section>
      <Spacer y={7} />
      <section>
        <Button color="danger" onClick={reset}>
          Try Again
        </Button>
      </section>
    </div>
  );
}
