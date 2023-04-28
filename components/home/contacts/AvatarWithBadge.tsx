import { Avatar, Badge, styled } from "@mui/material"

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        height: 4,
        minWidth: 4,
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
}));

type AvatarWithBadgeProps = {
    withBadge?: boolean,
    src?: string,
    alt?: string
}

export const AvatarWithBadge = ({ withBadge, src, alt }: AvatarWithBadgeProps) => {

    if (!withBadge) {
        return <Avatar
            sx={{ width: "1.75rem", height: "1.75rem" }}
            src={src}
            alt={alt}
        />
    }

    return <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
    >
        <Avatar
            sx={{ width: "1.75rem", height: "1.75rem" }}
            src={src}
            alt={alt}
        />
    </StyledBadge>
}