"use client";
import {styled} from "@mui/system";
import Table from '@mui/material/Table';
import {TableCell} from '@mui/material';

export const StyledTable = styled(Table)(() => ({
    minWidth: '550px',
    '& .MuiTableCell-root': {
        fontFamily: 'Nunito, sans-serif',
    },
}));

export const StyledTableCell = styled(TableCell)(() => ({
    fontWeight: '700',
}));