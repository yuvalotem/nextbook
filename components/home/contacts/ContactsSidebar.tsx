import { Divider } from "@mui/material"
import { NavigationContainer } from "../navgation/NavigationContainer"
import { Ads } from "./Ads"
import { BirthdaySection } from "./BirthdaySection"
import { ContactList } from "./ContactList"

export const ContactsSidebar = () => {
    return <NavigationContainer>
            <Ads />
            <Divider />
            <BirthdaySection />
            <Divider />
            <ContactList />
    </NavigationContainer>
}