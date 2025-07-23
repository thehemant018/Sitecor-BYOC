
import * as FEAAS from "@sitecore-feaas/clientside/react";

type ProductProps = {
  name: string;
  price: string;
  inStock: boolean;
};

const ProductCard = ({ name, price, inStock }: ProductProps) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-lg font-bold">🛍️ {name}</h2>
      <p><strong>Price:</strong> ₹{price}</p>
      <p>
        <strong>Status:</strong> {inStock ? "In Stock " : "Out of Stock "}
      </p>
    </div>
  );
};

FEAAS.registerComponent(ProductCard, {
  name: "ProductCard",
  title: "Product Card",
  description: "Displays static product details",
  thumbnail: "https://feaasstatic.blob.core.windows.net/assets/thumbnails/byoc.svg",
  group: "Catalog",
  required: ["name", "price"],
  properties: {
    name: { type: "string", title: "Product Name" },
    price: { type: "string", title: "Price" },
    inStock: { type: "boolean", title: "In Stock" }
  }
});

export { ProductCard };
