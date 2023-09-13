import axios from "axios";
import { useCookies } from "react-cookie";
import { SingleProductPage } from "../pages/productPage.js";

export const ProductCard = (props) => {
    const [cookies, setCookies] = useCookies(["access_token"])

    const clickHandler = async (event) => {
        {!cookies.access_token 
        ? 
        window.location.replace('/auth') 
        :
        await axios.post("https://ecombackend-30ez.onrender.com/cart/add-to-cart", {"id": event.target.value, "user": localStorage.userID} )
        alert("Product Added To Cart")
        }
        

    }

    

    

    return (

        <div className=" drop-shadow-md bg-white border-2 border-green-800 border-opacity-30 pb-2 rounded-md" >
            <div>
                <img
                    className=" rounded-t-md drop-shadow-xl "
                    alt="product"
                    src={require("../images/products/"+props.image)} />
            </div>
            <div className="pt-4">

                <a
                href={`/product-detail/${props.title}`}
                value={props.title}
                    className=" pl-3 pr-3 font-semibold text-lg text-sky-600 body-font font-poppins "
                >{props.title}</a>

            </div>

            <div>
                <p
                    className=" text-slate-700 text-xs font-semibold pt-1 pl-4">

                    Rating: {props.rating}</p>

                <p
                    className=" text-slate-700 text-xl font-semibold pt-1 pl-4">

                    ₹ {props.price}</p>

            </div>

            <div
                className="pt-2 pl-2 pr-2" >
                <button
                    value={props.id}
                    onClick={clickHandler}
                    className=" font-semibold text-slate-700 w-full border-2 border-green-500 border-opacity-30 hover:bg-green-400 hover:text-white pl-3 pr-3 p-1 rounded-lg"
                >Add To Cart</button>
            </div>
        </div>


    )

}