"use client";
import {styled} from "@mui/system";
import Box from '@mui/material/Box';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';

export const LogoLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: 'black',
}));

export const StyledLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: 'black',
    fontWeight: '600',
    '&:hover': {
        color: '#555'
    },
    "@media (max-width:960px)": {
        display: 'none'
    },
}));

export const StyledDrawerLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: 'black',
    fontWeight: '600',
    transition: 'all 0.5s ease',
    border: '1px solid transparent',
    borderRadius: '7px',
    width: '200px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
        border: '1px solid #9e9e9e',
    },
}));

export const StyledHeader = styled('header')(() => ({
    display: 'flex',
    justifyContent: 'center'
}))

export const StyledContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '1200px',
    alignItems: 'center',
    padding: '30px 50px',
    "@media (max-width:960px)": {
        padding: '30px 20px',
    },
}))

export const StyledIconButton = styled(IconButton)(() => ({
    color: 'black',
    "@media (min-width:960px)": {
        display: 'none'
    },
}))

export const StyledDrawer = styled(Drawer)(() => ({
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '400px' },
    "@media (max-width:400px)": {
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
    },
}))
export const StyledClose = styled(CloseRoundedIcon)(() => ({
    cursor: 'pointer',
    height: '30px',
    width: '30px',
    border: '1px solid transparent',
    transition: 'all 0.7s ease',
    borderRadius: '5px',
    color: '#333',
    '&:hover': {
        border: '1px solid #9e9e9e',
    },
}))

export const StyledDrawerTitle = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px'
}))

export const StyledLinksContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '70px'
}))
