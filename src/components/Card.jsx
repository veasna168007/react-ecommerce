// //====>7.Design Best Seller Section<=========
// function Card() {
//   return (
//     <div className="border border-gray-400 group">
//       <figure className="p-2 h-[160px] lg:h-[260px] overflow-hidden">
//         <img
//           className="w-full h-full object-cover group-hover:scale-110 transition-all"
//           src="https://images.pexels.com/photos/6827520/pexels-photo-6827520.jpeg"
//           alt=""
//         />
//       </figure>
//       <div className="px-2 py-2">
//         <h3 className="line-clamp-1">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat,
//           obcaecati excepturi dolor quibusdam incidunt placeat eius rerum in
//           distinctio?
//         </h3>
//         <p className="text-red-600">$19.99</p>
//       </div>
//     </div>
//   );
// }

// export default Card;

//====>12.Design Product Detail<=========
//ត្រូវប្តូវ <div> ទៅជា Link to=`/product/23` ដើម្បីអាចចូលទៅកាន់ទំព័រព័ត៌មានលំអិតនៃផលិតផលនីមួយៗបាន។
import { Link } from "react-router-dom";
function Card() {
  return (
    <Link to="/product/23" className="border border-gray-400 group">
      <figure className="p-2 h-[160px] lg:h-[260px] overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-all"
          src="https://images.pexels.com/photos/6827520/pexels-photo-6827520.jpeg"
          alt=""
        />
      </figure>
      <div className="px-2 py-2">
        <h3 className="line-clamp-1">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat, obcaecati excepturi dolor quibusdam incidunt placeat eius rerum in distinctio?
        </h3>
        <p className="text-red-600">$19.99</p>
      </div>
    </Link>
  );
}

export default Card;

//====>14. Fetch data from API<=========
import { Link } from "react-router-dom";
function Card(props) {
  // eslint-disable-next-line react/prop-types
  const {data} = props
  console.log(data)
  return (
    // eslint-disable-next-line react/prop-types
    <Link to={`/product/${data.id}`} className="border border-gray-400 group">
      <figure className="p-2 h-[160px] lg:h-[260px] overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-all"
          // eslint-disable-next-line react/prop-types
          src={data.image}
          alt=""
        />
      </figure>
      <div className="px-2 py-2">
        <h3 className="line-clamp-1">
           {data.title}
        </h3>
        <p className="text-red-600">${data.price}</p>
      </div>
    </Link>
  );
}

export default Card;
