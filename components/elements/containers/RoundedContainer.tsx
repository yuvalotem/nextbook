import { Box, styled } from "@mui/material";

export const RoundedContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%',
    padding: '0.325rem',
    background: theme.palette.grey[400],
    cursor: 'pointer',
}))

export const SmallRoundedContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%',
    padding: '0.125rem',
    background: theme.palette.grey[400],
    cursor: 'pointer',
}))