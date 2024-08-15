import { FC, useState, useEffect, ChangeEvent } from "react";
import { Helmet } from "react-helmet";

const AddProducts: FC = () => {
  interface FormValue {
    title: string;
    category: string;
    desc: string;
    images: File[];
    userId?: string;
    productId?: string;
    responseMessageError: string | null;
  }

  const [title, setTitle] = useState<FormValue["title"]>("");
  const [category, setCategory] = useState<FormValue["category"]>("");
  const [desc, setDesc] = useState<FormValue["desc"]>("");
  const [images, setImages] = useState<FormValue["images"]>([]);
  const [userId, setUserId] = useState<FormValue["userId"]>(undefined);
  const [productId, setProductId] = useState<FormValue["productId"]>(undefined);
  const [responseError, setResponseError] =
    useState<FormValue["responseMessageError"]>();

  useEffect(() => {
    setUserId("123456789");
    setProductId(undefined);
  }, []);

  const titleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const descHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(event.target.value);
  };

  const categoryHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const imagesHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadImages = Array.from(event.target.files || []);
    setImages(uploadImages);
  };

  const addProductHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const urlServer = "http://localhost:5000/add-product";

    const formData = new FormData();

    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("category", category);
    //--- Không cho undefined vào formData nên phải lọc trước
    if (userId) {
      formData.append("userId", userId);
    }
    if (productId) {
      formData.append("productId", productId);
    }

    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        formData.append("imageFiles", images[i]);
      }
    }

    const response = await fetch(urlServer, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log("data response:", data);

    if (!response.ok) {
      setResponseError(data.message ? data.message : "Cannot add product now!");
    } else {
      setResponseError(null);
      console.log("data add product successfully:", data);
    }
  };

  useEffect(() => {
    console.log("title:", title);
  }, [title]);
  useEffect(() => {
    console.log("desc:", desc);
  }, [desc]);
  useEffect(() => {
    console.log("category:", category);
  }, [category]);
  useEffect(() => {
    console.log("images:", images);
  }, [images]);
  useEffect(() => {
    console.log("responseError:", responseError);
  }, [responseError]);

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
            <label htmlFor="desc">Description</label>
            <textarea
              className="px-[6px] h-[90px] rounded-[3px] border border-[1px] border-blue-300"
              id="desc"
              onChange={descHandler}
              value={desc}
            />
          </div>

          <div className="grid grid-cols-[72px_1fr] items-center gap-[1em] w-full">
            <label>Category</label>
            <select
              className="px-[6px] h-[36px] w-full rounded-[3px] border border-[1px] border-blue-300"
              onChange={categoryHandler}
              value={category}
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
            <button
              className="transition duration-500 hover:scale-110 shadow-md shadow-blue-900/80 py-[6px] px-[12px] text-center rounded-[6px] bg-green-600/80 text-[21px] text-white font-[600] italic"
              onClick={addProductHandler}
            >
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
