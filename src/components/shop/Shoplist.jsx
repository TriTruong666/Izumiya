import { useQuery } from "@tanstack/react-query";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import * as ProductService from "../../service/product/productService";
import "../../styles/components/shop/shop.css";

export const Shoplist = ({
  isLoadingList,
  infinityScroll,
  isRow,
  isColumn,
}) => {
  const [isLoadingPage, setIsLoadingPage] = useState(false);

  const {
    data: products = [],
    isLoading,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["products"],
    queryFn: ProductService.getAllProductShop,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (isFetching) {
      setIsLoadingPage(true);
    } else {
      setIsLoadingPage(false);
    }
  }, [isLoading, isFetching]);

  if (isError) {
    return <p>Error fetching products. Please try again later.</p>;
  }

  return (
    <div className="shoplist-container">
      {isLoadingPage || isLoadingList ? (
        <div className="loading">
          <ClipLoader color="#ffffff" size={50} />
        </div>
      ) : (
        <>
          {isColumn ? (
            <>
              <div className="shoplist-column">
                {products.slice(0, infinityScroll).map((product) => (
                  <div className="shop-item" key={product.productId}>
                    <img src={product.image} alt="image" />
                    <Link to={`/productdetail/${product.productId}`}>
                      {product.productName}
                    </Link>
                    <p>${product.unitPrice}</p>
                    <div>
                      <button>Buy now</button>
                      <button>Add to cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            ""
          )}
          {isRow ? (
            <>
              <div className="shoplist-row">
                {products.slice(0, infinityScroll).map((product) => (
                  <div className="shop-item" key={product.productId}>
                    <img src={product.image} alt="image" />
                    <Link to={`/productdetail/${product.productId}`}>
                      {product.productName}
                    </Link>
                    <p>${product.unitPrice}</p>
                    <div>
                      <button>Buy now</button>
                      <button>Add to cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};
