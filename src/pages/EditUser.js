// import { React, useEffect, useState } from "react";
// import { Grid, makeStyles } from "@material-ui/core";
// import { FormControl } from "@mui/material";
// import { TextField } from "@material-ui/core";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Input from "../components/Controls/Input";
// import axios from "axios";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// export default function EditUser() {
//   const [firstName, setfirstName] = useState();
//   const [lastName, setLastName] = useState();
//   //   const [password, setPassword] = useState();
//   const [email, setEmail] = useState();
//   const [domain_name, setDomain_name] = useState();
//   const [businessName, setBusinessName] = useState();

//   const config = {
//     headers: {
//       "Content-type": "Application/json",
//     },
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios

//       .put(`http://localhost:5000/admin/updateUser/${recordForEdit._id}`, {
//         firstName: userInfo.firstName,
//         lastName: userInfo.lastName,
//         email: userInfo.email,
//         password: userInfo.password,
//         verified: true,
//         account: {
//           domain_name: userInfo.domain_name,
//           businessName: userInfo.businessName,
//         },
//       })
//       .then((res) => console.log(res));
//     history.push("/users");
//   };
//   return (
//     <div>
//       <FormControl onSubmit={(e) => handleSubmit(e)}>
//         <Grid container>
//           <Grid item xs={6}>
//             <Input
//               label="First name"
//               name="firstName"
//               value={firstName}
//               onChange={(e) => setfirstName(e.target.value)}
//             ></Input>
//             <Input
//               label="Last name"
//               name="lastName"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             ></Input>
//             <Input
//               label="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             ></Input>
//             <Input
//               label="Business"
//               name="businessName"
//               value={businessName}
//               onChange={(e) => setBusinessName(e.target.value)}
//             ></Input>
//             <Input
//               label="Domain_Name"
//               name="domain_name"
//               value={domain_name}
//               onChange={(e) => setDomain_name(e.target.value)}
//             ></Input>
//           </Grid>

//           <Grid item xs={6}>
//             <div>
//               {/* // <UploadLogo
//             //   pic={logo}
//             //   setPic={setlogo}
//             //   postDetails={postDetails}
//             //   darkColor={darkColor}
//             //   setdarkColor={setdarkColor}
//             //   lightColor={lightColor}
//             //   setlightColor={setlightColor}
//             />*/}
//               <Button type="submit" text="Submit" />
//               <Button text="Reset" color="error" />
//             </div>
//           </Grid>
//         </Grid>
//       </FormControl>
//     </div>
//   );
// }
