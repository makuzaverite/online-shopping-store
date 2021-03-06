/** @jsxImportSource @emotion/core */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core'
import React from 'react'
import { Isuggestions } from './SuggestionsList'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../store/actions/cartsActions'
import { useHistory } from 'react-router-dom'

interface ProductListProps {
  product: Isuggestions
}

export const ProductList: React.FC<ProductListProps> = ({
  product,
}): React.ReactElement => {
  const dispatch = useDispatch()

  const history = useHistory()

  const addToCart = (product: any) => {
    dispatch(addtoCart(product))
    history.push('/cart')
  }

  return (
    <div
      css={css`
        width: 500px;
        display: flex;
        gap: 1rem;
      `}
    >
      <img
        src={product.imageUrl}
        css={css`
          width: 200px;
        `}
        alt='productimage'
      />
      <div
        css={css`
          align-self: center;
        `}
      >
        <h4
          css={css`
            margin-bottom: 1rem;
            font-size: 1.2rem;
          `}
        >
          {product.name}
        </h4>
        <p
          css={css`
            margin-bottom: 1rem;
          `}
        >
          {product.description}
        </p>
        <p
          css={css`
            margin-bottom: 1rem;
          `}
        >
          Price ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          css={css`
            background-color: var(--dark-red);
            border: none;
            color: #fff;
            padding: 10px 20px;
            outline: none;
            cursor: pointer;
            width: 100%;
            border-radius: 0.5rem;
          `}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
export default ProductList
