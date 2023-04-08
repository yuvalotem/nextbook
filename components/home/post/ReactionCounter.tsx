import { Box, styled, Typography } from "@mui/material";
import { FlexRow, FlexSpaceBetween } from "../../layout";

type ReactionCounterType = {
    numberOfLikes?: number,
    numberOfComments: number,
    numberOfShares?: number
}

const ReactionCounterContainer = styled(FlexSpaceBetween)({
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
})

export const ReactionCounter = ({ numberOfLikes, numberOfComments, numberOfShares }: ReactionCounterType) => (
    <ReactionCounterContainer>
        <Box>
            {numberOfLikes && <Typography sx={{ fontSize: "0.5rem" }} variant="body2">{numberOfLikes} Likes</Typography>}
        </Box>
        <FlexRow gap={1}>
            {numberOfComments > 0 && <Typography sx={{ fontSize: "0.5rem" }} variant="body2">{numberOfComments} Comments</Typography>}
            {numberOfShares && <Typography sx={{ fontSize: "0.5rem" }} variant="body2">{numberOfShares} shares</Typography>}
        </FlexRow>
    </ReactionCounterContainer>
)