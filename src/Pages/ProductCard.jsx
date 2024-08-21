import PropTypes from 'prop-types';

const ProductCard = ({product}) => {
    console.log(product)
    const {
        productName,
        productImage,
        description,
        price,
        category,
        ratings,
        creationDate,
      } = product;
    return (
        <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src={productImage}
          alt=''
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {productName}
          </h2>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold text-rose-500">${price}</span>
            <span className="text-sm text-gray-500">{category}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${
                    index < ratings ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-400">
              {new Date(creationDate).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    
    );
};

ProductCard.propTypes = {
    product: PropTypes.object
}

export default ProductCard;