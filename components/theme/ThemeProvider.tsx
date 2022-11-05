import { FC, PropsWithChildren } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { themeOptions } from "./themeOptions";

const theme = createTheme(themeOptions);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>)
