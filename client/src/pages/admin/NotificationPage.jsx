import React, { useState } from "react";
import AdminLayout from "@/layouts/AdminLayout";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { ArrowUpDown, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

/* Mockup Data */
const data = [
  {
    id: "notif-01",
    type: "like",
    user: {
      name: "John Doe",
      image: "https://placehold.co/200x200",
    },
    content: {
      title: "How to Design Better User Interfaces",
      comment: null,
    },
    time: "4 hours ago",
    url: "/posts/how-to-design-better-user-interfaces",
  },
  {
    id: "notif-02",
    type: "comment",
    user: {
      name: "Sarah Miller",
      image: "https://placehold.co/200x200",
    },
    content: {
      title: "10 Tips for Clean Code",
      comment: "This really helped me organize my codebase better. Thanks for sharing!",
    },
    time: "6 hours ago",
    url: "/posts/10-tips-for-clean-code",
  },
  {
    id: "notif-03",
    type: "like",
    user: {
      name: "Robert Johnson",
      image: "https://placehold.co/200x200",
    },
    content: {
      title: "Understanding React Hooks",
      comment: null,
    },
    time: "1 day ago",
    url: "/posts/understanding-react-hooks",
  },
  {
    id: "notif-04",
    type: "comment",
    user: {
      name: "Emily Chen",
      image: "https://placehold.co/200x200",
    },
    content: {
      title: "CSS Grid vs Flexbox",
      comment: "I still prefer Flexbox for most layouts, but this article makes a compelling case for Grid!",
    },
    time: "2 days ago",
    url: "/posts/css-grid-vs-flexbox",
  },
  {
    id: "notif-05",
    type: "like",
    user: {
      name: "Michael Brown",
      image: "https://placehold.co/200x200",
    },
    content: {
      title: "Getting Started with TypeScript",
      comment: null,
    },
    time: "3 days ago",
    url: "/posts/getting-started-with-typescript",
  },
  {
    id: "notif-06",
    type: "comment",
    user: {
      name: "Jessica Lee",
      image: "https://placehold.co/200x200",
    },
    content: {
      title: "The Future of Web Development",
      comment: "Very insightful predictions! I especially agree with your points about WebAssembly.",
    },
    time: "4 days ago",
    url: "/posts/the-future-of-web-development",
  },
];

export const columns = [
  {
    id: "image",
    enableSorting: false,
    enableHiding: false,
    cell: ({ row }) => {
      const notification = row.original;

      return (
        <div className="flex items-center">
          <img src={notification.user.image} alt={notification.user.name} className="h-10 w-10 rounded-full" />
        </div>
      );
    },
  },
  {
    accessorKey: "details",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="hover:bg-transparent">
          Details
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const notification = row.original;
      return (
        <div className="space-y-1">
          <p className="font-bold">{notification.user.name}</p>
          {notification.type === "like" ? (
            <p className="text-sm text-gray-600">
              Liked on: <span className="font-medium">{notification.content.title}</span>
            </p>
          ) : (
            <>
              <p className="text-sm text-gray-600">
                Commented on: <span className="font-medium">{notification.content.title}</span>
              </p>
              <p className="text-sm italic">"{notification.content.comment}"</p>
            </>
          )}
          <p className="text-xs text-gray-500">{notification.time}</p>
        </div>
      );
    },
  },
  {
    id: "view",
    enableHiding: false,
    cell: ({ row }) => {
      const notification = row.original;

      return (
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <ExternalLink className="h-4 w-4" />
          <span>View</span>
        </Button>
      );
    },
  },
];

function NotificationListPage() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <AdminLayout title="Notifications">
      <div className="w-full p-4">
        <div className="flex items-center justify-between py-4">
          <Input
            placeholder="Search notifications..."
            value={table.getColumn("details")?.getFilterValue() ?? ""}
            onChange={(event) => table.getColumn("details")?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No notifications found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              Previous
            </Button>
            <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default NotificationListPage;
