import React from 'react'
import useFetch from '.'

function UseFetchHookTest() {

    const {data, error, pending} = useFetch('https://dummyjson.com/products', {})

    console.log(error, data, pending);

  return (
    <div>
        <h1>UseFetchHookTest</h1>
        {
          error ? <h3>Error</h3> : null
        }
        {
            pending ? <h3>Pending</h3> : null
        }
        {
            data && data.products && data.products.length ?
            data.products.map(productItem => <p key={productItem.key}>{productItem.title}</p>) : null
        }
    </div>
  )
}

export default UseFetchHookTest