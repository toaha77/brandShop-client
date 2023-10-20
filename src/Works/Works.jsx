import { AiOutlineSearch } from "react-icons/ai";
import { TbBrandBooking } from "react-icons/tb";
import { MdPayment} from 'react-icons/md'
const Works = () => {
  return (
    <div className="mt-4">
      <div className="mb-4 text-center">
        <h2 className="text-4xl">How it Works</h2>
        <p className="text-blue-500 uppercase">make it happens in 3 steps</p>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     <div className="card   bg-base-200">
        <figure className="px-10 pt-10">
          <AiOutlineSearch className="text-6xl bg-white p-2 rounded-full"></AiOutlineSearch>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">01. Select your car</h2>
          <p>Select your car, choose your location, time and pick it up</p>
        </div>
      </div>
      <div className="card  bg-base-200">
        <figure className="px-10 pt-10">
          <TbBrandBooking className="text-6xl bg-white p-2 rounded-full"></TbBrandBooking>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">02. Define your booking</h2>
          <p>Fill your information into the form and go to next step</p>
        </div>
      </div>
      <div className="card  bg-base-200">
        <figure className="px-10 pt-10">
          <MdPayment className="text-6xl bg-white p-2 rounded-full"></MdPayment>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">03. Payment</h2>
          <p>Select your payment, click ok and It’s all done for youp</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Works;
