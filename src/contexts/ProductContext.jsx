import { createContext, useContext, useState } from 'react';
const ProductContext = createContext();
import { data } from '../data.js';
export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState(data);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
export default ProductContextProvider;
