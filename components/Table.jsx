import React from "react";
import { Table } from "@radix-ui/themes";

const TableComp = () => {
  return (
    <div className="mt-10 w-full md:w-[1200px]">
      <Table.Root className="border rounded-lg shadow-xl">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>State</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Commodity</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Max. price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Min. price</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
            <Table.Cell>danilo@example.com</Table.Cell>
            <Table.Cell>Developer</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
            <Table.Cell>zahra@example.com</Table.Cell>
            <Table.Cell>Admin</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
            <Table.Cell>jasper@example.com</Table.Cell>
            <Table.Cell>Developer</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default TableComp;
