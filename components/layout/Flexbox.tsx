import { styled, Box } from "@mui/material";

export const FlexRow = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
})

export const FlexColumn = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
})

export const FlexSpaceBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
})