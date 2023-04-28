import { Divider, MenuList } from "@mui/material";
import { useFetchData } from "../../../api";
import { ShortcutsType } from "../../../pages/api/shortcuts";
import { NavigationContainer } from "./NavigationContainer";
import { NavigationPagesList } from "./navigationPagesList";
import { ShortcutsList } from "./ShortcutsList";

export const NavigationSideBar = () => {
    const { data: shortcuts, error } = useFetchData<ShortcutsType[]>('/api/shortcuts')

    return <NavigationContainer>
        <MenuList>
            <NavigationPagesList />
            <Divider />
            <ShortcutsList shortcuts={shortcuts} />
        </MenuList>
    </NavigationContainer>
}