import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div>
      
      <p>
        <Button onClick={() => navigate("/Footer")}>Go to Contact</Button>
      </p>
      
    </div>
  )
}
