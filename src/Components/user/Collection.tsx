import React from 'react'
import { ClothingCollectionModel } from '../../api/data-contracts'

export const Collection = ({collection}: {collection: ClothingCollectionModel}) => {
  return (
    <>
      {collection.name}
      {collection.description}
      {collection.products?.map(product => {
          return <>
              <span>{product.name}</span>
              <span>{product.description}</span>
          </>
      })}
    </>
  )
}
