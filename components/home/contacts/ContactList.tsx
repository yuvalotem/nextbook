import { MenuList } from "@mui/material"
import { useFetchData } from "../../../api"
import { ContactsType } from "../../../pages/api/contacts"
import { NavigationItem } from "../navgation/NavigationItem"
import { AvatarWithBadge } from "./AvatarWithBadge"
import { ContactListHeader } from "./ContactListHeader"

export const ContactList = () => {
    const { data: contacts, error } = useFetchData<ContactsType[]>('/api/contacts')

    return <>
        <ContactListHeader />
        <MenuList>
            {contacts?.map(({ id, imageUrl, name, isLoggedIn }) =>
                <NavigationItem
                    key={id}
                    icon={
                        <AvatarWithBadge
                            src={imageUrl}
                            alt={name}
                            withBadge={isLoggedIn}
                        />
                    }
                    label={name}
                    sx={{ paddingLeft: "0.25rem" }}
                />)}
        </MenuList >
    </>
}

