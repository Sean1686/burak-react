import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";

export default function FinishedOrders() {
  return (
    <TabPanel value="1">
      <Stack>
        {[1,2].map((ele, index) =>  {
            return (
              <Box className={"order-box-scroll"}>
                {[1,2,3].map((ele2, index2) => {
                  return (
                    <Box key={index2} className={"orders-name-price"}>
                      <img 
                      src={"/img/lavash.webp"}
                      className={"order-dish-img"} 
                      />
                      <p className={"title-dish"}>Lavash</p>
                      <Box>
                        <p>$9</p>
                        <img src={"/icons/close.svg"} />
                        <p>2</p>
                        <img src="/icons/pause.svg" />
                        <p style={{marginLeft: "15px"}}>$24</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            )
        })}
      </Stack>
    </TabPanel>
  )
}