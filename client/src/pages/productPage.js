import { useEffect, useState } from "react"
import axios from "axios"
import { useCookies } from "react-cookie"
import { useParams } from "react-router-dom"

export const SingleProductPage = () => {

    const [productDetails, setProductDetails] = useState()

    const [cookies, setCookies] = useCookies(["access_token"])

    const { title } = useParams()
    console.log(title)

    const clickHandler = async (event) => {
        {!cookies.access_token 
        ? 
        window.location.replace('/auth') 
        :
        await axios.post("http://localhost:5001/cart/add-to-cart", {"id": event.target.value, "user": localStorage.getItem('userID')} )
        alert("Product Added To Cart")
        }
        

    }

    useEffect(() => {

        try {

            axios.get(`http://localhost:5001/details/singleProduct/${title}`).then((response) => {
                setProductDetails(response.data)

            })

        } catch (error) {

            console.log(error)
        }


    }, [productDetails])








    return (

        <div className=" h-screen ">
            { !productDetails ? <> </> : <div 
            className=" content-center bg-white m-5 border-2 rounded-lg border-opacity-30 border-red-400 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center" >
                <div>
                    <div>
                        <img 
                        className=" p-2 rounded-t-lg sm:rounded-l-lg "
                        src={require(`../images/products/${productDetails.image}`)} />
                    </div>

                </div>

                <div className=" grid content-center  align-middle p-2  ">
                    <h2 
                    className=" underline m-1drop-shadow-md text-sky-600 text-2xl font-semibold "
                    >{productDetails.title}</h2>
                    <div>
                        <p className=" font-semibold text-yellow-600 pt-2">
                            Rating: {productDetails.rating}
                        </p>
                        <p className="pt-1 flex">
                            <p className=" text-lg font-semibold text-yellow-600 pr-3">Price:</p> 
                            <p className=" text-lg font-semibold text-slate-600 pr-3">₹ {productDetails.price}</p>
                        </p>

                        <p className=" pt-2 pb-2 underline text-slate-600 font-semibold text-lg " >
                           Product Details
                            <br></br>
                        </p>
                        <p className="  text-slate-600 " >
                            { productDetails.description
 }
                        </p>
                    </div>
                    <button
                    onClick={clickHandler}
                    className=" hover:drop-shadow-md sm:hover:bg-sky-400 hover:bg-sky-400 hover:text-white font-semibold text-slate-600 border-sky-400 border-opacity-30 pl-3 pr-3 rounded-md border-2 p-1 mt-4"
                    value={productDetails._id}
                    >Add To Cart</button>
                </div>

            </div>}



        </div>

    )


}