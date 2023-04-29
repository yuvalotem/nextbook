import { Avatar, AvatarProps } from "@mui/material"

export const MainAvatar = (props: AvatarProps) => (
    <Avatar
        sx={{ width: "1.75rem", height: "1.75rem", ...props.sx }}
        {...props} />
)
