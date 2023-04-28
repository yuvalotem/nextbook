import type { NextApiRequest, NextApiResponse } from 'next'
import { shortcutsMock } from '../../mocks'

export type ShortcutsType = {
    label: string,
    imageUrl: string,
    id: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ShortcutsType[]>
) {
    res.status(200).json(shortcutsMock)
}
