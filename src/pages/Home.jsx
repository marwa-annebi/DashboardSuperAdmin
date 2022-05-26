import { Container, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import Sidebar from "../components/sideBar/Sidebar";


export default function Home() {
  return (
    <Grid
      container
      spacing={{ xs: 6, md: 12 }}
    >
    <Grid item md={2}>

   </Grid>

      <Grid item md={10}>
       <Navbar/>
      </Grid>

      <Grid item xs={8}>
        <Sidebar />
      </Grid>
      <Grid item xs={4}>
        <Outlet />
      </Grid>
    </Grid>
  );
}