import { BiExport } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import { makeStyles, TextField, Paper, Button } from "@material-ui/core";
import { Box, Checkbox, Grid } from "@mui/material";
import { IconContext } from "react-icons";
import { ColorExtractor } from "react-color-extractor";
const styles = makeStyles((theme) => ({
  grid: {
    textAlign: "center",
    marginBottom: "30px",

    marginLeft: "-20px",
  },
  btn: {
    alignSelf: "center",
    letterSpacing: 0,
    lineHeight: "31px",
    /* margin-left: 22px, */
    marginTop: "5px",
    /* min-height: 41px, */
    /* min-width: 254px, */
    whiteSpace: "nowrap",
    color: "var(--mahogany)",
    fontFamily: "var(--font-family-cerapro-bold)",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "black",
      // border: "1px dashed var(--gold)",
      color: "white",
    },
  },
  txtName: {
    [`& fieldset`]: {
      borderRadius: 39,
      border: "3px solid var(--gold)",
    },
    backgroundColor: "var(--white)",
    marginTop: "15px",
    width: "300px",
    height: "45px",
  },
  input: {
    "&::placeholder": {
      // fontStyle: "italic",
      color: "#1c1312",
      fontFamily: "var(--font-family-cerapro-medium)",
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: "18px",
      minHeight: "25px",
      opacity: 0.35,
      whiteSpace: "nowrap",
    },
  },
  txtUsserName: {
    [`& fieldset`]: {
      borderRadius: 39,
      border: "3px solid var(--gold)",
    },
    marginTop: "15px",
    width: "300px",
    height: "45px",
  },
  inputUserName: {
    "&::placeholder": {
      color: "var(--mahogany-3)",
      fontFamily: "var(--font-family-cera_pro)",
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: "24px",
      minHeight: "32px",
      whiteSpace: "nowrap",
      textAlign: "center",
    },
  },
  root: {
    color: "#3B3938",
    fontFamily: "var(--font-family-cerapro-medium)",
    letterSpacing: 0,
    fontWeight: 500,
    lineHeight: "16px",
    marginLeft: "210px",
  },
}));

