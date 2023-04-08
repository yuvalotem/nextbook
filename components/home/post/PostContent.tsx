import { Box, Typography } from "@mui/material";
import { Post } from "../../../pages/api/posts";

export const PostContent = ({ content }: Pick<Post, 'content'>) => (
    <Box>
        <Typography variant="body2">{content.text}</Typography>
        {content.imageUrl && <img src={content.imageUrl} style={{ width: "100%", height: "15rem" }} />}
    </Box>
)