import { Post as PostType } from "../../../pages/api/posts"
import { ReactionCounter } from "./ReactionCounter"
import { PostContainer } from "./PostContainer"
import { PostContent } from "./PostContent"
import { PostFooter } from "./PostFooter"
import { PostHeader } from "./PostHeader"
import { Divider } from '@mui/material'

export const Post = ({ account, date, content, likes, comments, shares }: PostType) => {
    return (
        <PostContainer >
            <PostHeader account={account} date={date} />
            <PostContent content={content} />
            <ReactionCounter
                numberOfLikes={likes.num}
                numberOfComments={comments.length}
                numberOfShares={shares} />
            <Divider />
            <PostFooter liked={likes.checked} />
        </PostContainer>
    )
}