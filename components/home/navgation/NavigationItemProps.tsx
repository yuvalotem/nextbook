import Image from "next/image"

const Icon = ({ backgroundPosition,
    backgroundImage = "url('https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/-X8a0rRe-Ig.png')",
    backgroundSize = "26px 558px"
}: {
    backgroundPosition: string,
    backgroundImage?: string
    backgroundSize?: string
    }) => (<i style={{
    backgroundPosition,
    backgroundImage,
    backgroundSize,
    width: "24px",
    height: "24px",
    backgroundRepeat: "no-repeat",
    display: "inline-block",
    aspectRatio: 0.3,
    padding: '34.37% 0 0 0'
}} />)


const IconImage = ({ src }: { src: string }) => (
    <Image
        draggable="false"
        height="24"
        width="24"
        alt=""
        referrerPolicy="origin-when-cross-origin"
        src={src}/>
)

export const navBarItemProps = [
    { id: "0", label: "Friends", url: '/friends', icon: <Icon backgroundPosition="0 -300px" /> },
    { id: "1", label: "Watch", url: '/watch', icon: <Icon backgroundPosition="0 -526px" /> },
    { id: "2", label: "Feeds", url: '/feeds', icon: <IconImage src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png" /> },
    { id: "3", label: "Groups", url: '/groups', icon: <Icon backgroundPosition="0 -67px" backgroundSize = "24px 480px" /> },
    { id: "4", label: "Marketplace", url: '/marketplace', icon: <Icon backgroundPosition="0 -418px" /> }
]

export const expandedNavBarItemProps = [
    { id: "5", label: "Ad center", url: '/ad-center', icon: <IconImage src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/_JPdPzLmp9j.png" /> },
    { id: "6", label: "Ads manager", url: '/ads-manager', icon: <IconImage src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/tx2VFwUKc-K.png" /> },
    { id: "7", label: "Blood donation", url: '/blood-donation', icon: <Icon backgroundImage="url('https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/mBH5oR81DT5.png'" backgroundPosition="-666px -131px" backgroundSize="860px 250px" /> },
    { id: "8", label: "Crisis response", url: '/crisis-response', icon: <IconImage src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/eChFgZ345zp.png" /> },
    { id: "9", label: "Events", url: '/events', icon: <Icon backgroundImage="url('https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/mruGO7HkgS-.png')" backgroundPosition="0 0px" backgroundSize="24px 24px" /> },
    { id: "10", label: "Gaming", url: '/gaming', icon: <Icon backgroundPosition="0 -40px" backgroundSize = "24px 500px" /> },

]
