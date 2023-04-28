import { Box, styled } from "@mui/material";
import { APP_HEADER_HEIGHT } from "../../layout";

export const NavigationContainer = styled(Box)({
    height: `calc(100vh - ${APP_HEADER_HEIGHT})`,
    overflow: 'auto',
    "::-webkit-scrollbar":{
        display: "none"
      }
})