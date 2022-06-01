import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Collapse,
  IconButton,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Popup from ".././components/Popup";
import Modal from "@mui/material/Modal";

import { Button, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useTable from "../components/useTable";
import "./table.css";
import UsersForm from "./../components/UsersForm";
import ConfirmDialog from "../components/ConfirmDialog";
import Notification from "../components/Notification";
import paper from "../Content";
import Content from "../Content";
import Loading from "./../components/Loading";
import controls from "../components/Controls/controls";
import EditUser from "./EditUser";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
const headCells = [
  { id: "", label: "" },
  { id: "firstName", label: "FirstName" },
  { id: "lastName", label: "LastName" },
  { id: "email", label: "Email" },
  // { id: "", label: "domain" },
  { id: "actions", label: "Actions", disableSorting: true },
];

export default function QuizMasters() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [QuizMasters, setQuizMasters] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [account, setaccount] = useState({});
  const [loading, setloading] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(QuizMasters, headCells, filterFn);
  let token = JSON.parse(localStorage.getItem("adminInfo"));
  // let newToken = token.token;
  // console.log("#token", token.token);
  const config = {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token.token}`,
    },
  };
  // const getUser = () => {
  //   setIsLoggedIn(JSON.parse(localStorage.getItem("adminInfo")));
  // };

  const findQuizMasters = async () => {
    try {
      console.log("hello");
      const result = await axios.get(
        "http://localhost:5000/admin/getUsers",
        config
      );

      setQuizMasters(result.data.reverse());

      console.log(QuizMasters);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteQuizMaster = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/admin/deleteUser/${id}`,
        config
      );
      findQuizMasters();
      setNotify({
        isOpen: true,
        message: "Deleted Successfully",
        type: "success",
      });
    } catch (error) {
      console.log("#error", error);
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

  const addOrEdit = async (userInfo, resetForm) => {
    console.log("#userinfo", userInfo);
    if (userInfo.id == 0) {
      try {
        const { data } = await axios.post(
          "http://localhost:5000/admin/createUser",
          {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
            password: userInfo.password,
            verified: true,
            account: {
              domain_name: userInfo.domain_name,
              businessName: userInfo.businessName,
              lightColor: userInfo.light,
              darkColor: userInfo.dark,
              logo: userInfo.logo,
            },
          },
          config
        );
        if (data) {
          setNotify({
            isOpen: true,
            message: "Submitted Successfully",
            type: "success",
          });
        }
      } catch (error) {
        //  setloading(false);
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
    } else if (recordForEdit) {
      console.log("hellooooo");
      await axios
        .put(
          `http://localhost:5000/admin/updateUser/${recordForEdit._id}`,
          {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
            verified: true,

            account: {
              domain_name: userInfo.domain_name,
              businessName: userInfo.businessName,
              lightColor: userInfo.light,
              darkColor: userInfo.dark,
              logo: userInfo.logo,
            },
          },
          config
        )
        .then((res) => console.log(res));
      console.log("#kdcfvj", recordForEdit._id);
    }

    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    findQuizMasters();
  };
  const openInPopup = (item) => {
    console.log("#item", item);
    console.log("#item2", item.account);
    let item2 = item.account;
    setRecordForEdit({ ...item, ...item2 });

    setOpenPopup(true);
  };
  console.log("#record", recordForEdit);
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow>
          <TableCell style={{ borderBottom: "3px solid #878787" ,borderBottomLeftRadius: "20%"}}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>

          <TableCell align="left" style={{ borderBottom: "3px solid #878787" }}>
            {row.firstName}
          </TableCell>
          <TableCell align="left" style={{ borderBottom: "3px solid #878787" }}>
            {row.lastName}
          </TableCell>
          <TableCell align="left" style={{ borderBottom: "3px solid #878787" }}>
            {row.email}
          </TableCell>

          <TableCell style={{ borderBottom: "3px solid #878787" , borderRadius:"8px"}}>
            <Button
              color="primary"
              onClick={() => {
                openInPopup(row);
              }}

              // onClick={handleOpen}
            >
              <EditOutlinedIcon fontSize="small" />
            </Button>

            <Button color="secondary">
              <CloseIcon
                fontSize="small"
                onClick={() => {
                  setConfirmDialog({
                    isOpen: true,
                    title: "Are you sure to delete this record?",
                    subTitle: "You can't undo this operation",
                    onConfirm: () => {
                      deleteQuizMaster(row._id);
                      setConfirmDialog({
                        isOpen: false,
                      });
                    },
                  });
                }}
              />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Details
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead
                    style={{ borderBottom: "4px solid var(--mahogany-3)" }}
                  >
                    <TableRow>
                      <TableCell>Business_Name</TableCell>
                      <TableCell>Domain_name</TableCell>
                      <TableCell>LightColor</TableCell>
                      <TableCell>DarkColor</TableCell>
                      <TableCell>Logo</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{row.account.businessName}</TableCell>
                      <TableCell>{row.account.domain_name}</TableCell>
                      <TableCell>{row.account.lightColor}</TableCell>
                      <TableCell align="left">
                        {row.account.darkColor}
                      </TableCell>
                      <TableCell
                        style={{
                          height: "10px",
                          maxWidth: "10px",
                          overflow: "scroll",
                        }}
                      >
                        {row.account.logo}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  useEffect(
    () => {
      findQuizMasters();
    },
    [],
    [QuizMasters]
  );
  return (
    <div className="outletForm">
      <Content>
        <TblContainer>
          <Table aria-label="collapsible table">
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
          <Popup
            title=" QuizMaster Form"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            <UsersForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
          </Popup>
          {/*
         // <Modal
          //   open={open}
          //   onClose={handleClose}
          //   aria-labelledby="modal-modal-title"
          //   aria-describedby="modal-modal-description"
          // >
          //   <EditUser />
         // </Modal>*/}
          <Notification
            notify={notify}
            setNotify={setNotify}
            vertical="top"
            horizontal="right"
          />
          <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
        </TblContainer>
        <TblPagination />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <controls.Button
            text="Add New"
            color="#1D1D1D"
            startIcon={<AddIcon />}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </div>
      </Content>
    </div>
  );
}
