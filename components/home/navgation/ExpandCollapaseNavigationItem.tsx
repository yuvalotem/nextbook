import { SmallRoundedContainer } from "../../elements";
import { ExpandMore, ExpandLess } from "../../icons";
import { SetState } from "../../types/react";
import { NavigationItem } from "./NavigationItem";

type ExpandCollapaseNavigationItemProps = {
    expanded: boolean,
    setExpanded: SetState<boolean>
}

export const ExpandCollapaseNavigationItem = ({ expanded, setExpanded }: ExpandCollapaseNavigationItemProps) => {

    return <NavigationItem
        label={`See ${expanded ? 'less' : 'more'}`}
        onClick={() => setExpanded(!expanded)}
        icon={
            <SmallRoundedContainer>
                {expanded ?
                    <ExpandLess /> :
                    <ExpandMore />
                }
            </SmallRoundedContainer>
        } />
}