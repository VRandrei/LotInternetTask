"use client";
import {styled} from "@mui/system";
import Link from "next/link";

export const StyledBall = styled('div')(() => ({
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    position: 'relative',
    boxShadow: '0 0 30px 4px rgba(0, 0, 0, 0.5) inset , 0 5px 12px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
    '&:before, &:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '45%',
        top: '-40%',
        backgroundColor: '#2e2e2e',
        animation: 'wave 5s linear infinite',
    },
    '&:before': {
        borderRadius: '30%',
        background: 'rgba(122, 122, 122, 0.4)',
        animation: 'wave 5s linear infinite',
    },
    '@keyframes wave': {
        '0%': {
            transform: 'rotate(0)'
        },
        '100% ': {
            transform: 'rotate(360deg)'
        }
    },
    "@media (max-width:960px)": {
        width: '200px',
        height: '200px',
        marginTop: '50px'
    },
}));

export const MainContainer = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center'
}));

export const CenterContainer = styled('div')(() => ({
    display: 'flex',
    maxWidth: '1200px',
    width: '100%',
    justifyContent: 'space-between',
    padding: '200px 50px',
    "@media (max-width:960px)": {
        flexDirection: 'column',
        padding: '50px 50px',
        justifyContent: 'center',
        alignItems: 'center'
    },
}));

export const TextContainer = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    "@media (max-width:960px)": {
        gap: '15px'
    },
}));

export const StyledTitle = styled('h1')(() => ({
    fontSize: '70px',
    maxWidth: '500px',
    lineHeight: '80px',
    "@media (max-width:960px)": {
        fontSize: '30px',
        lineHeight: '40px',
    },
}));

export const StyledDescription = styled('p')(() => ({
    fontSize: '20px',
    maxWidth: '500px',
    "@media (max-width:960px)": {
        fontSize: '10px',
    },
}));

export const GetStartedLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#2e2e2e',
    borderRadius: '5px',
    padding: '10px 49px',
    maxWidth: '180px',
    '&:hover': {
        backgroundColor: '#444'
    },
}));