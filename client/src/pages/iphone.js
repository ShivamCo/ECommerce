import { CategoryPage } from "../components/categoryPage"
export const CategoryIphone = () => {

    return (
        <div>
        
            <h1
            className="m-4 text-2xl  border-2 border-sky-400 border-opacity-30 p-2 rounded-md bg-white bg-opacity-80 font-semibold text-sky-600 drop-shadow-lg"
            >Products From Iphone</h1>
            <div className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-4 lg:grid-cols-6 md:grid-cols-4 h-screen">

                <CategoryPage
                    category="Iphone"
                />

            </div>
        </div>
    )


}