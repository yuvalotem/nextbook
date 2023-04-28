

import { Avatar } from "@mui/material";
import { useState } from "react";
import { useFetchData } from "../../../api";
import { User } from "../../../pages/api/user";
import { ExpandCollapaseNavigationItem } from "./ExpandCollapaseNavigationItem";
import { NavigationItem } from "./NavigationItem";
import { expandedNavBarItemProps, navBarItemProps } from "./NavigationItemProps";

export const NavigationPagesList = () => {
    const [expanded, setExpanded] = useState(false)
    const { data: user, error } = useFetchData<User>('/api/user')

    return (<>
        {user && <NavigationItem
            label={user.name}
            url={"/profile"}
            icon={<Avatar
                sx={{ width: "1.75rem", height: "1.75rem" }}
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