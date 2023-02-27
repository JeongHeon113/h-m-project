import React from 'react'
import { useEffect,useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
const AllProducts = () => {
    const navigate = useNavigate()
    const [query,setQuery]=useSearchParams()
    const [products,setProducts] = useState([])
    const showDetail=(product)=>{
        navigate(`/product/${product.id}`)
    }
    const getProducts =async()=>{
        let searchQuery =query.get('q')||""
        let url =`https://my-json-server.typicode.com/Jeongheon113/h-m-project/products?q=${searchQuery}`
        let response= await fetch(url)
        let data = await response.json()
        setProducts(data)
    }
    useEffect(() => {
    getProducts()
    }, [query])
  return (
    <Row>
        {products.map((product)=>{
            return (
                <Col className='product-card' xs={6} lg={3}>
                    <img onClick={()=>showDetail(product)} src={product?.img}/>
                    <div>{product?.title}</div>
                    <div className='wrapper'>
                        <div className='currency'>￦{product?.price}</div>
                    </div>
                    <div>{product?.new==true?'신제품':""}</div>
                </Col>
            )
        })}
    </Row>
  )
}

export default AllProducts