import { ButtonProps } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { PostButton, PostButtonProps } from "./PostButton";

export const LikeButton = (props: ButtonProps & Pick<PostButtonProps, 'checked'>) => (
    <PostButton text="Like" Icon={ThumbUpIcon} {...props} />
)
