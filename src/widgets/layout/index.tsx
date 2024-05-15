import { Grid } from "@mui/material";
import { PropsWithChildren } from "react";
import { LeftSideBar } from "../lsb";

const Content = ({ children }: PropsWithChildren) => {
  return (
    <Grid item xs={9}>
      {children}
    </Grid>
  );
};

export const Layout = ({ children }: PropsWithChildren) => {
  return <Grid container>{children}</Grid>;
};

Layout.Lsb = LeftSideBar;
Layout.Content = Content;
