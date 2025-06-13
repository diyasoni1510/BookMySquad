import { GrLocation } from "react-icons/gr";
import { BsCurrencyRupee } from "react-icons/bs";
const VendorCard = ({
  image,
  rating,
  name,
  location,
  veg,
  plaleCost,
  boxCost,
}) => {
  return (
    <>
      <div className="border">
        <div className="bg-[#259D00] pt-1 relative">
          <img
            src={image}
            alt=""
            className=" h-64 object-cover w-full rounded-tl-[100px]"
          />
          <div className="top-0 left-1 absolute text-white font-semibold">
            {rating} ★
          </div>
        </div>
        <div className="p-3">
          <div className="flex justify-between items-center mb-3">
            <p className="dance">{name}</p>
            <div className="flex items-center gap-2">
              <GrLocation />
              <p>{location}</p>
            </div>
          </div>
          <p>{veg ? "Veg" : "Non veg"}</p>
          <p className="flex gap-1 items-center">
            <BsCurrencyRupee />
            <span className="text-xl font-semibold">{plaleCost} </span>
            Per Plate
          </p>
          <p>{boxCost} Per Box</p>
        </div>
      </div>
    </>
  );
};

export default VendorCard;
