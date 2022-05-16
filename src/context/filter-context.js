import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { filterReducer } from "../reducer/filterReducer";
const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [state, filterDispatch] = useReducer(filterReducer, {
    items: [],
    data: [],
    loading: true,
    lowToHigh: false,
    highToLow: false,
    categories: [],
    showRacquet: false,
    showShuttleCock: false,
    showString: false,
    showShoe: false,
    maxPrice: 14000,
    featuredCatgories: [],
    rating: 0,
    currentPageNumber:0
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        filterDispatch({ type: "FETCHING_DATA" });
        const response = await axios.get("/api/products");
        filterDispatch({ type: "FETCHED", payload: response.data.products });
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <FilterContext.Provider value={{ state, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
