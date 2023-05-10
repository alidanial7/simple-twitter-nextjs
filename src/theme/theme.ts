import { ThemeOptions, createTheme } from "@mui/material";

export const theme: ThemeOptions = createTheme({
  palette: {
    background: {
      default: "#06151d",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#1a2730",
          borderRadius: "1rem",
          padding: "1rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#27343e",
          borderRadius: "1rem",
          "& .MuiOutlinedInput-root": {
            color: "#f9feff",
            "& fieldset": {
              borderRadius: "1rem",
            },
          },
          "& .MuiFormLabel-root": {
            color: "#f9feff",
          },
        },
      },
    },
  },
});
