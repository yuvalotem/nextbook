import { Typography } from "@mui/material"
import { Post } from "../../../pages/api/posts"
import { MainAvatar } from "../../elements"
import { FlexColumn, FlexRow } from "../../layout"
import { PostSubHeader } from "./PostSubHeader"

export const PostHeader = ({ account, date }: Pick<Post, 'account' | 'date'>) => {
    return <FlexRow width="fit-content" gap={1}>
        <MainAvatar
            src={account.imageUrl}
            alt={account.name} />
        <FlexColumn>
            <Typography sx={{ fontSize: "0.675rem" }} variant='subtitle1'>{account.name}</Typography>
            <PostSubHeader date={date} />
        </FlexColumn>
    </FlexRow >
}