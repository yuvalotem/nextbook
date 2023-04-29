


import { Button } from "@mui/material";
import { useState } from "react";
import { useFetchData } from "../../../api";
import { ShortcutsType } from "../../../pages/api/shortcuts";
import { FlexSpaceBetween } from "../../layout";
import { ExpandCollapaseNavigationItem } from "./ExpandCollapaseNavigationItem";
import { NavigationItem } from "./NavigationItem";
import Image from 'next/image';
import { TypographySubtitle1 } from "../../elements";

export const ShortcutsList = () => {
    const [expanded, setExpanded] = useState(false)
    const { data: shortcuts, error } = useFetchData<ShortcutsType[]>('/api/shortcuts')

    return (<>
        <FlexSpaceBetween pl={2}>
            <TypographySubtitle1>Your shortcuts</TypographySubtitle1>
            <Button variant="text"
                sx={{
                    width: "0.5rem",
                    height: "1rem",
                    fontSize: "0.5rem"
                }}
            >
                Edit
            </Button>
        </FlexSpaceBetween>
        {shortcuts?.filter(({ id }) => expanded ? true : Number(id) < 4).map(({ id, imageUrl, ...props }) => <NavigationItem
            key={id}
            icon={
                <Image src={imageUrl} alt="" width="24" height="24" style={{ borderRadius: "0.5rem" }} />
            }
            {...props}
        />)}
        <ExpandCollapaseNavigationItem expanded={expanded} setExpanded={setExpanded} />
    </>)
}