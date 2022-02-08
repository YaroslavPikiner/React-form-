import { Typography, FormControlLabel, Checkbox } from "@mui/material"
import React from "react"
import { MainContainer } from "../MainContainer"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../input"
import { PrimaryButton } from "../PrimaryButton"
import { useNavigate } from "react-router-dom"
import { Form } from "../Form"
import { parsePhoneNumberFromString } from "libphonenumber-js"
import { useData } from "../../dataContext"

const schema = yup.object({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
})

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value)
  if (!phoneNumber) {
    return value
  }

  return phoneNumber.formatInternational()
}

export const Step2 = () => {
  const { data, setValues } = useData()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phone: data.phone,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const hasForm = watch("hasPhone")

  const onSubmit = (data) => {
    setValues(data)
    navigate("/step3")
  }
  return (
    <MainContainer>
      <Typography>Step 2 {"\u{1F984}"}</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          id="email"
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              color="primary"
              {...register("hasPhone")}
              name="hasPhone"
            />
          }
          label="Do you have a phone"
        />
        {hasForm && (
          <Input
            {...register("phone")}
            defaultValue={data.phone}
            type="tel"
            name="phone"
            label="Phone Number"
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value)
            }}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  )
}
