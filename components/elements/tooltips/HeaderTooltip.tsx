import { styled, Tooltip, Box, TooltipProps } from "@mui/material";
import { FC } from "react";

const StyledTooltip = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey[500],
    fontSize: "0.5rem",
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    paddingBottom: '0.25rem',
    paddingTop: '0.25rem',
    borderRadius: '0.25rem'
}));
export const HeaderTooltip: FC<TooltipProps> = (props) => (<Tooltip components={{ Tooltip: StyledTooltip }} {...props} />)