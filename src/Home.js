import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
       <Button variant = "contained" onClick={() => navigate("/ButtonAppBar")}>Login</Button>
        
    </>
  );
};

export default Home;