import React from "react"
import { styled } from "@mui/material/styles"

const Head = styled("h1")(({ theme }) => ({
  color: "deeppink",
  margin: theme.spacing(3, 0, 2),
  textAlign: "center",
  fontSize: '30px'
}))

export const Header = () => {
  return (
    <Head color="deeppink" variant="h5" component="h1">
      React form chalenge
    </Head>
  )
}
