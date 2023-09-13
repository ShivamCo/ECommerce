export const CategoryCard = (props) => {
    return (
        <div className="  flex flex-col-2 items-center bg-white gap-4  border-2 rounded-xl drop-shadow-md border-red-400 border-opacity-30">
            <div className="">
                <img className="rounded-l-xl  drop-shadow-xl sm:h-44 h-28 " src={props.image} />
            </div>

            <div className=" mb-1 items-center ">
                <div>
                    <h3 className=" font-semibold text-sky-500 text-xl sm:text-2xl ">{props.category}</h3>
                </div>

                <p className=" font-medium text-slate-600  " >
                    {props.description}
                </p>

                <div className=" border-2 border-sky-500 hover:bg-sky-400 hover:text-white border-opacity-25 w-fit mt-2 pl-2 pr-2 p-1 rounded-md font-semibold text-slate-600 " >
                    <a href={"/" + props.url} >See Offers</a>
                </div>
            </div>
        </div>
    )
}


