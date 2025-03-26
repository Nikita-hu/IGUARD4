import React from "react";
import { Button, Box } from "@mui/material";

export const SliderUpDate = ({activeUpDate, handleClick}) => {


  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        width: "200px",
        borderRadius: "2px",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      <Button
        sx={{
          flex: 1,
          borderRadius: "25px",
          borderColor: ' 1px solid green',
          backgroundColor: activeUpDate === true ? "#91ff35" : "#000",
          color: activeUpDate === true ? "#000" : "#fff",
          zIndex: 1,
          transition: "background-color 0.3s",
          fontSize: '11px'
        }}
        onClick={() => handleClick(true)}
      >
        Обновлять
      </Button>
      <Button
        sx={{
          flex: 1,
          borderRadius: "25px",
          backgroundColor: activeUpDate === false ? "#91ff35" : "#000",
          color: activeUpDate === false ? "#000" : "#fff",
          zIndex: 1,
          transition: "background-color 0.3s",
          fontSize: '11px'
        }}
        onClick={() => handleClick(false)}
      >
        -
      </Button>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: activeUpDate === "login" ? "0" : "50%",
          width: "50%",
          height: "100%",
          backgroundColor: "#000",
          borderRadius: "2px",
          transition: "left 0.3s",
          zIndex: 0,
        }}
      />
    </Box>
  );
};


