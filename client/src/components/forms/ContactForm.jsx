import { useState } from "react"
import {
  Stack,
  Typography,
  InputLabel,
  TextField,
  FormHelperText,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema } from "../../../../shared/config/schema";
import { inquiryOptions } from "../../../../shared/config/inquiryOptions";
import { submitContactMessage } from "../../services/contactService"
import { convert } from "../../utils/muiConverter"


const baseFieldSx = {
  maxWidth: "50%",
  "& .MuiInputBase-root": {
    maxWidth: "100%",
    p: convert(11),
  },
  "& .MuiInputBase-input": {
    typography: "bodyLarge",
    color: "text.primary",
    fontWeight: 300,
    p: 0,
    "&::placeholder": {
      typography: "bodyLarge",
      color: "text.primary",
      fontWeight: 300,
    },
  },
  "& .MuiSelect-select": {
    maxWidth: "fit-content",
  },
};

const fields = [
  {
    label: "Name",
    placeholder: "Your First Name",
    type: "input",
    zodId: "name",
  },
  {
    label: "Email",
    placeholder: "Your Email",
    type: "input",
    zodId: "email",
  },
  {
    label: "Type of Inquiry",
    type: "select",
    zodId: "inquiry",
    menuItems: inquiryOptions,
    formControlSx: { maxWidth: "fit-content" },
  },
  {
    label: "Message",
    placeholder: "Insert your message",
    type: "input",
    zodId: "message",
    formControlSx: { maxWidth: "100%" },
    textFieldProps: {
      multiline: true,
      rows: 4,
      fullWidth: true,
    },
  },
];


function InputField({ label, children }) {
  return (
    <Stack direction="column">
      <InputLabel
        htmlFor={label}
        sx={{
          color: "text.primary",
          typography: "bodyLarge",
          textAlign: "start",
        }}
      >
        {label}
      </InputLabel>
      {children}
    </Stack>
  );
}

function FieldControl({ field, register, error }) {
  if (field.type === "input") {
    return (
      <>
        <TextField
          id={field.label}
          {...register(field.zodId)}
          placeholder={field.placeholder ?? ""}
          {...(field.textFieldProps ?? {})}
          error={!!error}
          sx={{ height: "fit-content" }}
        />
        <FormHelperText>{error?.message}</FormHelperText>
      </>
    );
  }

  if (field.type === "select") {
    return (
      <>
        <Select {...register(field.zodId)}>
          {(field.menuItems ?? []).map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{error?.message}</FormHelperText>
      </>
    );
  }

  return null;
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function onSubmit(data) {
    try {
      await submitContactMessage(data);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }

  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      inquiry: "",
      message: "",
    },
  });

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={convert(24)}
      sx={{ width: "100%" }}
    >
      {
        isSubmitted ? (
          <Stack alignItems="center" justifyContent="center" spacing={convert(20)} sx={{ minHeight: 400 }}>
            <Stack spacing={convert(10)} sx={{
              px: convert(50),
              py: convert(30),
              border: "1px solid",
              borderColor: "custom.borderDefault",
              borderStyle: "dotted"
            }}>
              <Typography variant="sectionTitle">Thank you for reaching out! ✅</Typography>
              <Typography sx={{ fontSize: "4rem" }}>

              </Typography>
            </Stack>

          </Stack>
        ) :
          (
            <>
              {fields.map((field) => (
                <InputField key={field.zodId} label={field.label}>
                  <FormControl
                    error={!!errors[field.zodId]}
                    sx={{ ...baseFieldSx, ...(field.formControlSx ?? {}) }}
                  >
                    <FieldControl
                      field={field}
                      register={register}
                      error={errors[field.zodId]}
                    />
                  </FormControl>
                </InputField>
              ))}
              <Button variant="contained" type="submit" >
                Submit
              </Button>
            </>
          )

      }





    </Stack >
  );
}