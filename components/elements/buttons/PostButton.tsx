import { Button, ButtonProps, Typography } from "@mui/material";
import Icon from '@mui/icons-material/Abc'

export interface PostButtonProps extends ButtonProps {
    text: string;
    Icon?: typeof Icon;
    checked: boolean;
}

export const PostButton = ({ text, Icon, checked, ...props }: PostButtonProps) => {
    const color = checked ? "primary" : "grey.300"
    return (
        <Button startIcon={ Icon ? <Icon sx={{ color }} /> : props.startIcon} {...props}>
            <Typography variant="body1" sx={{ color, fontSize: "0.5rem", ...props.sx }}>{text}</Typography>
        </Button>
    );
}