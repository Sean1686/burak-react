import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider";
 
const activeUsers = [
    { memberNick: "Martin", imagePath: "/img/martin.webp" },
    { memberNick: "Justin", imagePath: "/img/justin.webp" },
    { memberNick: "Rose", imagePath: "/img/rose.webp" },
    { memberNick: "Martin", imagePath: "/img/nusret.webp" },
]

export default function ActiveUsers() {
    return( 
    <div className="active-user-frame">
        <Container>
            <Stack className="main">
                <Box className="category-text">Active User</Box>
                <Stack className="cards-frames">
                    <CssVarsProvider>
                        {activeUsers.length !== 0 ? (
                        activeUsers.map((ele, index) => {
                            return (
                                <Card key={index} variant="outlined" className={"cards"}>
                                        <AspectRatio ratio="1">
                                            <img src={ele.imagePath} alt="" />
                                        </AspectRatio>
                                        <Box className="user-detail">
                                            <Stack flexDirection={"row"}>
                                                <Typography className={"titles"}>
                                                    {ele.memberNick}
                                                </Typography>
                                            </Stack>
                                         </Box>
                                </Card>
                            )
                        }) 
                    ) : (
                            <Box className="no-data">New product are not available!</Box>
                        )}
                    </CssVarsProvider>
                </Stack>
            </Stack></Container>
    </div> )
}