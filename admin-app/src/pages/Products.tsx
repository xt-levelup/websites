import { FC } from "react";
import { Helmet } from "react-helmet";

const Products: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <div>
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" />
          </div>
          <div>
            <label>Price</label>
            <select>
              <option>Package</option>
              <option>Option</option>
            </select>
          </div>
          <div>
            <select>
              <option>Coffee - Drinks</option>
              <option>Restaurant</option>
              <option>Resort - Hotel</option>
              <option>Company</option>
              <option>Sport</option>
            </select>
          </div>
          <div>
            <label>Images</label>
            <input />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Products;
