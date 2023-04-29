import { Divider } from "@mui/material"
import { useUserContext } from "../../../context"
import { MainAvatar } from "../../elements"
import { FlexRow } from "../../layout"
import { PostContainer } from "./PostContainer"
import { OutlinedInput, styled } from "@mui/material"
import { PostButton } from "../../elements"
import Image from "next/image"

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    "& fieldset": { border: 'none' },
    borderRadius: '1.5rem',
    backgroundColor: theme.palette.grey[100],
    width: "100%",
    height: '26px',
    fontSize: '0.75rem'
}))

const iconProps = {
    height: "16",
    width: "16",
    alt: " ",
    elementtiming: "1",
    referrerpolicy: "origin-when-cross-origin",
}
const LiveVideoIcon = () => (
    <Image
        {...iconProps}
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png" />
);

const PhotoVideoIcon = () => (
    <Image
        {...iconProps}
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png" />
);

const FeelingActivityIcon = () => (
    <Image
        {...iconProps}
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png" />
);

export const WritePostSection = () => {
    const user = useUserContext()

    return <PostContainer display="flex" flexDirection='column' gap={1}>
        <FlexRow gap={1}>
            <MainAvatar
                src={user?.imageUrl}
                alt={user?.name} />
            <StyledOutlinedInput placeholder={`What's on your mind, ${user?.name.split(' ').shift()}`} />
        </FlexRow>
        <Divider />
        <FlexRow gap={1}>
            <PostButton text="Live video" checked={false} startIcon={<LiveVideoIcon />} sx={{ width: "33%" }} />
            <PostButton text="Photo/video" checked={false} startIcon={<PhotoVideoIcon />} sx={{ width: "33%" }} />
            <PostButton text="Feeling/activity" checked={false} startIcon={<FeelingActivityIcon />} sx={{ width: "33%" }} />
        </FlexRow>
    </PostContainer>
}