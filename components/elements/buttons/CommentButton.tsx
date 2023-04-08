import { ButtonProps } from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { PostButton } from "./PostButton";

export const CommentButton = (props: ButtonProps) => (
    <PostButton text="Comment" checked={false} Icon={ChatBubbleIcon} {...props} />
)
