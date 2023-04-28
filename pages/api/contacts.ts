
import type { NextApiRequest, NextApiResponse } from 'next'
import { contactListMock } from '../../mocks'

export type ContactsType = {
    id: string,
    name: string,
    imageUrl?: string,
    isLoggedIn: boolean
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ContactsType[]>
) {
    res.status(200).json(contactListMock)
}
