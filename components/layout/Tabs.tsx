import { styled, Box } from "@mui/material"
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import { SetState } from '../types/react';
import { tabsIconList } from "../icons";
import { HeaderTooltip } from "../elements";
import { useRouter } from 'next/router'

const TabsContainer = styled(Box)({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
})

export type TabProps = {
    selectedTab: string,
    setTab: SetState<string>
}

const StyledTab = styled(Tab)<{ active: boolean }>(({ theme, active }) => ({
    borderRadius: '0.5rem',
    minHeight: 0,
    minWidth: 0,
    height: '3.5rem',
    "&:hover": {
        backgroundColor: theme.palette.grey[100]
    },
    "& .MuiSvgIcon-root": {
        color: active ? theme.palette.primary.main : undefined
    },
}))

export const Tabs = ({ selectedTab, setTab }: TabProps) => {
    const router = useRouter()

    const handleChange = (event: React.SyntheticEvent, selectedTabId: string) => {
        setTab(selectedTabId);
        const url = tabsIconList.find(tab => tab.id === selectedTabId)?.url
        url && router.push(url)
    };

    return (<TabsContainer>
        <TabList onChange={handleChange}>
            {tabsIconList.map(({ Icon, id, tooltip }) => (
                <HeaderTooltip key={id} title={tooltip}>
                    <StyledTab
                        label={<Icon />}
                        value={id}
                        active={selectedTab === id}
                    />
                </HeaderTooltip>
            ))}
        </TabList>
    </TabsContainer>)
}