"use client";
import { Input } from "@nextui-org/input";
import React, { useMemo, useState } from "react";
import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import { birthday } from "@/types";

interface Props {
  birthdays: birthday[];
}

const columns = [
  { key: "fullName", label: "NAME" },
  { key: "birthday", label: "GEBURTSTAG" },
  { key: "age", label: "ALTER" },
  { key: "daysTillBirthday", label: "TAGE BIS ZUM GEBURTSTAG" },
];

export default function BirthdayTable({ birthdays }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    return birthdays.filter((item) =>
      item.fullName.toLowerCase().startsWith(searchTerm.toLowerCase()),
    );
  }, [birthdays, searchTerm]);

  return (
    <div className="text-start">
      <Input
        className="mb-4"
        placeholder="Nach namen suchen..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table aria-label="Birthday table with search functionality">
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody items={filteredItems}>
          {(item) => (
            <TableRow key={item.fullName}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
