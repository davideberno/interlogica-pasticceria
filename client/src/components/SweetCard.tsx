import React, { FC } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Skeleton, Button } from "@mui/material";

import { Sweet } from "types";

export interface SweetCardProps {
  sweet: Sweet;
}

export const SweetCard: FC<SweetCardProps> = ({ sweet: { name, price, imgUrl, ingredients } }) => (
  <Card
    sx={{
      minWidth: "200px",
    }}
  >
    {imgUrl ? (
      <CardMedia component="img" height="140" image={imgUrl} alt={name} />
    ) : (
      <Skeleton variant="rectangular" height={140} animation={false} />
    )}
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body1">Prezzo: {price}€</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Ingredienti</Button>
    </CardActions>
  </Card>
);
