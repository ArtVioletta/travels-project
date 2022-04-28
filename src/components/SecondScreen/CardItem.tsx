import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import { CardItemI } from "./SecondScreen";

export const CardItem: React.FC<CardItemI> = (props) => {
  return (
    <Card className="card">
      <CardMedia
        className={"cardImage"}
        component="img"
        image={props.img}
        alt="green"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          padding={"4px 18px"}
        >
          {props.nameCountry}
        </Typography>
        <div style={{ padding: "4px 18px", color: "red" }}>{props.date}</div>
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          spacing={1}
          width={"250px"}
          height={"60px"}
          margin={"right"}
          display={"flex"}
          padding={"4px 18px"}
        >
          <Chip label={props.day} color={"primary"} />
          <Chip label={props.people} color={"primary"} />
        </Stack>
      </CardActions>
    </Card>
  );
};
