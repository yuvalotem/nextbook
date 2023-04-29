import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { useFetchData } from "../../../api"
import { AdType } from "../../../pages/api/ad-for-user"
import { TypographySmallText, TypographySubtitle1 } from "../../elements"
import { FlexRow } from "../../layout"

export const Ads = () => {
    const { data: adData, error } = useFetchData<AdType>('/api/ad-for-user')

    return <Box sx={{ width: "100%", height: "25%", p: "0.25rem" }}>
        <TypographySubtitle1>Sponsored</TypographySubtitle1>
        <FlexRow gap={2} pt={2}>
            <Image
                alt={adData?.text ?? ''}
                src={adData?.imageUrl ?? ''}
                width="69"
                height="69"
            />
        <TypographySmallText>{adData?.text}</TypographySmallText>
        </FlexRow>
    </Box >
}