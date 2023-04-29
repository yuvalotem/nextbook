
import type { NextApiRequest, NextApiResponse } from 'next'
import { adMock } from '../../mocks'

export type AdType = {
    id: string,
    text: string,
    imageUrl?: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AdType>
) {
    res.status(200).json(adMock)
}
