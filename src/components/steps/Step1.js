import { Typography } from "@mui/material"
import React from "react"
import { useForm } from "react-hook-form"
import { MainContainer } from "../MainContainer"
import { Form } from "../Form"
import { Input } from "../input"
import { PrimaryButton } from "../PrimaryButton"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import { useData } from "../../dataContext"
const schema = yup
  .object({
    firstName: yup
      .string()
      .matches(/^([^0-9]*)$/, "First name should not contain numbers")
      .required("First name is a required field"),
    lastName: yup
      .string()
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .required("Last name is a required field"),
  })
  .required()

export const Step1 = () => {
  const navigate = useNavigate()
  const { data, setValues } = useData()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    setValues(data)
    navigate("/step2")
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 1 {"\u{1F984}"}
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName")}
          name="firstName"
          id="firstName"
          type="text"
          label="First Name"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register("lastName")}
          name="lastName"
          id="lastName"
          type="text"
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  )
}
