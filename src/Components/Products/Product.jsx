import PropTypes from "prop-types";
import moment from "moment";

const Product = ({ item = {} }) => {
  const {
    title,
    description,
    category,
    price,
    rating,
    brand,
    meta: { createdAt },
    thumbnail,
  } = item;
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt={`${title}-thumbnail`}
        src={thumbnail}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <time>{moment(createdAt).format("h:mm A | MMM D, YYYY")}</time>
          <span className="capitalize">Category: {category}</span>
        </div>

        <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>

        <div className="flex justify-between py-2">
          <div className="flex space-x-4">
            <div>
              <h4 className="font-medium text-sm">Brand: {brand}</h4>
              <span className="text-xs">Price: ${price}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-4 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="font-semibold">{rating }</span>
          </div>
        </div>

        <button
          disabled
          className="cursor-not-allowed group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </button>
      </div>
    </article>
  );
};

Product.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Product;
