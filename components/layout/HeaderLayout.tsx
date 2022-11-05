import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material';
import { FC, useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import { Tabs } from './Tabs';
import { LogoWithSearch } from './LogoWithSearch';
import { MenuOptions } from './MenuOptions';

const HeaderContainer = styled(Grid)(({ theme }) => ({
    width: '100%',
    height: '3.5rem',
    backgroundColor: theme.palette.common.white,
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0 2px 2px -2px rgba(0,0,0,.2)',
}));

export const HeaderLayout: FC<React.PropsWithChildren> = ({ children }) => {
    const [tab, setTab] = useState('0')

    return (
        <TabContext value={tab}>
            <HeaderContainer container>
                <Grid item xs={4}><LogoWithSearch /></Grid>
                <Grid item xs={6}><Tabs selectedTab={tab} setTab={setTab} /></Grid>
                <Grid item xs={2}><MenuOptions /></Grid>
            </HeaderContainer>
            {children}
        </TabContext>
    );
}
