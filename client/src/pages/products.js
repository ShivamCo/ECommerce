import { ProductCard } from "../components/productCard"
import { CategoryCard } from "../components/categoryCard"
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
// import x from "../images/products/"


export const ProductPage =  () => {
    
    const [input, setInput] = useState({
        category: "All",
        lprice:0,
        hprice:200000,
        rating:0

    })

    const [productData, setProductData] = useState([])
    

    

    const inputHandler = (event) => {

        setInput({ ...input, [event.target.name]: event.target.value })
        
    }

    useEffect( ()=>{
        try {
            

             axios.get(`https://ecombackend-30ez.onrender.com/productFilter/${input.category}/${input.lprice}/${input.hprice}/${input.rating}`).then((response) => {
                setProductData(response.data)
           

            })



        } catch (error) {
            console.log(error)
        }
    },[input])

   
 
    
    

    return (
        //body
        <div className=" bg-slate-200 h-screen ">

            <div className=" grid justify-center ">
                <form
                    
                    className=" bg-sky-600 bg-opacity-10 m-5 p-3 grid sm:grid-cols-4 grid-cols-1 rounded-xl border-2 border-opacity-10 border-sky-800 ">
                    
                    <div className=" w-full " >
                    <label className=" text-lg p-2 text-slate-700 drop-shadow-sm font-semibold " for="category">Category</label>
                    <select
                        onChange={inputHandler}
                        className=" w-full  border-2 p-1 pl-2 pr-3 rounded-lg border-sky-500 border-opacity-30"
                        name="category">
                        <option selected value="All">All</option>
                        <option value="Iphone">Iphone</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Boat">Boat</option>
                        <option value="Vivo">Vivo</option>
                    </select>
                    </div>

                    <div>
                    <label className=" w-full  p-2 text-lg  text-slate-700 drop-shadow-sm font-semibold " for="category">Min Price</label>
                    <select
                        onChange={inputHandler}
                        className=" w-full  border-2 p-1 pl-3 pr-3 rounded-lg border-sky-500 border-opacity-30"
                        name="lprice">
                        <option selected value="0">0</option>
                        <option value="5000">5000</option>
                        <option value="10000">10000</option>
                        <option value="15000">15000</option>
                        <option value="20000">20000</option>
                    </select>
                    </div>

                    <div>
                    <label className=" p-2 text-lg  text-slate-700 drop-shadow-sm font-semibold " for="category">Max Price</label>
                    <select
                        
                        onChange={inputHandler}
                        className=" w-full  border-2 p-1 pl-3 pr-3 rounded-lg border-sky-500 border-opacity-30"
                        name="hprice">
                        <option value="5000">5,000</option>
                        <option value="10000">10,000</option>
                        <option value="15000">15,000</option>
                        <option value="20000">20,000</option>
                        <option selected value="200000">200,000</option>
                    </select>
                    </div>

                    <div>
                    <label className=" p-2 text-lg  text-slate-700 drop-shadow-sm font-semibold " for="category">Rating</label>
                    <select
                        onChange={inputHandler}
                        className=" w-full  border-2 p-1 pl-3 pr-3 rounded-lg border-sky-500 border-opacity-30"
                        name="rating">
                        <option selected value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </div>
                    
                    
                </form>

            </div>

            {/* Product Grid */}
            <div
                className="grid 
                grid-cols-2 gap-4 p-5
             sm:grid-cols-4 
             lg:grid-cols-6 
             md:grid-cols-4">


                {
                    productData.map((i) =>
                    
                    <ProductCard 
                    key={i._id}
                    title= {i.title }
                    rating= {i.rating}
                    price={i.price}
                    image= {i.image}
                    id={i._id}
                    />
                    
                    
                    )}



            </div>                                                      

        </div>
        

    )


}