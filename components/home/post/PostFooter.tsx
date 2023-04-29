import { CommentButton, LikeButton, ShareButton } from '../../elements'

export const PostFooter = ({ liked }: { liked: boolean }) => (
    <>
        <LikeButton checked={liked} />
        <CommentButton />
        <ShareButton />
    </>
)