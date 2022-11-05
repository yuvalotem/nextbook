import { InputProps, OutlinedInput, styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    "& fieldset": { border: 'none' },
    borderRadius: '1.5rem',
    backgroundColor: theme.palette.grey[100],
    width: '175px',
    height: '26px',
    fontSize: '0.75rem'
}))
const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
    color: theme.palette.grey[300],
    fontSize: '1rem'
}))

export const SearchInput = (props: InputProps) => {
    return (
        <StyledOutlinedInput placeholder="Search Facebook" startAdornment={<StyledSearchIcon />} {...props} />
    )
}
