import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';

import { Link } from 'react-router-dom';

//list butuh r router dom
export default function ListItemComponent({icon, text, route}){
    return (
        <ListItem button key={text} component={Link} to={route}>
            <Tooltip title={text}>
                <ListItemIcon>{icon}</ListItemIcon>
            </Tooltip>
            <ListItemText primary={text} />
        </ListItem>
    )
}