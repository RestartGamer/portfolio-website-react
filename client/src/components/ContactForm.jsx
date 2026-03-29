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
import { Schema } from "../../../shared/assets/schema";
import { inquiryOptions } from "../../../shared/assets/inquiryOptions";

const convert = (px) => px / 8;
const title = "Contact Me";

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
function onSubmit(data) {
    console.log(data);
  }

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Schema),
    mode: "onChange",
  });

  return (
    <Stack
      component="form"
      direction="column"
      onSubmit={handleSubmit(onSubmit)}
      spacing={convert(24)}
      sx={{ width: "100%" }}
    >

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
    </Stack>
  );
}