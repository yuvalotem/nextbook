
import { ExpandLess as MuiExpandLess, ExpandMore as MuiExpandMore } from "@mui/icons-material";
import { styled, Theme } from "@mui/material";

const generateCommonStyle = ({ theme }: { theme: Theme }) => ({
    color: theme.palette.grey[500],
    fontSize: "1.125rem"
})

export const ExpandMore = styled(MuiExpandMore)(generateCommonStyle)

export const ExpandLess = styled(MuiExpandLess)(generateCommonStyle)
