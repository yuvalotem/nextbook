import { Button, ButtonProps } from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export const CommentButton = (props: ButtonProps) => (
    <Button startIcon={<ChatBubbleIcon />} {...props}>
        Comment
    </Button >
)