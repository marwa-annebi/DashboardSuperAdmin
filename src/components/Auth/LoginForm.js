import React, { useEffect, useState } from "react";
import "./LoginAdmin.css";
// import Icon from "../icon";
import { FaPlay } from "react-icons/fa";
import { Button, makeStyles, TextField } from "@material-ui/core";
import axios from "axios";
import Loading from "../Loading";
import Notification from "../Notification";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { textAlign } from "@mui/system";
const styles = makeStyles({
  textField: {
    width: "65%",
    marginLeft: "80px",
    // marginRight: 'auto',
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },

  input: {
    color: "black",
    fontFamily: "var(--font-family-cerapro-bold)",
    letterSpacing: "inherit",
    // font-size: var(--font-size-m);
  },
  label: {
    fontFamily: "cerapro-bold",
    // color: "#560a02",
    fontSize: "20px",
    fontWeight: 700,
    // opacity: 0.48,
    whiteSpace: "nowrap",
  },
});

export default function LoginForm() {
  // const { switchToSignup } = useContext(AccountContext);
  const classes = styles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setloading(true);
      console.log("hello");
      const { data } = await axios.post(
        "http://localhost:5000/auth/loginAdmin",
        { email, password, type: "1" }
      );
      console.log(data);
      localStorage.setItem("adminInfo", JSON.stringify(data));
      // console.log(userInfo);
      console.log("hello");
      if (data) {
        navigate("/dashboard");
      }
      // window.location.reload(true);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error.response.data.message);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setNotify({
          isOpen: true,
          message: error.response.data.message,
          type: "error",
        });
      }
    }
  };

  const [showPassword, setshowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setshowPassword(true);
  };
  const handleMouseDownPassword = () => {
    setshowPassword(false);
  };
  return (
    // <div>
    <div className="loginForm">
      {loading && <Loading />}
      <Notification
        notify={notify}
        setNotify={setNotify}
        vertical="top"
        horizontal="right"
      />
      <h1 className="title">log in as Admin </h1>
      <form
        onSubmit={submitHandler}
        style={{ flexDirection: "column", marginTop: "35px" }}
      >
        <TextField
          type="email"
          // class="form__field"
          label="Email"
          value={email}
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className={classes.textField}
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{ className: classes.label }}
        />
        <br />
        <TextField
          type="password"
          // class="form__field"
          label="Password"
          value={password}
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className={classes.textField}
          InputProps={{
            className: classes.inputPassword,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword && <Visibility />}
                  {!showPassword && <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ className: classes.label }}
        />
        <br />
        <Button
          type="submit"
          style={{ marginTop: "25px", marginLeft: "230px" }}
        >
          <FaPlay className="iconPlay1" fontSize={"2em"} />
        </Button>
        <Link to="/lostPassword/1">
          <h4
            className="lost-your-password"
            style={{ marginTop: "10px", color: "#1c1312" }}
          >
            Lost your password ?
          </h4>
        </Link>
      </form>
    </div>
    // </div>
  );
}
