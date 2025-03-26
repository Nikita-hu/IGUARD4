import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSwitch, setActiveSwitch } from "../redux/store";
import "../SwitchButton.scss";
const SlidingButton = ({ activeStyle }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (type) => {
    setActive(type);
    dispatch(setSwitch(type))
    dispatch(setActiveSwitch(type))
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
        className={
          activeStyle
            ? 
            !active
              ? "no-active-authedButton-animation"
              : "yes-active-authedButton-animation"
            : 
            !active
              ? "no-active-authedButton"
              : "yes-active-authedButton"
        }
        onClick={() => handleClick(false)}
      >
        Войти
      </Button>

      <Button
        className={
          activeStyle
            ? active
              ? "no-active-authedButton-animation"
              : "yes-active-authedButton-animation"
            : active
              ? "no-active-authedButton"
              : "yes-active-authedButton"
        }
        onClick={() => handleClick(true)}
      >
        Регистрация
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
    </Box >
  );
};

export default SlidingButton;
