import { ListItemIcon, ListItemText, MenuItem, MenuItemProps, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { useCallback } from "react"

export type NavigationItemProps = {
    label: string,
    icon: JSX.Element,
    url?: string,
    onClick?: () => void
    sx?: MenuItemProps['sx']
}
export const NavigationItem = ({ label, icon, url, onClick, sx }: NavigationItemProps) => {
    const router = useRouter()

    const handleClick = useCallback(() => {
        onClick?.()
        url && router.push(url)
    }, [onClick, url, router])

    return (
        <MenuItem sx={{ height: "2.125rem", borderRadius: "8px", ...sx }} onClick={handleClick}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <Typography variant="h1" sx={{ fontSize: "0.625rem" }}>{label}</Typography>
        </MenuItem>
    )
}