import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {IconButton} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {signout, isAuth} from '../actions/auth';
import Router from 'next/router';
import Link from '../Link';
import theme from '../theme';


const useStyles = makeStyles((theme) => ({

    avatar: {
        color: 'white',
        '&:hover': {
            backgroundColor: '#00B8FF',
            color: '#001935'
        }
    },
    menu: {
        width: '175px',
        height: "80vh",
        background: '#00B8FF',
        color: '#001935'
    }
}));

export default function Avtar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton aria-describedby={id}
                onClick={handleClick}
                className={
                    classes.avatar
            }>
                <PersonIcon/>
            </IconButton>
            <Popover id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={
                    {
                        vertical: 'bottom',
                        horizontal: 'left'
                    }
            }>
                <Paper className={
                    classes.menu
                }>
                    <div style={
                        {textAlign: 'center',paddingTop:theme.spacing(2)}
                    }>{`hello!`}</div>
                    <MenuList autoFocusItem={open}
                        >
                        <MenuItem onClick={
                            () => signout(() => Router.push('/'))
                        }>
                            <ListItemIcon>
                                <LockIcon fontSize="default"/>
                            </ListItemIcon>
                            Signout
                        </MenuItem>
                        <MenuItem>
                            <Link href="/profile" underline="none">
                                <ListItemIcon>
                                    <PersonIcon fontSize="default"/>
                                </ListItemIcon>profile</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/dashboard" underline="none">
                                <ListItemIcon>
                                    <HomeIcon fontSize="default"/>
                                </ListItemIcon>Dashboard</Link>
                        </MenuItem>
                    </MenuList>
                </Paper>
            </Popover>
        </div>
    );
}
