import { Divider } from '@mui/material'
import useSWR from 'swr'
import { Post } from '../../pages/api/posts'
import { CommentButton, LikeButton, ShareButton } from '../elements'
import { PostContainer } from './PostContainer'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const Posts = () => {
    const { data: posts, error } = useSWR<Post[], Error>('/api/posts', fetcher)

    if (error) return <div>Failed to load</div>
    if (!posts) return <div>Loading...</div>

    return (
        <>
            {posts?.map(post => (
                <PostContainer key={post.id}>
                    <>
                        <h6>{post.account}</h6>
                        {post.date}
                        <Divider />
                        <p>{post.content}</p>
                        <Divider />
                        <p>{post.likes} Likes, {post.comments} Comments</p>
                        <Divider />
                        <LikeButton/>
                        <CommentButton/>
                        <ShareButton/>
                    </>
                </PostContainer>
            ))}
        </>
    )
}