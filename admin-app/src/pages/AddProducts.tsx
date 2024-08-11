import { FC, useState, useEffect, ChangeEvent } from "react";
import { Helmet } from "react-helmet";

const AddProducts: FC = () => {
  interface FormValue {
    title: string;
    type: string;
    images: File[];
  }

  const [title, setTitle] = useState<FormValue["title"]>("");
  const [type, setType] = useState<FormValue["type"]>("");
  const [images, setImages] = useState<FormValue["images"]>([]);

  const titleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    console.log("title event.target.value:", event.target.value);
  };

  const typeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
    console.log("type event.target.value:", event.target.value);
  };

  const imagesHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadImages = Array.from(event.target.files || []);
    // console.log("typeof uploadImages:", typeof uploadImages);
    setImages(uploadImages);
    console.log("uploadImages:", uploadImages);
  };

  return (
    <div>
      <Helmet>
        <title>AddProducts</title>
      </Helmet>
      <div className="w-full border border-[3px] border-green-600">
        <form className="flex flex-col gap-[2em] rounded-[12px] shadow-md shadow-[6px_6px_12px_6px_rgba(0,0,0,0.3)] p-[1em] mx-auto w-[510px] my-[3em]">
          <div className="grid grid-cols-[72px_1fr] items-center gap-[1em] w-full">
            <label htmlFor="title">Title</label>
            <input
              className="px-[6px] h-[36px] rounded-[3px] border border-[1px] border-blue-300"
              type="text"
              id="title"
              onChange={titleHandler}
              value={title}
            />
          </div>

          <div className="grid grid-cols-[72px_1fr] items-center gap-[1em] w-full">
            <label>Type</label>
            <select
              className="px-[6px] h-[36px] w-full rounded-[3px] border border-[1px] border-blue-300"
              onChange={typeHandler}
              value={type}
            >
              <option>Coffee - Drinks</option>
              <option>Restaurant</option>
              <option>Resort - Hotel</option>
              <option>Company</option>
              <option>Sport</option>
            </select>
          </div>
          <div className="grid grid-cols-[72px_1fr] items-center gap-[1em] w-full">
            <label htmlFor="image-files">Images</label>
            <input
              type="file"
              id="image-files"
              multiple
              accept="image/*"
              onChange={imagesHandler}
              className="flex flex-row items-center px-[6px] h-[36px] rounded-[3px] "
            />
          </div>
          <div className="flex flex-row items-center gap-[2em]">
            <button className="transition duration-500 hover:scale-110 shadow-md shadow-blue-900/80 py-[6px] px-[12px] text-center rounded-[6px] bg-green-600/80 text-[21px] text-white font-[600] italic">
              Submit
            </button>
            <button className="transition duration-500 hover:scale-110 shadow-md shadow-blue-900/80 py-[6px] px-[12px] text-center rounded-[6px] bg-lime-300/80 text-[21px] text-lime-600 font-[600] italic">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
