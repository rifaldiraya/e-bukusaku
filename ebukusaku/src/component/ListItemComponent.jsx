import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'

//list butuh r router dom
export default function ListItemComponent({icon, text, route}){
    return (
        <ListItem button key={text}>
            <Tooltip title={text}>
                <ListItemIcon>{icon}</ListItemIcon>
            </Tooltip>
            <ListItemText primary={text} />
        </ListItem>
    )
}