import MuiHomeIcon from '@mui/icons-material/Home';
import { styled } from '@mui/material';
import { iconStyle } from './style';

export const HomeIcon = styled(MuiHomeIcon)(({ theme }) => iconStyle(theme))
