import useSWR from 'swr'
import { Post as PostType } from '../../pages/api/posts'
import { Post } from './post'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const Posts = () => {
    const { data: posts, error } = useSWR<PostType[], Error>('/api/posts', fetcher)

    if (error) return <div>Failed to load</div>
    if (!posts) return <div>Loading...</div>

    return (
        <>
            {posts?.map(post => <Post key={post.id} {...post} />)}
        </>
    )
}