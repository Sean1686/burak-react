import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";
import OrdersPage from ".";


const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrievePausedOrders = createSelector(
    selectOrdersPage,
    (ordersPage) => ordersPage.pausedOrders
);

export const retrieveProcessOrders = createSelector(
    selectOrdersPage,
    (ordersPage) => ordersPage.processOrders
);

export const retrieveFinishedOrders = createSelector(
    selectOrdersPage,
    (ordersPage) => ordersPage.finishedOrders
);