const products = [
  'Laptop',
  'Mobile',
  'Smart Watch',
  'Headphones'
];

const TopProducts = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-5">
        Top Products
      </h2>

      <ul className="space-y-3">

        {products.map((product, index) => (

          <li
            key={index}
            className="border-b pb-2"
          >
            {product}
          </li>

        ))}

      </ul>

    </div>
  );
};

export default TopProducts;