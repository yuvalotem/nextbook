import { FC, createContext, useContext, PropsWithChildren } from "react"
import { useFetchData } from "../api"
import { User } from "../pages/api/user"

const UserContext = createContext<User | undefined>(undefined)

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const { data: user, error } = useFetchData<User>('/api/user')

    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext)