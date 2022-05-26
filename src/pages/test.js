//   <Content>
//         <controls.Button
//             text="Add New"
//             variant="outlined"
//             startIcon={<AddIcon />}
//             onClick={() => {
//               setOpenPopup(true);
//               setRecordForEdit(null);
//             }}
//           />
//         <TblContainer>
//           <TblHead />
// <TableCell>
//   <p style={{ overflow: "scroll", maxWidth: "250px" }}>{row.account.logo}</p>
// </TableCell>;
//           <TableBody>
//             recordsAfterPagingAndSorting().map((item) => (
//         //       <TableRow key={item.id}>
//         //         <TableCell>
//         //           <IconButton</TableCell>
//         //             aria-label="expand row"
//         //             size="small"
//         //             onClick={() => setOpen(!open)}
//         //           >
//         //             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//         //           </IconButton*>
//         //         </TableCell>
//         //         <TableCell>{item.firstName}</TableCell>
//         //         <TableCell>{item.lastName}</TableCell>
//         //         <TableCell>{item.email}</TableCell>
//         //         <TableCell>
//         //           <Button
//                     color="primary"
//                     onClick={() => {
//                       openInPopup(item);
//                     }}
//                   >
//                     <EditOutlinedIcon fontSize="small" />
//                   </Button>
//                   <Button color="secondary">
//                     <CloseIcon
//                       fontSize="small"
//                       onClick={() => {
//                         setConfirmDialog({
//                           isOpen: true,
//                           title: "Are you sure to delete this record?",
//                           subTitle: "You can't undo this operation",
//                           onConfirm: () => {
//                             deleteQuizMaster(item._id);
//                             setConfirmDialog({
//                               isOpen: false,
//                             });
//                           },
//                         });
//                       }}
//                     />
//                   </Button>
//                 </TableCell>
//               </TableRow>

//             <TableRow>
//               <TableCell
//                 style={{ paddingBottom: 0, paddingTop: 0 }}
//                 colSpan={6}
//               >
//                 <Collapse in={open} timeout="auto">
//                   <Box sx={{ margin: 1 }}>
//                     <Table size="small" aria-label="purchases">
//                       <TableHead>
//                         <TableRow>
//                           <TableCell>Business_Name</TableCell>
//                           <TableCell>Domain_Name</TableCell>
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {recordsAfterPagingAndSorting().account?.map(
//                           (historyRow) => (
//                             <TableRow key={historyRow.id}>
//                               <TableCell component="th" scope="row">
//                                 {historyRow.BusinessName}
//                               </TableCell>
//                               <TableCell component="th" scopre="row">
//                                 {historyRow.domain_name}
//                               </TableCell>
//                             </TableRow>
//                           )
//                         )}
//                       </TableBody>
//                     </Table>
//                   </Box>
//                 </Collapse>
//               </TableCell>

//             </TableRow>

//             <Popup
//               title=" QuizMaster Form"
//               openPopup={openPopup}
//               setOpenPopup={setOpenPopup}
//             >
//               <UsersForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
//             </Popup>
//             <Notification
//               notify={notify}
//               setNotify={setNotify}
//               vertical="top"
//               horizontal="right"
//             />
//             <ConfirmDialog
//               confirmDialog={confirmDialog}
//               setConfirmDialog={setConfirmDialog}
//             />

//           </TableBody>
//         </TblContainer>
//         <TblPagination />
//       </Content >
