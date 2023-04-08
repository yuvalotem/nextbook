import { Avatar, Typography } from "@mui/material"
import { Post } from "../../../pages/api/posts"
import { FlexColumn, FlexRow } from "../../layout"
import { PostSubHeader } from "./PostSubHeader"

export const PostHeader = ({ account, date }: Pick<Post, 'account' | 'date'>) => {
    return <FlexRow width="fit-content" gap={1}>
        <Avatar
            sx={{ width: "1.75rem", height: "1.75rem" }}
            src={account.imageUrl}
            alt={account.name} />
        <FlexColumn>
            <Typography sx={{ fontSize: "0.675rem" }} variant='subtitle1'>{account.name}</Typography>
            <PostSubHeader date={date} />
        </FlexColumn>
    </FlexRow >
}