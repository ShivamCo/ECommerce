import { useState } from "react"
import axios from "axios"

export const AddProduct = () => {


    const [input, setInput] = useState()

    const inputHandler = async (event) => {

        setInput({ ...input, [event.target.name]: event.target.value })

    }

    const onImageChange = (event) => {
         console.log(event.target.files[0])
    setInput({...input, image:event.target.files[0]})
    
} 


    const submitHandler = async (event) => {

        event.preventDefault()
        
        const formData = new FormData();

        formData.append("image", input.image, input.image.name);
        formData.append("title", input.title);
        formData.append("category", input.category);
        formData.append("description", input.description);
        formData.append("price", input.price);
        formData.append("rating", input.rating);

        console.log(formData)
        

        try {

            const response = await axios.post("https://ecombackend-30ez.onrender.com/product/upload", formData)
            alert(response.data.message)
            window.location.replace('/add-product')


        } catch (error) {

            alert("Error")

        }
    }



    return (

        <div className="h-screen bg-slate-300 flex justify-center">

            <div className="bg-slate-300 w-1/4 h-min m-5 flex justify-center">

                <form onSubmit={submitHandler} role="form" enctype="multipart/form-data" className="mt-5 p-3 rounded-lg border-2 border-sky-700 border-opacity-50 bg-white">
                    <h5 className="pl-2 text text-sky-600 font-semibold text-md " >Product Name</h5>

                    <input
                        onChange={inputHandler}
                        className="m-1 p-1 pr-16 pl-4 rounded-md border-2 border-sky-500 border-opacity-30"
                        name="title"
                        type="text"
                        placeholder="Product Name" ></input>


                    <h5 className="pl-2 text text-sky-600 font-semibold text-md " >Category</h5>

                    <input
                        onChange={inputHandler}
                        className="m-1 p-1 pr-16 pl-4 rounded-md border-2 border-sky-500 border-opacity-30"
                        name="category"
                        type="text"
                        placeholder="Category" ></input>

                    <h5 className="pl-2 text text-sky-600 font-semibold text-md " >Description</h5>

                    <textarea
                        onChange={inputHandler}
                        className="m-1 p-1 pr-24 pl-4 rounded-md border-2 border-sky-500 border-opacity-30"
                        name="description"
                        placeholder="Description" ></textarea>

                    <h5 className="pl-2 text text-sky-600 font-semibold text-md " >Price</h5>
                    <input
                        onChange={inputHandler}
                        min="0" max="10000000"
                        className="m-1 p-1 pl-4 rounded-md border-2 border-sky-500 border-opacity-30"
                        name="price"
                        type="number"
                        placeholder="Price" ></input>

                    <h5 className="pl-2 text text-sky-600 font-semibold text-md" >Rating</h5>
                     <input
                       onChange={inputHandler}
                        min="0" max="5"
                        className="m-1 p-1 pl-4 rounded-md border-2 border-sky-500 border-opacity-30"
                        name="rating"
                        type="number"
                        placeholder="Rating" ></input> 


                    
                    <h5 className="pl-2 pt-2 text text-sky-600 font-semibold text-md " >Product Image</h5>
                    
                    

                    <input onChange={onImageChange} type="file" name="image" className=" ml-1 mt-2 block w-full hover:cursor-pointer border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
                            file:bg-transparent file:border-0
                         file:bg-gray-100 file:mr-4
                            file:py-3 file:px-4
                         dark:file:bg-gray-700 dark:file:text-gray-400"></input>
                    <br></br>

                    <button
                        className=" w-full p-1 rounded-md bg-sky-400 hover:bg-sky-400 hover:bg-opacity-30 hover:text-slate-700 text-xl font-semibold text-white border-opacity-50"
                    >Add Product</button>

                </form>


            </div>

        </div>

    )




}