import { Badge, styled } from "@mui/material"
import { MainAvatar } from "../../elements";

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
        return <MainAvatar
            src={src}
            alt={alt}
        />
    }

    return <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
    >
        <MainAvatar
            src={src}
            alt={alt}
        />
    </StyledBadge>
}