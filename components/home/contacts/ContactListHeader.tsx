import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SearchIcon from '@mui/icons-material/Search'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import { Box, IconButton, styled } from "@mui/material"
import { TypographySubtitle1 } from '../../elements'
import { FlexRow } from "../../layout"

const iconStyle = { fontSize: "1rem" }
const StyledIconButton = styled(IconButton)({ padding: "0.25rem" })

export const ContactListHeader = () => (
    <FlexRow pt="0.5rem">
        <Box width="50%" display="flex" justifyContent="flex-start">
            <TypographySubtitle1>Contacts</TypographySubtitle1>
        </Box>
        <StyledIconButton>
            <VideoCallIcon sx={iconStyle} />
        </StyledIconButton>
        <StyledIconButton >
            <SearchIcon sx={iconStyle} />
        </StyledIconButton>
        <StyledIconButton>
            <MoreHorizIcon sx={iconStyle} />
        </StyledIconButton>
    </FlexRow>)


