import { useEffect, useState } from "react";
import axios from "axios";

const Pagination = () => {
  const URL = "https://dummyjson.com/products";
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 5;
  const skip = (currentPage - 1) * limit;

  const fetchData = async () => {
    try {
      const res = await axios.get(`${URL}?limit=${limit}&skip=${skip}`);

      setData(res.data.products);
      setTotalPages(Math.ceil(res.data.total / limit));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div>
      <h2>Products</h2>

      {data.map((ele) => (
        <p key={ele.id}>{ele.title}</p>
      ))}

      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
