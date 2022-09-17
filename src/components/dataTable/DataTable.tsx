import * as React from 'react'
import { Table } from 'react-bootstrap'
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table'
import { ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon } from 'react-feather'
type Props<T> = {
    data?: T[]
    columns: ColumnDef<T>[]
}

const DataTable = <T,>({ data, columns }: Props<T>) => {
    const [sorting, setSorting] = React.useState<SortingState>([])

    const table = useReactTable({
        data: data ?? [],
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })

    return (
        <Table striped bordered hover className="bg-white">
            <thead>
                {table.getHeaderGroups().map((headerGroup) => {
                    return (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <th key={header.id}>
                                        {header.isPlaceholder ? null : (
                                            <div
                                                className="user-select-none d-flex align-items-center gap-2"
                                                {...{
                                                    onClick: header.column.getToggleSortingHandler(),
                                                }}
                                            >
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                                {{
                                                    asc: <ChevronUpIcon />,
                                                    desc: <ChevronDownIcon />,
                                                }[header.column.getIsSorted() as string] ?? null}
                                            </div>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    )
                })}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default DataTable
