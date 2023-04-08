import PublicIcon from '@mui/icons-material/Public';
import { Typography } from '@mui/material';
import { Post } from "../../../pages/api/posts";
import { getTimeStringSince } from '../../../utils';
import { FlexRow } from "../../layout";

const sx = { color: "grey.300", fontSize: "0.675rem" }

export const PostSubHeader = ({ date }: Pick<Post, 'date'>) => {
    const timeSincePosted = getTimeStringSince(date)
    return (
        <FlexRow width="fit-content" gap={0.5}>
            <Typography sx={sx} variant='body2'>{timeSincePosted}</Typography>
            <PublicIcon sx={sx} />
        </FlexRow>
    );
}