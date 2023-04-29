import { LegendToggle } from "@mui/icons-material"
import { Box } from "@mui/material"
import { useFetchData } from "../../../api"
import { BirthdayAccountsType } from "../../../pages/api/birthday-accounts"
import { TypographySubtitle1, TypographySmallText } from "../../elements"

export const BirthdaySection = () => {
    const { data: birthdayAccounts, error } = useFetchData<BirthdayAccountsType[]>('/api/birthday-accounts')

    let birthdaysText;
    switch (birthdayAccounts?.length) {
        case undefined:
            birthdaysText = ''
            break;
        case 1:
            birthdaysText = `${birthdayAccounts?.[0].name} have birthday today`
            break;
        case 2:
            birthdaysText = `${birthdayAccounts?.[0].name} and ${birthdayAccounts?.[1].name} have birthday today`
            break;
        default:
            birthdaysText = `${birthdayAccounts?.[0].name} and ${(birthdayAccounts as BirthdayAccountsType[]).length - 1} others have birthday today`
            break;
    }
    
    return <Box sx={{ mt: 2, mb: 2 }}>
        <TypographySubtitle1>Birthdays</TypographySubtitle1>
        <TypographySmallText>{birthdaysText}</TypographySmallText>
    </Box>
}