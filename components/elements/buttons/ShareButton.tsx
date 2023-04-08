import { ButtonProps } from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import { PostButton } from "./PostButton";

export const ShareButton = (props: ButtonProps) => (
    <PostButton text="Share" checked={false} Icon={ReplyIcon} {...props} />
)
