import { Divider, MenuList } from "@mui/material";
import { NavigationContainer } from "./NavigationContainer";
import { NavigationPagesList } from "./navigationPagesList";
import { ShortcutsList } from "./ShortcutsList";

export const NavigationSideBar = () => {

    return <NavigationContainer>
        <MenuList>
            <NavigationPagesList />
            <Divider />
            <ShortcutsList />
        </MenuList>
    </NavigationContainer>
}