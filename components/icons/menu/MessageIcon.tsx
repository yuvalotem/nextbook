import ChatIcon from '@mui/icons-material/Chat';
import { styled } from '@mui/material';
import { iconStyle } from './style';

export const MessageIcon = styled(ChatIcon)(({ theme }) => iconStyle(theme))
