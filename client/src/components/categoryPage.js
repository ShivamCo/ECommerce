import { useEffect, useState } from "react"
import axios from "axios"
import { ProductCard } from "./productCard"

export const CategoryPage = (props) => {

    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {

        try {

            axios.get(`https://ecombackend-30ez.onrender.com/productFilter/${props.category}/0/200000/0`).then((response) => {
                
                setCategoryData(response.data)
            })
            

        } catch (error) {
            console.log(error)
        }


    }, [])


    return (
        <div className="w-full">
        
            {
                categoryData.map((i) =>

                    <ProductCard
                        title={i.title}
                        rating={i.rating}
                        price={i.price}
                        image={i.image}
                        id={i._id} />


                )}
        </div>
    )


}
