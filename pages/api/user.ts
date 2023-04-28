import type { NextApiRequest, NextApiResponse } from 'next'
import { userDataMock } from '../../mocks'

export type User = {
  id: string,
  name: string,
  imageUrl: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json(userDataMock)
}
