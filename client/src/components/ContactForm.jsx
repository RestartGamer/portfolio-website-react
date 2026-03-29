import { useEffect } from "react"
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

const API_BASE = import.meta.env.VITE_API_URL;


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

export function ContactForm() {
  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await fetch(`${API_BASE}/api/messages`);
        const receivedData = await res.json();
        console.log("this is the data received", receivedData)
      } catch (err) {
        console.error("There was an error with the fetch:", err)
      }
    }
    fetchMessages();

  }, []);

  async function onSubmit(payload) {
    try {
      console.log("API_BASE:", API_BASE);
      console.log("payload:", payload);
      const res = await fetch(`${API_BASE}/api/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });


      const result = await res.json();
      console.log("The data was successfully sent", result)
    } catch (err) {
      console.error("There was an error with the submission:", err)
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