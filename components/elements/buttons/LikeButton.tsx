import { Button, ButtonProps } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export const LikeButton = (props: ButtonProps) => (
    <Button startIcon={<ThumbUpIcon />} {...props}>
        Like
    </Button >
)