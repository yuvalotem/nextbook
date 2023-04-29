
import type { NextApiRequest, NextApiResponse } from 'next'
import { birthdayAccountsMock } from '../../mocks'

export type BirthdayAccountsType = {
    id:string,
    name:string,
}
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<BirthdayAccountsType>
) {
    res.status(200).json(birthdayAccountsMock)
}
