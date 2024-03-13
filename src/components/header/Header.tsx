"use client"
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import {LogoLink, StyledHeader, StyledLink, StyledContainer, StyledIconButton,
    StyledDrawer, StyledClose, StyledDrawerTitle, StyledDrawerLink, StyledLinksContainer} from "@/components/header/styledHeader";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    };

    return (
        <>
            <StyledHeader>
                <StyledContainer>
                    <LogoLink href={'/'}>
                        <h2>Next & MUI Task</h2>
                    </LogoLink>
                    <Box gap={10} display={"flex"}>
                        <StyledLink href={'/'}>Home</StyledLink>
                        <StyledLink href={'/auto'}>Auto</StyledLink>
                    </Box>
                    <StyledIconButton onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </StyledIconButton>
                </StyledContainer>
            </StyledHeader>
            <nav>
                <StyledDrawer
                    anchor={'right'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                >
                    <StyledDrawerTitle>
                        <LogoLink href={'/'} onClick={handleDrawerToggle}>
                            <h2>Next & MUI Task</h2>
                        </LogoLink>
                        <StyledClose onClick={handleDrawerToggle}/>
                    </StyledDrawerTitle>
                    <StyledLinksContainer>
                        <StyledDrawerLink href={'/'} onClick={handleDrawerToggle}>Home</StyledDrawerLink>
                        <StyledDrawerLink href={'/auto'} onClick={handleDrawerToggle}>Auto</StyledDrawerLink>
                    </StyledLinksContainer>
                </StyledDrawer>
            </nav>
        </>
    )
}

export default Header;