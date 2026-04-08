import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleOnclickSearch = () => {
    navigate(`products?search=${query}`);
  };

  return {
    query,
    setQuery,
    handleOnclickSearch,
  };
};

export default useSearch;
