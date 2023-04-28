import type { NextApiRequest, NextApiResponse } from 'next'
import { postListMock } from '../../mocks'

type AccountType = {
  name: string,
  imageUrl?: string,
}

type LikesType = {
  num?: number,
  checked: boolean,
}

type ContentType = {
  text: string,
  imageUrl?: string,
}

type CommentType = {
  text: string,
}
export type Post = {
  id: string,
  account: AccountType,
  date: Date,
  content: ContentType,
  likes: LikesType,
  comments: CommentType[],
  shares?: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json(postListMock)
}
