import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CountryDetails from "./CountryDetails";
import ReactPaginate from "react-paginate";
import Loading from "./Loading";
import { message } from "antd";
import SearchResult from "./SearchResult";

function App() {
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const [searchInput, setSearchInput] = useState("");

  //fetching data before the page is fully loaded
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://restcountries.com/v3.1/region/asia")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // displaying the results
  const displayData = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((data, index) => {
      return <CountryDetails data={data} key={index} />;
    });

  //function for change pages
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  if (loading) {
    return <Loading />;
  }
  //function for search result
  const fetchData = async (e) => {
    if (e.key === "Enter") {
      if (searchInput === "") {
        message.error("Please enter country name", 1.5);
      } else {
        setLoading(true);
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${searchInput}?fullText=true`
        );
        console.log(res.data);
        setResult(res.data);
        setLoading(false);
        setSearchInput("");
      }
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter any country name"
        className="search"
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => fetchData(e)}
      />
      {result.length === 0 ? (
        <>
          <div className="cards_component">{displayData}</div>
          <div className="paginate">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </>
      ) : (
        <SearchResult result={result} />
      )}

      {/* <SearchResult result={result} /> */}
    </div>
  );
}

export default App;
