import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";

const selectProductsPage = (state: AppRootState) => state.productsPage;

export const retrieveRestaurant = createSelector(
    selectProductsPage,
    (productsPage) => productsPage.restaurant
);

export const retrieveChosenPorduct = createSelector(
    selectProductsPage,
    (productsPage) => productsPage.chosenProduct
);

export const retrieveProducts = createSelector(
    selectProductsPage,
    (productsPage) => productsPage.products
);