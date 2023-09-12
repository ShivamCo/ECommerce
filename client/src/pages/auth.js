import { useState } from "react";
import axios from "axios";
import  { useCookies } from "react-cookie"



export const AuthUser = () => {

    const [_, setCookies] = useCookies(["access_token"])
    const [input, setInput] = useState({
        username: "",
        password: "",
        email: ""
    })

    console.log(input)

    const handleInput = (event) => {

        setInput({ ...input, [event.target.name]: event.target.value })
        
    }

    const registerHandler = async (event) => {
        event.preventDefault()

        try {

            const response = await axios.post("http://localhost:5001/auth/register", input)
            alert(response.data.message)
            window.location.replace('/auth')
            

        } catch (error){

            console.log(error)
        }


    }


    const loginHandler = async (event) => {
        event.preventDefault()

        


        try {

            const response = await axios.post("http://localhost:5001/auth/login", input)

            if (response.data.message === "You Are Not Registered") {
                alert("You Are Not Registered")
                window.location.replace('/auth')
            } 
            
            if (response.data.message === "Email or Password is Wrong!" ) {
                alert("Email or Password is Wrong!")
                window.location.replace('/auth')
            
            } else {
            
            alert(response.data.message)
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            window.location.replace('/')

            } 
            
        } catch (error){

            alert(error)
        }

    }

   

    return (
        <div className=" h-screen bg-slate-200 ">
            <div className=" items-center flex-col sm:justify-center sm:flex-row flex  bg-slate-90">
                <form
                    onSubmit={loginHandler}
                    className=" w-min h-min m-5 rounded-xl bg-white p-5 border-2 border-opacity-40 border-sky-600">
                    <h2
                        className=" drop-shadow-sm text-sky-500 text-2xl p-2 font-semibold"
                    >Login</h2>

                    <input
                    autocomplete="off" 
                        required
                        name="email"
                        type="email"
                        onChange={handleInput}
                        className=" mt-5 drop-shadow-sm rounded-md m-1 border-opacity-60 pr-16 p-1 border-2 border-sky-300"
                        placeholder="Email">
                    </input>

                    <br />

                    <input
                        required
                        type="password"
                        name="password"
                        onChange={handleInput}
                        className=" mt-2  drop-shadow-sm rounded-md m-1 border-opacity-60 pr-16 p-1 border-2 border-sky-300"
                        placeholder="Password">
                    </input>

                    <br />

                    <button

                        className=" mt-7 m-1 bg-blue-600 text-slate-100 font-semibold hover:bg-sky-300  hover:text-white rounded-md border-opacity-40  p-1 pr-4 pl-4 border-2 border-sky-500"
                    >Login
                    </button>


                </form>



                <form
                    onSubmit={registerHandler}
                    className=" w-min  h-min m-5 rounded-xl bg-white p-5 border-2 border-opacity-40 border-cyan-500">

                    <h2

                        className="  drop-shadow-sm text-cyan-500 text-2xl p-2 font-semibold"
                    >Register
                    </h2>

                    <input
                        required
                        name="username"
                        autocomplete="off" 

                        onChange={handleInput}
                        className=" pr-16 drop-shadow-sm rounded-md m-1 border-opacity-60 p-1 border-2 border-sky-300"
                        placeholder="Name">
                    </input>

                    <br />

                    <input
                        required
                        autocomplete="off" 
                        name="email"
                        type="email"
                        onChange={handleInput}
                        className=" pr-16 drop-shadow-sm rounded-md m-1 border-opacity-60 p-1 border-2 border-sky-300"
                        placeholder="Email">
                    </input>

                    <br />

                    <input
                        required
                        name="password"
                        type="password"
                        onChange={handleInput}
                        className=" pr-16 drop-shadow-sm rounded-md m-1 border-opacity-60 p-1 border-2 border-sky-300"
                        placeholder="Password">
                    </input>

                    <br />

                    <button

                        className=" bg-blue-600 text-slate-100 m-1 mt-1 font-semibold hover:bg-sky-300 hover:text-white rounded-md border-opacity-40  p-1 pr-4 pl-4 border-2 border-sky-500"
                    >Register</button>

                </form>



            </div>
        </div>

    )
}