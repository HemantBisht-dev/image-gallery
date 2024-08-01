import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ImageCard from "./Components/ImageCard";
import SearchBar from "./Components/SearchBar";

function App() {
  const [term, setTerm] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=44852321-8b4be55c5d0687c4bfe8ca39a&q=${term}&image_type=photo`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.hits);
        setIsLoading(false);
      });
  }, [term]);

  return (
    <main className="w-100 h-100">
      <div className="container w-100">
        <SearchBar searchText={(text) => setTerm(text)} />

        {!isLoading && data.length === 0 && (
          <h1 className="text-center">No Image Found...</h1>
        )}

        {isLoading ? (
          <h1 className="text-center">Loading...</h1>
        ) : (
          <div className="row text-center">
            {data.map((item, index) => (
              <ImageCard key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
