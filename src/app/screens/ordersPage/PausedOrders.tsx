import { TabPanel } from "@mui/lab";
import { Box, Button, Stack } from "@mui/material";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { Product } from "../../../lib/types/product";
import { sereverAPI } from "../../../lib/config";
import { Order, OrderItem } from "../../../lib/types/order";

/** REDUX SLICE & SELECTOR */
// @ts-ignore
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders }),
);

export default function PausedOrders() {
  const { pausedOrders } = useSelector(pausedOrdersRetriever);
  return (
    <TabPanel value="1">
      <Stack>
        {pausedOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id,
                  )[0];
                  const imagePath = `${sereverAPI}/${product.productImages[0]}`;
                  return (
                    <Box key={item._id} className={"orders-name-price"}>
                      <Box className="img-name">
                        <img
                          src={"/img/lavash.webp"}
                          className={"order-dish-img"}
                        />
                        <p className={"title-dish"}>{product.productName}</p>
                      </Box>
                      <Box className={"price-box"}>
                        <p>${item.itemPrice}</p>
                        <img src={"/icons/close.svg"} />
                        <p>{item.itemQuantity}</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.itemQuantity * item.itemPrice}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className="proceed">
                <Box className="calc">
                  <p className="pricing">Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>
                  <img src="/icons/plus.svg" alt="" />
                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img src="/icons/pause.svg" alt="" />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>

                <Button
                  className="order-btn"
                  color="secondary"
                  variant="contained"
                >
                  {" "}
                  CANCEL
                </Button>
                <Button
                  className="order-btn"
                  sx={{ background: "#70B45B", color: "white" }}
                >
                  PAYMENT
                </Button>
              </Box>
            </Box>
          );
        })}

        {!pausedOrders || (pausedOrders.length === 0  && (
            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
              <img 
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300}}
              />
            </Box>
        ))}
      </Stack>
    </TabPanel>
  );
}
