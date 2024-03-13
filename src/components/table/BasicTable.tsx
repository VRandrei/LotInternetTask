import * as React from 'react';
import {TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@mui/material';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import {StyledTable, StyledTableCell} from "@/components/table/styledBasicTable";
import Link from "next/link";

export interface TableProps {
    header: HeaderItem[];
    data: any;
    forInfo: boolean
}

export type HeaderItem = {
    accessor: string;
    label: string;
}

const BasicTable: React.FC<TableProps> = ({header, data, forInfo}) => {
    return (
        <>
            <TableContainer component={Paper}>
                <StyledTable aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {header.map((item: HeaderItem) => (
                                <StyledTableCell key={item.accessor} align="left">
                                    {item.label}
                                </StyledTableCell>
                                ))}
                            {!forInfo && (
                                <StyledTableCell align="right">ACTIONS</StyledTableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item: any, index: number) => (
                            <TableRow key={index}>
                                {header.map(({ accessor }) => {
                                    const column = item[accessor];
                                    if (column) {
                                        return (
                                            <TableCell align="left" key={accessor}>
                                                {Array.isArray(column) ? column.length : column}
                                            </TableCell>
                                        );
                                    }
                                })}
                                {!forInfo && (
                                    <TableCell align="right">
                                        <Link href={`/auto/${item.id}`}>
                                            <IconButton>
                                                <InfoRoundedIcon />
                                            </IconButton>
                                        </Link>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </StyledTable>
            </TableContainer>
        </>
    );
}

export default BasicTable;