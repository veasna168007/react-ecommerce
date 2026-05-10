//====>12 & 13. Design Product Detail<========
import { Link, useParams } from "react-router-dom";
function ProductDetail() {
  return (
    <>
      <div>
        <div className="bg-gray-100 w-full py-2 font-jost">
          <div className="max-w-[90%] lg:max-w-5xl mx-auto flex items-center gap-1 text-sm">
            <Link to="/">Home</Link>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></span>
        
            <Link to="/products">Product</Link>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></span>
              
            <span className="font-semibold">sdsd</span>
          </div>
        </div>

        <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto font-jost">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
            <div className="p-1 border border-gray-300">
              <img className="w-full h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MVUB4Uck5xEjRfG8Oz_1ZqnnydazM066Ag&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MVUB4Uck5xEjRfG8Oz_1ZqnnydazM066Ag&shttps://giiera.com/wp-content/uploads/2025/01/Bag-1.jpg"
                alt=""
              />
            </div>

            <div>
              <h3 className="text-lg uppercase ">Men's Cloth</h3>
              <h1 className="text-3xl font-bold">Mens Cotton</h1>
              <h1 className="text-2xl font-bold text-red-500 mt-2">$55.99</h1>

              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 my-8">
                <div className="border border-gray-300 w-32 py-2 flex  items-center justify-evenly">
                  <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg></button>
                  <button>1</button>
                  <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg></button>
                </div>

                <button className="bg-primary px-8  py-2 text-white">
                  Add to cart
                </button>
                <button className="bg-yellow-600 px-8 py-2 text-white hover:bg-yellow-500">
                  Pay now
                </button>
              </div>

              <hr />

              <p className="mt-4 text-gray-500"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim consequuntur in maxime laboriosam aliquam error maiores qui nisi itaque iure? Debitis dolor tenetur laboriosam cupiditate laborum sed doloremque enim fuga? Repudiandae sed cumque sapiente voluptas cupiditate, hic dolorum praesentium! ipsum dolor sit amet consectetur adipisicing elit. Modi ipsum eum minima eveniet eos blanditiis, voluptate non eaque sit facere magni aspernatur ipsam fugiat excepturi voluptatibus? Maxime ipsa praesentium nulla magni assumenda similique, non, voluptate fugit repellat voluptatum aut, excepturi inventore sint veniam ad. Ex explicabo ratione quibusdam corrupti sequi?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

// //====>14.Fetch data from API<========
// import { Link, useParams } from "react-router-dom";
// import useGetOneProduct from "../hooks/useGetOneProduct";
// function ProductDetail() {
//   const route = useParams();
//   const { data, isLoading } = useGetOneProduct(route.id);
//   return (
//     <>
//       {isLoading == true && (
//         <div className="flex items-center justify-center my-10">
//           <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-t-gray-600"></div>
//         </div>
//       )}
//       {isLoading == false && (
//         <div>
//           <div className="bg-gray-100 w-full py-2 font-jost">
//             <div className="max-w-[90%] lg:max-w-5xl mx-auto flex items-center gap-1 text-sm">
//               <Link to="/">Home</Link>
//               <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></span>

//               <Link to="/products">Product</Link>
//               <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"> <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /> </svg> </span>

//               <span className="font-semibold">{data.title}</span>
//             </div>
//           </div>

//           <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto font-jost">
//             <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
//               <div className="p-1 border border-gray-300">
//                 <img className="w-full h-full object-cover" src={data.image} alt="" /></div>
//               <div>
//                 <h3 className="text-lg uppercase ">{data.category}</h3>
//                 <h1 className="text-3xl font-bold">{data.title}</h1>
//                 <h1 className="text-2xl font-bold text-red-500 mt-2">{data.price}$</h1>

//                 <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 my-8">
//                   <div className="border border-gray-300 w-32 py-2 flex  items-center justify-evenly">
//                     <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg></button>
//                     <button>1</button>
//                     <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg></button>
//                   </div>
//                   <button className="bg-primary px-8  py-2 text-white">Add to cart</button>
//                   <button className="bg-yellow-600 px-8 py-2 text-white hover:bg-yellow-500">Pay now</button>
//                 </div>
//                 <hr />

//                 <p className="mt-4 text-gray-500">{data.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default ProductDetail;
