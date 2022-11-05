import { Button, ButtonProps } from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';

export const ShareButton = (props: ButtonProps) => (
    <Button startIcon={<ReplyIcon />} {...props}>
        Share
    </Button >
)