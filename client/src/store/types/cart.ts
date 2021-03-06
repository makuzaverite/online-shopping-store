import { Product } from './product'

export interface Cart {
  id: number
  items: Product[]
}
export enum cartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  INCREMENT_QUANTITY = 'INCREMENT_QUANTITY',
  DECREMENT_QUANTITY = 'DECREMENT_QUANTITY',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  FETCH_CART_REQUEST = 'FETCH_CART_REQUEST',
  FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESs',
  FETCH_CART_ERROR = 'FETCH_CART_ERROR',
}

export interface cartStateType {
  readonly loading: boolean
  readonly data: Cart
  readonly errors: string
}
