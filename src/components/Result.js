import React, { useState } from "react"
import {
  Typography,
  FormControlLabel,
  Checkbox,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
} from "@mui/material"
import { withSize } from "react-sizeme"
import { InsertDriveFile } from "@mui/icons-material"
import Swal from "sweetalert2"
import { MainContainer } from "./MainContainer"
import { useData } from "../dataContext"
import { Link } from "react-router-dom"
import { PrimaryButton } from "./PrimaryButton"
import Confetti from "react-confetti"

export const Result = ({ size }) => {
  const { data } = useData()
  console.log(data)
  const [suc, setSuc] = useState(false)
  const entries = Object.entries(data).filter((entry) => entry[0] !== "files")
  const { files } = data
  const onSubmit = async () => {
    const formData = new FormData()
    if (data.files) {
      data.files.forEach((file) => {
        formData.append("files", file, file.name)
      })
    }
    entries.forEach((entry) => {
      formData.append(entry[0], entry[1])
    })
    const res = await fetch("http://localhost:4000/", {
      method: "POST",
      body: formData,
    })
    if (res.status === 200) {
      Swal.fire("Great job!", "You`ve passed the challenge", "success")
      setSuc(!suc)
    }
  }
  if (suc) {
    return <Confetti width='1920px' height='1050px' />
  }
  return (
    <MainContainer>
      <Typography>Form Values{"\u{1F984}"}</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography>Files{"\u{1F984}"}</Typography>
          <List>
            {files.map((file, index) => (
              <ListItem>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={file.name} secondary={file.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
      <Link to="/">Start Over</Link>
    </MainContainer>
  )
}
