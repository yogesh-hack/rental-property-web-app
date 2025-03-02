//import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../stores/cartSlice';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarker,
  FaMoneyBill,
} from 'react-icons/fa';

const ProductList = (props) => {
  //const dispatch = useDispatch();
  //const [isAdding, setIsAdding] = useState(false);
  const { property } = props;  // Destructure the product prop

  // const addTocart = (event, product) => {
  //   dispatch(addToCart(product));
  //   setIsAdding(true);
  //   setTimeout(() => {
  //     setIsAdding(false);
  //   }, 2000);
  // };
  // const getRatesDisplay = () => { 
  //   //const {rates}=property;
  //   if(rates.monthly){
  //     return `${rates.monthly.toLocaleString()}/mo`
  //   }else if(rates.weekly){
    
  //       return `${rates.weekly.toLocaleString()}/wk`
     
  //   }else if(rates.nightly){
  
  //       return `${rates.nightly.toLocaleString()}/ng`
      
  //   }
  //  }
  return (
    <div className="rounded-xl shadow-md relative">
      <img
        src={property.imageurl}
        alt=""
        sizes="100vw"
        width={0}
        height={0}
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-[#0a8051] font-bold text-right md:text-center lg:text-right">
          {/* ${getRatesDisplay()} */}
        </h3>
        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline mr-2" /> {property.bedrooms}{" "}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline mr-2" /> {property.baths}{" "}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline mr-2" />
            {property.square_feet}{" "}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>
        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {property.nightly && (
            <p>
              <FaMoneyBill className="inline mr-2" /> {property.nightly}/Night
            </p>
          )}
          {property.weekly && (
            <p>
              <FaMoneyBill className="inline mr-2" /> {property.weekly}/Week
            </p>
          )}
          {property.monthly && (
            <p>
              <FaMoneyBill className="inline mr-2" />{property.monthly}/Month
            </p>
          )}
        </div>
        <div className="border border-gray-100 mb-5" />
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <i className="fa-solid fa-location-dot text-lg text-orange-700" />
            <span className="text-orange-700">
              {" "}
              {property.city} {property.state}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
