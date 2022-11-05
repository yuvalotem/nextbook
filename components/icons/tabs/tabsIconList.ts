import { GameIcon } from "./GameIcon";
import { GroupsIcon } from "./GroupsIcon";
import { HomeIcon } from "./HomeIcon";
import { PlayIcon } from "./PlayIcon";
import { StoreIcon } from "./StoreIcon";

export const tabsIconList = [
    { Icon: HomeIcon, id: "0", tooltip: "Home", url: '/' },
    { Icon: PlayIcon, id: "1", tooltip: "Watch", url: '/watch' },
    { Icon: StoreIcon, id: "2", tooltip: "Marketplace", url: '/marketplace' },
    { Icon: GroupsIcon, id: "3", tooltip: "Groups", url: '/groups' },
    { Icon: GameIcon, id: "4", tooltip: "Gaming", url: '/gaming' }
]