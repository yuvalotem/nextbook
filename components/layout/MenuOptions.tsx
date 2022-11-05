import { styled, Box } from "@mui/material"
import { HeaderTooltip } from "../elements"
import { menuIconList } from "../icons"

const MenuOptionsContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',
})

const OptionsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%',
    padding: '0.325rem',
    background: theme.palette.grey[400],
    cursor: 'pointer',
}))
export const MenuOptions = () => {
    return (
        <MenuOptionsContainer>
            {menuIconList.map(({ Icon, id, tooltip }) => (
                <HeaderTooltip title={tooltip} key={id}>
                    <OptionsContainer ><Icon /></OptionsContainer>
                </HeaderTooltip >))}
        </MenuOptionsContainer>
    )
}