import  MOCK_DATA from "../../mock-data.json"
import {productsActions} from './productsSlice';

export const getProductsFromBE = (dispatch) => {
  dispatch(productsActions.setProducts(MOCK_DATA));
}