import { Spacer } from "@nextui-org/react";
import { wait } from "next/dist/lib/wait";

import { title } from "@/components/primitives";
import BirthdayTable from "@/components/birthday-table";

async function getData() {
  const res = await fetch("http://localhost:8089/api/getBirthdays", {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

export default async function BirthdayPage() {
  const birthdays = await getData();

  await wait(5000);

  return (
    <div className="w-full">
      <h1 className={title()}>Geburstagskalender</h1>
      <Spacer y={7} />
      <BirthdayTable birthdays={birthdays} />
    </div>
  );
}
