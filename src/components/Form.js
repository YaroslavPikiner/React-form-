import React from "react"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  root: {
    marginTop: 4,
    width: "100%",
  },
})

export const Form = ({ children, ...props }) => {
  const styles = useStyles()
  return (
    <form noValidate {...props} className={styles.root}>
      {children}
    </form>
  )
}
