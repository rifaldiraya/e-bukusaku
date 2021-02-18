import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import BookIcon from "@material-ui/icons/Book";

import ListItemComponent from "./ListItemComponent";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

// sidebar nnt ada head, list, dan foot
export default function SideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    openBar: false,
  });

  const handleBar = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
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
        <ListItemComponent icon={<BookIcon />} text="Bab 1" />
        <ListItemComponent icon={<BookIcon />} text="Bab 2" />
        <ListItemComponent icon={<BookIcon />} text="Bab 3" />
        <ListItemComponent icon={<BookIcon />} text="Bab 4" />
        <ListItemComponent icon={<BookIcon />} text="Bab 5" />
        <ListItemComponent icon={<BookIcon />} text="Bab 6" />
        <ListItemComponent icon={<BookIcon />} text="Bab 7" />
        <ListItemComponent icon={<BookIcon />} text="Bab 8" />
        <ListItemComponent icon={<BookIcon />} text="Bab 9" />
        <ListItemComponent icon={<BookIcon />} text="Bab 10" />
        <ListItemComponent icon={<BookIcon />} text="Bab 11" />
      </List>
    </div>
  );

  return (
    <SwipeableDrawer
      open={state.openBar}
      onClose={handleBar(false)}
      onOpen={handleBar(true)}
    >
      {list()}
    </SwipeableDrawer>
  );
}
