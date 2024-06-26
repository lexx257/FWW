import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider, Spacer } from "@nextui-org/react";
import React from "react";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "red" })}>Fernmeldezug&nbsp;</h1>
        <br />
        <h4 className={subtitle({ class: "mt-4" })}>Dortmund</h4>
      </div>
      <Spacer y={7} />
      <div className="w-full flex justify-between gap-o">
        <Card>
          <CardHeader className={subtitle()}>News</CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className={subtitle()}>Einsätze</CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
