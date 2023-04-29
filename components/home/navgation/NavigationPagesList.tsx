

import { useState } from "react";
import { useUserContext } from "../../../context";
import { MainAvatar } from "../../elements";
import { ExpandCollapaseNavigationItem } from "./ExpandCollapaseNavigationItem";
import { NavigationItem } from "./NavigationItem";
import { expandedNavBarItemProps, navBarItemProps } from "./NavigationItemProps";

export const NavigationPagesList = () => {
    const [expanded, setExpanded] = useState(false)
    const user = useUserContext()

    return (<>
        {user && <NavigationItem
            label={user.name}
            url={"/profile"}
            icon={<MainAvatar
                src={user?.imageUrl}
                alt={user?.name} />
            } />}
        {navBarItemProps.map(({ id, ...navigationItemProps }) =>
            <NavigationItem key={id} {...navigationItemProps} />
        )}
        {expanded && expandedNavBarItemProps.map(({ id, ...navigationItemProps }) =>
            <NavigationItem key={id} {...navigationItemProps} />
        )}
        <ExpandCollapaseNavigationItem expanded={expanded} setExpanded={setExpanded} />
    </>)
}