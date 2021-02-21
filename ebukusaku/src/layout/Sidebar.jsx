import React, { Fragment } from 'react';
import clsx from 'clsx';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

//MUI Icon
import BookIcon from '@material-ui/icons/Book';
import MenuIcon from '@material-ui/icons/Menu';


//Component
import ListItemComponent from './ListItemComponent';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    head: {
        width: 250,
        marginTop:20,
        marginBottom:10,
        textAlign: 'center'
    },
    divider: {
        backgroundColor: '#00af91'
    },
    footer: {
        bottom: 0,
        left: 0,
        width: 250,
        textAlign: 'center',
        fontSize: '0.7em'
    },
});

// sidebar nnt ada head, list, dan foot
export default function SideBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        openBar: false
    });

    const handleBar = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, openBar: open });
    };

    const list = () => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={handleBar(false)}
            onKeyDown={handleBar(false)}
        >
            <List>
                <ListItemComponent icon={(<BookIcon/>)} text={'Bab 12'} route={'/12'}/>
                <ListItemComponent icon={(<BookIcon/>)} text={'Bab 13'} route={'/13'}/>
                <Divider light={true} className={classes.divider}/>
                <ListItemComponent icon={(<BookIcon/>)} text="Tentang Kami" route="/"/>
            </List>
        </div>
    );

    return (
        <Fragment>
            <IconButton color="primary" aria-label="toggle-nav" onClick={handleBar(true)}>
                <MenuIcon/>
            </IconButton>
            <SwipeableDrawer
                open={state.openBar}
                onClose={handleBar(false)}
                onOpen={handleBar(true)}
            >
                <div className={classes.head}>
                    <img width='72' src='assets/img/logo-Al-Hikam.png' alt='Logo-Alhikam' />
                    <Typography variant="h5">
                        BUKU SAKU
                    </Typography>
                    <Typography variant="h6">
                        ALHIKAM MALANG
                    </Typography>
                </div>
                <Divider light={true} className={classes.divider}/>
                {list()}
                <div className={classes.footer}>
                    <Typography variant="caption">
                        Copyright © IT AL-HIKAM {new Date().getFullYear()}
                    </Typography>
                </div>
            </SwipeableDrawer>
        </Fragment>
    );
}
