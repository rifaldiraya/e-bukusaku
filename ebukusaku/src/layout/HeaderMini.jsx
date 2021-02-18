import React, { Fragment } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

export const HeaderMini = (props) => {
  return (
    <Fragment>
      <Card>
        <CardActionArea>
          <div>
            <img className="img-thumb" src={props.img} alt={props.alt} />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};