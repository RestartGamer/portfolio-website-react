import { useState, useRef } from "react"
import { Stack, Box, Button, Typography, Card, List, ListItem, ListItemText, InputLabel, TextField, FormHelperText, Select, MenuItem, FormControl } from "@mui/material"
import { currentCVImage, mgPortfolioImage, oldCVImage, cardUIDecoration } from "../assets"
import { Divider, TextOnly } from "."
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Schema } from "../../../shared/assets/schema"
import { inquiryOptions } from "../../../shared/assets/inquiryOptions"

const convert = (px) => px / 8;
const title = "Contact Me";


const generalStyles = {
    //When using Form Control
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
            fontWeight: 300
        }
    },
    "& .MuiSelect-select": {
        maxWidth: "fit-content",
    },
}


const contents = [
    { label: "Name", placeholder: "Your First Name", type: "input", zodId: "name", props: { ...generalStyles, } },
    { label: "Email", placeholder: "Your Email", type: "input", zodId: "email", props: { ...generalStyles, } },
    { label: "Type of Inquiry", type: "selection", zodId: "inquiry", menuItems: [...inquiryOptions],  props: { ...generalStyles, maxWidth: "fit-content", } },
    { label: "Message", placeholder: "Insert your message", type: "input", zodId: "message", props: { ...generalStyles, maxWidth: "100%" , textFieldProps: {multiline: true, rows: 4, fullWidth: true  }} },
];


function InputField({ label, children }) {
    return (
        <Stack direction="column">
            <InputLabel sx={{
                color: "text.primary",
                typography: "bodyLarge",
                textAlign: "start",
            }}>
                {label}
            </InputLabel>
            {children}
        </Stack>
    )
}


export function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(Schema),
        mode: "onChange"
    })
    console.log(errors)
    return (
        <Stack component="form" direction="column" spacing={convert(24)} sx={{
            width: "100%"
        }}>
            <Typography variant="headingTitle">{title}</Typography>
            {contents.map(({ label, type, zodId, menuItems = [], placeholder = "", props = {} }) => {

                return (
                    <InputField key={label} label={label}>
                        {

                            type == "input"
                                ? <FormControl error={!!errors[zodId]} sx={{ ...props }}>
                                    <TextField {...register(zodId)} placeholder={placeholder} {...props.textFieldProps} error={!!errors[zodId]} sx={{
                                        height: "fit-content",
                                    }} />
                                    <FormHelperText>
                                        {errors[zodId]?.message}
                                    </FormHelperText>
                                </FormControl>
                                : <FormControl error={!!errors[zodId]} sx={{ ...props }}>
                                    <Select {...register(zodId)} errors={!!errors[zodId]}  >
                                        {
                                            menuItems.length > 0 &&
                                            menuItems.map((menuItem => {
                                                return (
                                                    <MenuItem value={menuItem}>
                                                        {menuItem}
                                                    </MenuItem>
                                                )
                                            }))

                                        }
                                    </Select>
                                </FormControl>
                        }
                    </InputField>
                )
            })}
        </Stack>
    )
}