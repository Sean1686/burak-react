import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { sereverAPI } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR */
// @ts-ignore
 const topUsersRetriever = createSelector(retrieveTopUsers, (Users) => ({
 topUsers: Users
 }))

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);

  return (
    <div className="active-user-frame">
      <Container>
        <Stack className="main">
          <Box className="category-text">Active User</Box>
          <Stack className="cards-frames">
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((member: Member) => {
                  const imagePath = `${sereverAPI}/${member.memberImage}`;
                  return (
                    <Card
                      key={member._id}
                      variant="outlined"
                      className={"cards"}
                    >
                      <AspectRatio ratio="1">
                        <img src={imagePath} alt="" />
                      </AspectRatio>
                      <Box className="user-detail">
                        <Stack flexDirection={"row"}>
                          <Typography className={"titles"}>
                            {member.memberNick}
                          </Typography>
                        </Stack>
                      </Box>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No user found!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
