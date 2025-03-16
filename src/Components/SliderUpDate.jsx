import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSwitchUpDate, setActiveSwitchUpDate } from "../redux/store";

const SlidingButton = () => {
  const [activeUpDate, setActiveUpDate] = useState(false);
  const dispatch = useDispatch();
  console.log(active)
  const handleClick = (type) => {
    setActive(type);
    dispatch(setSwitchUpDate(type))
    dispatch(setActiveSwitchUpDate(type))
  };

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
          backgroundColor: activeUpDate === false ? "#91ff35" : "#000",
          color: activeUpDate === false ? "#000" : "#fff",
          zIndex: 1,
          transition: "background-color 0.3s",
          fontSize: '11px'
        }}
        onClick={() => handleClick(false)}
      >
        Обновлять
      </Button>
      <Button
        sx={{
          flex: 1,
          borderRadius: "25px",
          backgroundColor: activeUpDate === true ? "#91ff35" : "#000",
          color: activeUpDate === true ? "#000" : "#fff",
          zIndex: 1,
          transition: "background-color 0.3s",
          fontSize: '11px'
        }}
        onClick={() => handleClick(true)}
      >
        -
      </Button>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: active === "login" ? "0" : "50%",
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

export default SlidingButton;
