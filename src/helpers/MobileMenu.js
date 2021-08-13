import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import '../assets/styles/mobile-menu.css';
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: 'white',
        },
    },
}))(MenuItem);

export const MobileMenu = ({ user }) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="mobile-menu_container">
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
            >
                <MenuIcon />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <Link to="/">
                        <ListItemText primary="HOME" />
                    </Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <Link to="/about">
                        <ListItemText primary="ABOUT" />
                    </Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <Link to="/contact">
                        <ListItemText primary="CONTACT" />
                    </Link>
                </StyledMenuItem>
                {
                    user ? (
                        <>
                            <StyledMenuItem>
                                <Link to="/write">
                                    <ListItemText primary="WRITE" />
                                </Link>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <Link to="/settings">
                                    <ListItemText primary="SETTINGS" />
                                </Link>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <Link to="/">
                                    <ListItemText primary="LOGOUT" />
                                </Link>
                            </StyledMenuItem>
                        </>
                    ) : (
                        <>
                            <StyledMenuItem>
                                <Link to="/login">
                                    <ListItemText primary="LOGIN" />
                                </Link>
                            </StyledMenuItem>

                            <StyledMenuItem>
                                <Link to="/register">
                                    <ListItemText primary="REGISTER" />
                                </Link>
                            </StyledMenuItem>
                        </>
                    )
                }


            </StyledMenu>
        </div>
    );
}
