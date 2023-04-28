import { styled, Box } from "@mui/material";
import { APP_HEADER_HEIGHT } from "../../layout";

export const AllPostsContainer = styled(Box)(({ theme }) => ({
    height: `calc(100vh - ${APP_HEADER_HEIGHT})`,
    overflow: "hidden",
    overflowY: "scroll",
    "::-webkit-scrollbar":{
        display: "none"
      }
}))
