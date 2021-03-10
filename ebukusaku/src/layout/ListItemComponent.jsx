import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    listItemText:{
        fontSize:'0.8em',
    },
    iconColor: {
        color: '#00833B'
    }
});

//list butuh r router dom
export default function ListItemComponent({icon, text, route}){
    const classes = useStyles();
    return (
        <ListItem button key={text} component={Link} to={route}>
            <Tooltip title={text}>
                <ListItemIcon className={classes.iconColor}>{icon}</ListItemIcon>
            </Tooltip>
            <ListItemText classes={{primary: classes.listItemText}} primary={text} />
        </ListItem>
    )
}