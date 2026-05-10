import { useState } from "react";
import type { ReactNode } from "react";
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
import type { SxProps, Theme } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import type { UseFormRegister, Control, FieldError } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema } from "../../../../shared/config/schema";
import type { ContactFormData } from "../../../../shared/config/schema";
import { inquiryOptions } from "../../../../shared/config/inquiryOptions";
import { submitContactMessage } from "../../services/contactService";
import { convert } from "../../utils/muiConverter";

const baseFieldSx = {
  maxWidth: "50%",
  "& .MuiInputBase-root": {
    maxWidth: "100%",
    p: 1.5,
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
};

type FieldDescriptor = {
  label: string;
  type: "input" | "select";
  zodId: keyof ContactFormData;
  placeholder?: string;
  menuItems?: readonly string[];
  formControlSx?: SxProps<Theme>;
  textFieldProps?: {
    multiline?: boolean;
    rows?: number;
    fullWidth?: boolean;
  };
};

const fields: FieldDescriptor[] = [
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

type InputFieldProps = {
  label: string;
  children: ReactNode;
  zodId: keyof ContactFormData;
};

function InputField({ label, children, zodId }: InputFieldProps) {
  return (
    <Stack direction="column">
      <InputLabel
        htmlFor={zodId}
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

type FieldControlProps = {
  field: FieldDescriptor;
  register: UseFormRegister<ContactFormData>;
  error: FieldError | undefined;
  control: Control<ContactFormData>;
};

function FieldControl({ field, register, error, control }: FieldControlProps) {
  if (field.type === "input") {
    return (
      <>
        <TextField
          id={field.zodId}
          {...register(field.zodId)}
          placeholder={field.placeholder ?? ""}
          {...(field.textFieldProps ?? {})}
          error={!!error}
          sx={{ height: "fit-content" }}
        />
        {error && <FormHelperText>{error.message}</FormHelperText>}
      </>
    );
  }

  if (field.type === "select") {
    return (
      <>
        <Controller
          name={field.zodId}
          control={control}
          render={({ field: controllerField }) => (
            <Select
              id={field.zodId}
              name={field.zodId}
              value={controllerField.value}
              onChange={controllerField.onChange}
              onBlur={controllerField.onBlur}
              inputRef={controllerField.ref}
              displayEmpty
              renderValue={(selected: string) => {
                if (!selected) {
                  return "Select an option";
                }
                return selected;
              }}
              error={!!error}
              sx={{
                minWidth: "200px",
                height: "50px",
                p: 0,
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {(field.menuItems ?? []).map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {error && <FormHelperText>{error.message}</FormHelperText>}
      </>
    );
  }

  return null;
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: ContactFormData) {
    try {
      setIsLoading(true);
      setFallbackUrl("");

      const result = await submitContactMessage(data);

      if (result?.status === "fallback") {
        setFallbackUrl(result.fallbackUrl);
        return;
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
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
      {isSubmitted ? (
        <Stack alignItems="center" justifyContent="center" spacing={convert(20)} sx={{ minHeight: 400 }}>
          <Stack spacing={convert(10)} sx={{
            px: convert(50),
            py: convert(30),
            border: "1px solid",
            borderColor: "custom.borderDefault",
            borderStyle: "dotted"
          }}>
            <Typography
              variant="sectionTitle"
              role="status"
              aria-live="polite"
            >
              Thank you for reaching out! ✅
            </Typography>
          </Stack>
        </Stack>
      ) : (
        <>
          {fields.map((field) => (
            <InputField key={field.zodId} zodId={field.zodId} label={field.label}>
              <FormControl
                error={!!errors[field.zodId]}
                sx={{ ...baseFieldSx, ...(field.formControlSx ?? {}) }}
              >
                <FieldControl
                  field={field}
                  register={register}
                  control={control}
                  error={errors[field.zodId]}
                />
              </FormControl>
            </InputField>
          ))}
          {isLoading && (
            <Typography variant="bodyLarge" role="status" aria-live="polite">
              Sending your message...
            </Typography>
          )}
          {fallbackUrl ? (
            <>
              <Stack spacing={convert(10)}>
                <Typography variant="bodyLarge">
                  Message delivery timed out. You can contact me directly using the button below.
                </Typography>

                <Button component="a" href={fallbackUrl} variant="outlined">
                  Open email app
                </Button>
              </Stack>
              <Button variant="contained" type="submit">
                Try again
              </Button>
            </>
          ) :
            <Button variant="contained" type="submit">
              Submit
            </Button>
          }
        </>
      )}
    </Stack>
  );
}
