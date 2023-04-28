import { styled, Box } from "@mui/material"
import { HeaderTooltip, RoundedContainer } from "../elements"
import { menuIconList } from "../icons"

const MenuOptionsContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',
})

export const MenuOptions = () => {
    return (
        <MenuOptionsContainer>
            {menuIconList.map(({ Icon, id, tooltip }) => (
                <HeaderTooltip title={tooltip} key={id}>
                    <RoundedContainer><Icon /></RoundedContainer>
                </HeaderTooltip >))}
        </MenuOptionsContainer>
    )
}