import { Grid, makeStyles } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { useForm, Form } from "./UseForm";
import controls from "./Controls/controls";
import UploadLogo from "./UploadLogo";
export default function UsersForm(props) {
  const initialFValues = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    businessName: "",
    domain_name: "",
  };

  const { addOrEdit, recordForEdit } = props;
  const [picMessage, setPicMessage] = useState();
  const [darkColor, setdarkColor] = useState("");
  const [logo, setlogo] = useState();
  const [lightColor, setlightColor] = useState("");
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    /*  if ("first_name" in fieldValues)
      temp.first_name = fieldValues.first_name ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length > 9 ? "" : "Minimum 3 required.";
 */
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };
  const postDetails = (pics) => {
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "3almni");
      data.append("cloud_name", "dknkfvzye");
      fetch("https://api.cloudinary.com/v1_1/dknkfvzye/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())

        .then((data) => {
          setlogo(data.url.toString());

          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <controls.Input
            label="First name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
          ></controls.Input>
          <controls.Input
            label="Last name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
          ></controls.Input>
          <controls.Input
            label="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          ></controls.Input>
          <controls.Input
            label="Business"
            name="businessName"
            value={values.businessName}
            onChange={handleInputChange}
            error={errors.businessName}
          ></controls.Input>
          <controls.Input
            label="Domain_Name"
            name="domain_name"
            value={values.domain_name}
            onChange={handleInputChange}
            error={errors.domain_name}
          ></controls.Input>
        </Grid>

        <Grid item xs={6}>
          <div>
            {/* // <UploadLogo
            //   pic={logo}
            //   setPic={setlogo}
            //   postDetails={postDetails}
            //   darkColor={darkColor}
            //   setdarkColor={setdarkColor}
            //   lightColor={lightColor}
            //   setlightColor={setlightColor}
            />*/}
            <controls.Button type="submit" text="Submit" />
            <controls.Button text="Reset" color="error" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
