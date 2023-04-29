import { Typography, TypographyProps } from "@mui/material";

export const TypographySubtitle1 = (props: TypographyProps) => {
    return <Typography sx={{ fontSize: "0.75rem", color: "grey.200", ...props.sx }} {...props} />
}
export const TypographySmallText = (props: TypographyProps) => {
    return <Typography variant="caption" sx={{ fontSize: "0.5rem", color: "grey.200", ...props.sx }} {...props} />
}