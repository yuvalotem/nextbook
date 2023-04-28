import { Divider, MenuList } from "@mui/material"
import { NavigationContainer } from "../navgation/NavigationContainer"
import { Ads } from "./Ads"
import { ContactList } from "./ContactList"

export const ContactsSidebar = () => {
    return <NavigationContainer>
            <Ads />
            <Divider />
            <ContactList />
    </NavigationContainer>
}