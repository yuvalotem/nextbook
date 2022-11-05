import { Box, styled } from "@mui/material"
import Logo from '../../public/Logo.svg';
import Image from 'next/image';
import { SearchInput } from "../elements";

const LogoWithSearchContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center'
})

export const LogoWithSearch = () => {
    return (
        <LogoWithSearchContainer>
            <Image src={Logo} alt='logo' />
            <SearchInput />
        </LogoWithSearchContainer>
    )
}