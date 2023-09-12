
import { useCookies } from "react-cookie";

export const NavigationBar = () => {

    const [cookies, setCookies] = useCookies(["access_token"])

    const logout = () => {

        setCookies("access_token", "");
        window.localStorage.removeItem("userID")
        window.location.replace('/')

    }




    return (
        <nav class=" items-center drop-shadow-md bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div class=" items-center max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
                <a href="/" className="flex items-center" >
                    <img className="h-10" src={require("../images/favicon.png")} />
                    <span className=" pl-3 font-poppins text-sky-500 self-center text-xl font-semibold whitespace-nowrap dark:text-white">e-Commerce</span>
                </a>

                <div class=" items-center hidden  w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul class=" items-center flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className=" text-lg font-semibold block py-2 pl-3 pr-4 text-white bg-sky-400 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                        </li>

                        <li>
                            <a href="/products" className=" text-lg font-semibold block py-2 pl-3 pr-4 text-white bg-sky-400 rounded md:bg-transparent md:text-slate-600 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Products</a>
                        </li>

                        <li >
                            <div className="flex w-full cursor-pointer">
                                <img
                                    className="h-5 pr-2 mt-1  "
                                    alt="cart"
                                    src={require("../images/cart.png")} />
                                <a href="/cart" className=" text-lg font-semibold  py-2 pl-3 pr-4 text-slate-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Cart
                                </a>
                            </div>
                        </li>


                        {!cookies.access_token ?

                        <></> :
                        <li>
                            <a href="/add-product" className=" text-lg font-semibold  block py-2 pl-3 pr-4 text-slate-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Product</a>
                        </li>}


                        {!cookies.access_token
                            ? <a
                                href="/auth"
                                className=" cursor-pointer items-center flex border-2 border-sky-600  border-opacity-40 hover:bg-sky-800 hover:bg-opacity-60 text-sky-500 hover:text-white p-1 pr-2 pl-2 rounded-md" onClick={logout}>
                                <p className="h-8 w-8"> <img src={require("../images/dp.png")} alt="dp" /></p>

                                <p className="pl-3 " >Login</p>
                            </a>

                            :


                            <div onclick={logout} className="flex cursor-pointer items-center hover:bg-red-800 text-red-400 hover:bg-opacity-90 hover:text-white border-2 p-1 pr-2 pl-2 rounded-md" onClick={logout}>

                                <a className="h-8 w-8"> <img src={require("../images/dp.png")} alt="dp" /></a>

                                <button className="pl-3 " >Logout</button>

                            </div>
                        }



                    </ul>

                </div>
            </div>



        </nav>

    )


}