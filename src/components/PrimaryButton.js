import React from "react"
import { Button } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    padding: 10,
  },
})

export const PrimaryButton = ({ children, ...props }) => {
  const styles = useStyles()
  return (
    <Button
      className={styles.root}
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      {...props}
    >
      {children}
    </Button>
  )
}