function UploadLogo({
  pic,
  postDetails,
  darkColor,
  setdarkColor,
  lightColor,
  setlightColor,
}) {
  const fileRef = useRef();
  const [buttonText, setButtonText] = useState("Upload Your Logo");
  const classes = styles();
  const [colors, setcolors] = useState([]);
  const changeText = (text) => setButtonText(text);
  const [picMessage, setPicMessage] = useState();
  // const [postDetails, setpostDetails] = useState();
  const handleChange = (e) => {
    const { value, checked } = e.target;

    // console.log(check);
    if (checked) {
      if (darkColor.length < 1) {
        setdarkColor((prev) => [...prev, value]);
      }
      // console.log(check);
    } else {
      //  console.log(check);
      setdarkColor((prev) => prev.filter((x) => value !== x));
    }
  };

  const handleChangeLight = (e) => {
    const { value, checked } = e.target;

    // console.log(check);
    if (checked) {
      if (lightColor.length < 1) {
        setlightColor((prev) => [...prev, value]);
      }
      // console.log(check);
    } else {
      //  console.log(check);
      setlightColor((prev) => prev.filter((x) => value !== x));
    }
  };

  const renderSwatches = (type, id) => {
    // const id=2;
    // console.log(check);

    const nb = colors.length;
    return colors?.map((color, index) => {
      console.log(nb);
      const normalizeColorValue =
        Array.isArray(color) && type === "rgb"
          ? `rgb(${color[0]}, ${color[1]}})`
          : color;

      return (
        <div>
          <div key={id} style={{ color }}>
            <div
              className="swatches"
              style={{
                backgroundColor: normalizeColorValue,
                color: normalizeColorValue,
              }}
            />
            {/* <Checkbox onChange={checkColors(color)} /> */}
            <div>
              <div
                style={{
                  backgroundColor: color,
                  width: 40,
                  height: 40,
                  borderRadius: "31px",
                  border: "1px solid var(--mahogany-3)",
                  marginLeft: "4px",
                  // justifyContent:"space-around"
                }}
                className="divColor"
              ></div>
              <Checkbox
                // checked={checked.indexOf(color) !== -1}
                className="check"
                style={{
                  color: "var(--gold)",
                }}
                value={color}
                onChange={handleChange}
                checked={darkColor.indexOf(color) >= 0}
                // disabled={shouldDisableCheckbox(color)}
              />
            </div>
          </div>
        </div>
      );
    });
  };
  const renderSwatchesLight = (type, id) => {
    // const id=2;
    // console.log(check);

    const nb = colors.length;
    return colors?.map((color, index) => {
      console.log(nb);
      const normalizeColorValue =
        Array.isArray(color) && type === "rgb"
          ? `rgb(${color[0]}, ${color[1]}})`
          : color;

      return (
        <div>
          <div key={id} style={{ color }}>
            <div
              className="swatches"
              style={{
                backgroundColor: normalizeColorValue,
                color: normalizeColorValue,
              }}
            />
            {/* <Checkbox onChange={checkColors(color)} /> */}

            <div
              style={{
                backgroundColor: color,
                width: 40,
                height: 40,
                borderRadius: "31px",
                border: "1px solid var(--mahogany-3)",
                marginLeft: "4px",
                // marginTop: "-25px",
                // flexDirection: "row",
                // display: "flex",
                // marginBottom: "-10px",
                // flex: "start",
                // justifyContent:"space-around"
              }}
              className="divColor"
            ></div>
            <Checkbox
              // checked={checked.indexOf(color) !== -1}
              className="check"
              style={{
                color: "var(--gold)",
              }}
              value={color}
              onChange={handleChangeLight}
              checked={lightColor.indexOf(color) >= 0}
              // disabled={shouldDisableCheckbox(color)}
            />
          </div>
        </div>
      );
    });
  };
  const getColors = (colors) => setcolors(colors);
  return picMessage ? (
    <div className="error-message">
      An error occurred while processing the image.
    </div>
  ) : (
    <>
      <div style={{ marginTop: 20 }}>
        {/* <input
              id="uploader"
              style={{ display: "none" }}
              type="file"
              accept="image/png,image/jpeg"
                onChange={(e) => postDetails(e.target.files[0])}
            /> */}
        <Button
          // className="button"
          // id="file-upload"
          onClick={() => {
            fileRef.current.click();
            changeText("Reupload Your Logo");
          }}
          // size="large"
          className={classes.btn}
          style={{
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: "49px",
            border: "1px dashed var(--dove-gray)",
            height: "55px",
            width: "auto",
          }}
          // startIcon={<IosShareRoundedIcon />}
          startIcon={
            <IconContext.Provider
              value={{
                // backgroundColor: "gold",
                color: "var(--white)",
                size: "30px",
                // paddingLeft: "-30px",
                // marginLeft:"-55px"
                // textAlign:"center"
              }}
            >
              <div style={{ width: "50px", height: "50px" }} className="export">
                <BiExport style={{ marginTop: "7px" }} />
              </div>
            </IconContext.Provider>
          }
        >
          <input
            type="file"
            ref={fileRef}
            onChange={(e) => postDetails(e.target.files[0])}
            accept="image/png,image/jpeg"
            hidden
          />
          {/* <div className="upload-your-logo cerapro-bold-mahogany-31px"> */}{" "}
          {buttonText}
          {/* </div> */}
        </Button>
      </div>
      <Grid xs={12} style={{ marginTop: "-2px" }}>
        <div className="png-or-jpg-only">PNG OR JPG ONLY</div>
      </Grid>
      <ColorExtractor
        getColors={getColors}
        maxColors={128}
        // onError={props.onError}
        src={pic}
      >
        {/* <img src={pic} style={{ width: 200, height: 200 }} /> */}
      </ColorExtractor>
      <div
        style={{
          marginTop: 10,
          textAlign: "start",
          marginLeft: "10px",
          width: "100px",
          // display: "flex",
        }}
      >
        <h4 className="selectColor">select one dark color :</h4>

        <div className="display-swatches">
          {/* <br /> */}
          {renderSwatches("hex")}
        </div>
        {/* <h6>Selected colors: {check.length ? check.join(", ") : null}</h6> */}
      </div>
      <div
        style={{
          marginTop: "-25px",
          textAlign: "start",
          marginLeft: "10px",
        }}
      >
        <h4 className="selectColor">select one light color :</h4>

        <div className="display-swatches">
          {/* <br /> */}
          {renderSwatchesLight("hex")}
        </div>
        {/* <h6>Selected colors: {check.length ? check.join(", ") : null}</h6> */}
      </div>
    </>
  );
}

export default UploadLogo;
