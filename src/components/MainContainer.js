import React from "react"
import Container from "@mui/material/Container"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  root: {
    marginTop: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})

export const MainContainer = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <Container
      className={classes.root}
      container="main"
      {...props}
      maxWidth="xs"
    >
      {children}
    </Container>
  )
}
