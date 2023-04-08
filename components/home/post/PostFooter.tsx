import { Divider } from '@mui/material'
import { CommentButton, LikeButton, ShareButton } from '../../elements'

export const PostFooter = ({ liked }: { liked: boolean }) => (
    <>
        <Divider />
        <LikeButton checked={liked} />
        <CommentButton />
        <ShareButton />
        <Divider />
    </>
)