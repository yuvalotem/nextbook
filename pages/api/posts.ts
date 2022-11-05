// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { postList } from '../../postList'

export type Post = {
  id: string,
  account: string,
  date: Date,
  content: string,
  likes: number,
  comments: number,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json(postList)
}
