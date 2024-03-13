"use client"
import {styled} from "@mui/system";
import Link from "next/link";

export const StyledDiv = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '50px',
    width: '100%',
    maxWidth: '1200px',
}));

export const StyledButton = styled(Link)(() => ({
    width: '100px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: '#2e2e2e',
    cursor: 'pointer',
    height: '40px',
    border: '1px solid grey',
    marginBottom: '20px',
    textDecoration: 'none',
    borderRadius: '4px',
    '&:active': {
        backgroundColor: '#222'
    },
}));