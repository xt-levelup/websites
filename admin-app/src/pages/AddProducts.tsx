import { FC } from "react";
import { Helmet } from "react-helmet";

const AddProducts: FC = () => {
  return (
    <div>
      <Helmet>
        <title>AddProducts</title>
      </Helmet>
      <div className="w-full border border-[3px] border-green-600">
        <form className="flex flex-col gap-[2em] rounded-[12px] shadow-md shadow-[6px_6px_6px_6px_rgba(0,0,0,0.2)] p-[1em] mx-auto w-[510px] my-[3em]">
          <div className="grid grid-cols-[72px_1fr] items-center gap-[1em] w-full">
            <label htmlFor="title">Title</label>
            <input
              className="px-[6px] h-[36px] rounded-[3px] border border-[1px] border-blue-300"
              type="text"
              id="title"
            />
          </div>
          <div className="grid grid-cols-[72px_1fr] items-center gap-[1em] w-full">
            <label>Price</label>
            <select className="px-[6px] h-[36px] w-full rounded-[3px] border border-[1px] border-blue-300">
              <option>Package</option>
              <option>Option</option>
            </select>
          </div>
          <div className="grid grid-cols-[72px_1fr] items-center gap-[1em] w-full">
            <label>Type</label>
            <select className="px-[6px] h-[36px] w-full rounded-[3px] border border-[1px] border-blue-300">
              <option>Coffee - Drinks</option>
              <option>Restaurant</option>
              <option>Resort - Hotel</option>
              <option>Company</option>
              <option>Sport</option>
            </select>
          </div>
          <div className="grid grid-cols-[72px_1fr] items-center gap-[1em] w-full">
            <label>Images</label>
            <input
              type="file"
              className="flex flex-row items-center px-[6px] h-[36px] rounded-[3px] "
            />
          </div>
          <div>
            <button className="shadow-md shadow-blue-900/80 p-[1em] rounded-[6px] bg-lime-900/80 text-white font-[600] italic">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
