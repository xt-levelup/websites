import { Helmet } from "react-helmet";
import { FC, useState, ChangeEvent } from "react";
// import { useNavigate } from "react-router-dom";

const ChangeCollectionImages: FC = () => {
  interface FormValues {
    collectionImage: File | null;
  }

  const [coffeeImage, setCoffeeImage] =
    useState<FormValues["collectionImage"]>(null);
  const [companyImage, setCompanyImage] =
    useState<FormValues["collectionImage"]>(null);
  const [restaurantImage, setRestaurantImage] =
    useState<FormValues["collectionImage"]>(null);
  const [hotelImage, setHotelImage] =
    useState<FormValues["collectionImage"]>(null);
  const [sportImage, setSportImage] =
    useState<FormValues["collectionImage"]>(null);
  //   const navigate = useNavigate();

  const coffeeImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log("coffeeImageHandler:", event.target.files[0]);
      setCoffeeImage(event.target.files[0]);
    }
  };
  const companyImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log("companyImageHandler:", event.target.files[0]);
      setCompanyImage(event.target.files[0]);
    }
  };
  const restaurantImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log("restaurantImageHandler:", event.target.files[0]);
      setRestaurantImage(event.target.files[0]);
    }
  };
  const hotelImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log("hotelImageHandler:", event.target.files[0]);
      setHotelImage(event.target.files[0]);
    }
  };
  const sportImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log("sportImageHandler:", event.target.files[0]);
      setSportImage(event.target.files[0]);
    }
  };

  const changeCoffeeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("changeCoffeeHandler:", coffeeImage);
  };
  const changeCompanyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("changeCompanyHandler:", companyImage);
  };
  const changeRestaurantHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    console.log("changeRestaurantHandler:", restaurantImage);
  };
  const changeHotelHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("changeHotelHandler:", hotelImage);
  };
  const changeSportHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("changeSportHandler:", sportImage);
  };

  return (
    <div className="border border-[3px] border-blue-950">
      <Helmet>
        <title>Change Collection Images</title>
      </Helmet>
      <form className="flex flex-col gap-[2em] p-[1em] rounded-[12px] shadow-md shadow-black-950 shadow-[6px_6px_6px_6px_rgba(0,0,0,0.1)] w-[480px] mx-auto my-[3em]">
        <div className="rounded-[6px] border border-[1px] border-blue-300/80 p-[6px] flex flex-col items-start gap-[1em]">
          <label htmlFor="coffee-collection">
            Change Coffee Collection Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="coffee-collection"
            onChange={coffeeImageHandler}
          />
          <button onClick={changeCoffeeHandler}>Change</button>
        </div>
        <div className="rounded-[6px] border border-[1px] border-blue-300/80 p-[6px] flex flex-col items-start gap-[1em]">
          <label htmlFor="company-collection">
            Change Company Collection Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="company-collection"
            onChange={companyImageHandler}
          />
          <button onClick={changeCompanyHandler}>Change</button>
        </div>
        <div className="rounded-[6px] border border-[1px] border-blue-300/80 p-[6px] flex flex-col items-start gap-[1em]">
          <label htmlFor="restaurant-collection">
            Change Restaurant Collection Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="restaurant-collection"
            onChange={restaurantImageHandler}
          />
          <button onClick={changeRestaurantHandler}>Change</button>
        </div>
        <div className="rounded-[6px] border border-[1px] border-blue-300/80 p-[6px] flex flex-col items-start gap-[1em]">
          <label htmlFor="hotel-collection">
            Change Hotel Collection Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="hotel-collection"
            onChange={hotelImageHandler}
          />
          <button onClick={changeHotelHandler}>Change</button>
        </div>
        <div className="rounded-[6px] border border-[1px] border-blue-300/80 p-[6px] flex flex-col items-start gap-[1em]">
          <label htmlFor="sport-collection">
            Change Sport Collection Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="sport-collection"
            onChange={sportImageHandler}
          />
          <button onClick={changeSportHandler}>Change</button>
        </div>
      </form>
    </div>
  );
};

export default ChangeCollectionImages;
