import React from "react"
import { MainContainer } from "../MainContainer"
import { Input } from "../input"
import { Form } from "../Form"
import { Typography } from "@mui/material"
import { PrimaryButton } from "../PrimaryButton"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { FileInput } from "../FileInput"
import { useData } from '../../dataContext'
const schema = yup.object({})

export const Step3 = () => {
  const navigate = useNavigate();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    navigate("/result");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};