import axios from 'axios'
import { AppThunk } from '../types/appThunk'
import { ProductActionTypes } from '../types/product'

export const fetchProducts = (): AppThunk => {
  return async dispatch => {
    dispatch({ type: ProductActionTypes.FETCH_REQUEST })
    try {
      const res = (await axios.get('http://localhost:5000/api/product')).data
      dispatch({
        type: ProductActionTypes.FETCH_SUCCESS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({ type: ProductActionTypes.FETCH_ERROR, payload: error })
    }
  }
}
