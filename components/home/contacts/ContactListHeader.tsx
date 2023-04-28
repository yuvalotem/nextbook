import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SearchIcon from '@mui/icons-material/Search'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import { Box, IconButton, Typography } from "@mui/material"
import { FlexRow } from "../../layout"

export const ContactListHeader = () => (
    <FlexRow>
        <Box width="50%" display="flex" justifyContent="flex-start" sx={{ paddingLeft: "0.25rem" }}>
            <Typography variant="subtitle2">Contacts</Typography>
        </Box>
        <IconButton >
            <SearchIcon sx={{ fontSize: "0.675rem" }} />
        </IconButton>
        <IconButton>
            <MoreHorizIcon sx={{ fontSize: "0.675rem" }} />
        </IconButton>
        <IconButton>
            <VideoCallIcon sx={{ fontSize: "0.675rem" }} />
        </IconButton>
    </FlexRow>)


