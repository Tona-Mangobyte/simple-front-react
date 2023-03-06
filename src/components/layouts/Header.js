import React, { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { connect } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import {
    Grid,
    Hidden,
    Menu,
    MenuItem,
    AppBar as MuiAppBar,
    IconButton as MuiIconButton,
    Button,
    Toolbar,
    Typography
} from "@material-ui/core";

import { Menu as MenuIcon, Pageview } from "@material-ui/icons";

import {
    Power
} from "react-feather";

// import QuickSolutionModal from "./modal/QuickSolutionModal";

const AppBar = styled(MuiAppBar)`
  background: ${props => props.theme.header.background};
  color: ${props => props.theme.header.color};
  box-shadow: ${props => props.theme.shadows[1]};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const QsSearchButton = styled(Button)`
  margin-right: 4px;
  padding: 7px 8px 6px 24px;

  svg {
    position: absolute;
    left: 7px;
    top: 4px;
  }
`;
/*
const Flag = styled.img`
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

function LanguageMenu() {
  const [anchorMenu, setAnchorMenu] = useState(null);

  const toggleMenu = event => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  return (
    <React.Fragment>
      <IconButton
        aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
        aria-haspopup="true"
        onClick={toggleMenu}
        color="inherit"
      >
        <Flag src="/static/img/flags/us.png" alt="English" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>
          English
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          French
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          German
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          Dutch
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}
*/

function UserMenu() {
    const [anchorMenu, setAnchorMenu] = useState(null);
    const history = useHistory();
    const logout = () => {
        const token = window.localStorage.getItem('token');
        axios.defaults.baseURL = process.env.REACT_APP_API_HOST + process.env.REACT_APP_API_PATH;
        axios.get('/logout', {
            //withCredentials: true, //  for cookie
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(data => {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("userName");
            window.localStorage.removeItem("departmentName");
            history.push({
                pathname: '/users/login'
            });
        }).catch(error => {
            console.log(error);
        });
    };

    const toggleMenu = event => {
        setAnchorMenu(event.currentTarget);
    };

    const home = () => {
        history.push({
            pathname: '/'
        });
    };

    const closeMenu = () => {
        setAnchorMenu(null);
    };

    return (
        <React.Fragment>
            <IconButton
                aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={toggleMenu}
                color="inherit"
            >
                <Power />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorMenu}
                open={Boolean(anchorMenu)}
                onClose={closeMenu}
            >
                <MenuItem onClick={home}>
                    ホーム
                </MenuItem>
                <MenuItem onClick={logout}>
                    ログアウト
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

const Header = ({ onDrawerToggle, headerTitle }) => {
    const [scrollPos, setScrollPos] = useState(0);
    const [openQsModal, setOpenQsModal] = useState(false);

    useEffect(()=>{
        window.onscroll = () => {
            setScrollPos(window.pageYOffset);
        }
    }, []);

    return (
        <React.Fragment>
            {/*<QuickSolutionModal
                openModal={openQsModal}
                setOpenModal={setOpenQsModal}
            />*/}

            <AppBar position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Hidden mdUp>
                            <Grid item>
                                <IconButton
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={onDrawerToggle}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>
                        {scrollPos > 30 ?
                            <Grid item xs={9}>
                                <Typography variant="h3" display="block" className="layoutHeaderTitle">{headerTitle}</Typography>
                            </Grid>
                            :''}
                        <Grid item xs />
                        <Grid item>
                            <QsSearchButton
                                variant="contained"
                                color="primary"
                                startIcon={<Pageview />}
                                onClick={() => setOpenQsModal(true)}
                            >
                                全文検索
                            </QsSearchButton>
                        </Grid>
                        <Grid item>
                            {/*
            <IconButton color="inherit">
              <Indicator badgeContent={3}>
                <MessageSquare />
              </Indicator>
            </IconButton>
            <IconButton color="inherit">
              <Indicator badgeContent={7}>
                <Bell />
              </Indicator>
            </IconButton>
            */}
                            <UserMenu />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )};

export default connect()(withTheme(Header));
