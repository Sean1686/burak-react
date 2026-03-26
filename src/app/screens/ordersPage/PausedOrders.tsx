import { TabPanel } from "@mui/lab";
import { Box, Button, Stack } from "@mui/material";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { Product } from "../../../lib/types/product";
import { Messages, sereverAPI } from "../../../lib/config";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
import { useGlobals } from "../../hooks/useGlobal";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { T } from "../../../lib/types/common";

/** REDUX SLICE & SELECTOR */
// @ts-ignore
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders }),
);

interface PausedOrders {
  setValue: (input: string) => void
}

  export default function PausedOrders(props: PausedOrders)  {
  const {setValue} = props
  const { pausedOrders } = useSelector(pausedOrdersRetriever);
   const {authMember, setOrderBuilder} = useGlobals();
  const deleteOrderHandler = async (e: T) => {
    try {
      if(!authMember) throw new Error(Messages.error2);
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.DELETE
      };

      const confirmation = window.confirm("Do you want to delete the order");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);

        setOrderBuilder(new Date());
      }
    } catch (error) {
      console.log(error);
      sweetErrorHandling(error).then();
    }
  }

  const processOrderHandler = async (e: T) => {
    try {
      if(!authMember) throw new Error(Messages.error2);
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.PROCESS
      };

      const confirmation = window.confirm("Do you want to proceed with payment");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);

        setValue('2');
        setOrderBuilder(new Date());
      }
    } catch (error) {
      console.log(error);
      sweetErrorHandling(error).then();
    }
  } 
  return (
    <TabPanel value="1">
      <Stack>
        {pausedOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {order?.orderItems?.map((item: OrderItem) => {
                  const product = order.productData.find(
                (ele: Product) => item.productId === ele._id
                );

                 if (!product) return null;

                const imagePath = `${sereverAPI}/${product.productImages[0]}`;

                  // const product: Product = order.productData.filter(
                  //   (ele: Product) => item.productId === ele._id
                  // )
                  // const imagePath = `${serverApi}/${product.productImages[0]}`
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
                 value={order._id}  
                 onClick={deleteOrderHandler} 
                 className="order-btn" color="secondary" 
                 variant="contained"
                 >
                  CANCEL
                </Button>
               <Button 
               onClick={processOrderHandler} 
               value={order._id} 
               className="order-btn" 
               sx={{background:'#70B45B', 
               color:'white'}}
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
