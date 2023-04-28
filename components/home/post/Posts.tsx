import useSWR from 'swr'
import { useFetchData } from '../../../api'
import { Post as PostType } from '../../../pages/api/posts'
import { AllPostsContainer } from './AllPostsContainer'
import { Post } from './Post'

export const Posts = () => {
    const { data: posts, error } = useFetchData<PostType[]>('/api/posts')

    if (error) return <div>Failed to load</div>
    if (!posts) return <div>Loading...</div>

    return (
        <AllPostsContainer>
            {posts?.map(post => <Post key={post.id} {...post} />)}
        </AllPostsContainer>
    )
}