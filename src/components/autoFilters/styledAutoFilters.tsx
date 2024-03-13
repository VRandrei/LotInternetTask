"use client"
import {styled} from "@mui/system";
import {Box} from '@mui/material';

export const StyledBox = styled(Box)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0.5
}));

export const StyledButton = styled('button')(() => ({
    width: '100%',
    color: 'white',
    backgroundColor: '#2e2e2e',
    cursor: 'pointer',
    height: '100%',
    border: '1px solid grey',
    borderRadius: '4px',
    '&:active': {
        backgroundColor: '#222'
    },
}));