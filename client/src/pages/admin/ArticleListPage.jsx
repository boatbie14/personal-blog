import React, { useState } from "react";
import AdminLayout from "@/layouts/AdminLayout";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { ArrowUpDown, ChevronDown, Edit, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

/* Mockup Data */
// Mock data
const data = [
  {
    id: "article-01",
    title: "10 Tips for Better React Performance",
    category: "Development",
    status: "published",
  },
  {
    id: "article-02",
    title: "Understanding TypeScript Generics",
    category: "Development",
    status: "draft",
  },
  {
    id: "article-03",
    title: "CSS Grid vs Flexbox: When to Use Each",
    category: "Design",
    status: "published",
  },
  {
    id: "article-04",
    title: "Getting Started with NextJS 13",
    category: "Development",
    status: "published",
  },
  {
    id: "article-05",
    title: "The Future of Web Development",
    category: "Opinion",
    status: "draft",
  },
  {
    id: "article-06",
    title: "How to Design Accessible Websites",
    category: "Design",
    status: "review",
  },
  {
    id: "article-07",
    title: "JavaScript: The Good Parts",
    category: "Development",
    status: "published",
  },
  {
    id: "article-08",
    title: "Building a Design System from Scratch",
    category: "Design",
    status: "review",
  },
  {
    id: "article-09",
    title: "Building a Design System from Scratch",
    category: "Design",
    status: "review",
  },
  {
    id: "article-10",
    title: "Building a Design System from Scratch",
    category: "Design",
    status: "review",
  },
  {
    id: "article-11",
    title: "Building a Design System from Scratch",
    category: "Design",
    status: "review",
  },
];

export const columns = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="hover:bg-transparent">
          Article Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="font-medium">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <div className="flex items-center">
          <div
            className={`h-2 w-2 rounded-full mr-2 ${
              status === "published" ? "bg-green-500" : status === "draft" ? "bg-yellow-500" : "bg-blue-500"
            }`}
          />
          <span className="capitalize">{status}</span>
        </div>
      );
    },
  },
  {
    id: "edit",
    enableHiding: false,
    cell: ({ row }) => {
      const article = row.original;

      return (
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Edit className="h-4 w-4" />
          <span className="sr-only">Edit article</span>
        </Button>
      );
    },
  },
  {
    id: "delete",
    enableHiding: false,
    cell: ({ row }) => {
      const article = row.original;

      return (
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Trash2 className="h-4 w-4 text-red-500" />
          <span className="sr-only">Delete article</span>
        </Button>
      );
    },
  },
];

function ArticleListPage() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <AdminLayout title="Article Management" createArticleBtn="+ Create article">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center gap-4 py-4">
          <Input
            placeholder="Search articles..."
            value={table.getColumn("title")?.getFilterValue() ?? ""}
            onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />

          <div className="flex items-center gap-2">
            <Select
              value={table.getColumn("status")?.getFilterValue() ?? ""}
              onValueChange={(value) => table.getColumn("status")?.setFilterValue(value || undefined)}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="review">Review</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={table.getColumn("category")?.getFilterValue() ?? ""}
              onValueChange={(value) => table.getColumn("category")?.setFilterValue(value || undefined)}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Development">Development</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Opinion">Opinion</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
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
                    No results.
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

export default ArticleListPage;
