import { styled, Box } from "@mui/material"
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import { SetState } from '../types/react';
import { tabsIconList } from "../icons";
import { HeaderTooltip } from "../elements";
import { useRouter } from 'next/router'
import { APP_HEADER_HEIGHT } from "./HeaderLayout";

const TabsContainer = styled(Box)({
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
})

export type TabProps = {
    selectedTab: string,
    setTab: SetState<string>
}

const StyledTab = styled(Tab)<{ active: boolean }>(({ theme, active }) => ({
    borderRadius: active ? "0px" : '0.5rem',
    minHeight: 0,
    minWidth: 0,
    marginTop: active ? "0.25rem" : "0.5rem",
    height: active ? APP_HEADER_HEIGHT : `calc(${APP_HEADER_HEIGHT} - 0.5rem)`,
    width: "20%",
    borderBottom: active ? `2.5px solid ${theme.palette.primary.main}` : undefined,
    "&:hover": {
        backgroundColor: !active ? theme.palette.grey[100] : undefined
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
        <TabList onChange={handleChange} sx={{ width: "90%" }}>
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