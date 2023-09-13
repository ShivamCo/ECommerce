import { useCookies } from "react-cookie";
import axios from "axios";
import { useEffect, useState } from "react";


export const CartPage = () => {

    const [cartList, setCartList] = useState()
    const [cookies, setCookies] = useCookies(["access_token"])




    useEffect(() => {
        if (!localStorage.getItem("userID")) {
            window.location.replace('/auth')


        } else {
            try {
                axios.get(`https://ecombackend-30ez.onrender.com/cart/cart-list/${localStorage.userID}`).then((response) => {
                    setCartList(response.data)



                })

            } catch (error) {
                console.log(error)
            }
        }



    }, [cartList])





    const removeClickHandler = async (event) => {
        console.log(event.target.value)
        try {

            await axios.post(`https://ecombackend-30ez.onrender.com/cart/remove-cart/${event.target.name}/${event.target.value}`).then((response) => {
                alert(response.data.message)
            })

        } catch (error) {
            console.log(error)
        }
    }





    return (



        <div className="h-screen  grid sm:grid-cols-2 grid-cols-1  m-5">
            <div className="border-2 border-sky-500  border-opacity-30 bg-white rounded-2xl h-min">

                {cartList?.map((i) =>




                    <div key={i._id} className="flex border-2 rounded-md items-center drop-shadow-sm m-2 ">
                        <div className=" w-2/6 sm:w-1/6  p-2">
                            <img
                                className="object-cover"
                                src={require(`../images/products/${i.image}`)} />


                        </div>
                        <div className=" ">
                            <h3 className=" text-sky-600 font-semibold text-2xl " >{i.title}</h3>

                            <h4 className=" text-sky-950 font-semibold " >₹ {i.price}</h4>
                        </div>


                        <button
                            value={localStorage.userID}

                            name={i._id}
                            onClick={removeClickHandler}
                            className="flex-auto pl-10 text-right pr-6 text-red-400" >Remove</button>

                    </div>



                )}


            </div>
            <div>
                2
            </div>
        </div>



    )
}



