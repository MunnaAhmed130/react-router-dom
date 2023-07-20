import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";
import "./App.css";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" },
];

const types = ["Jedi", "Sith"];

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  // console.log(typeof value);

  const displayedCharacters = typeFilter
    ? swCharacters.filter(
        (char) => char.type.toLowerCase() === typeFilter.toLowerCase()
      )
    : swCharacters;

  const charEls = displayedCharacters.map((char) => (
    <div key={char.name}>
      <h3
        className="text-xl font-bold"
        style={{
          color: char.type.toLowerCase() === "jedi" ? "blue" : "red",
        }}
      >
        Name: {char.name}
      </h3>
      <p>Type: {char.type}</p>
      <hr />
    </div>
  ));

  const genNewSearchParamString = (key, value) => {
    const sp = new URLSearchParams(searchParams);
    sp.set(key, value);
    console.log("sp", sp.toString());
    return `?${sp.toString()}`;
  };

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      value === null ? prevParams.delete(key) : prevParams.set(key, value);
      return prevParams;
    });
  };

  return (
    <main className="p-5">
      <h2 className="text-3xl font-bold py-5">Home</h2>

      {types.map((type) => (
        <>
          <button
            key={type}
            onClick={() => handleFilterChange("type", type)}
            className="p-2"
          >
            {type}
          </button>
          {/* <Link
            key={type}
            // to={`?type=${type.toLowerCase()}`}
            to={genNewSearchParamString("type", type.toLowerCase())}
            className="p-2"
          >
            {type}
          </Link> */}
        </>
      ))}
      <button className="" onClick={() => handleFilterChange("type", null)}>
        Clear
      </button>
      {charEls}
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
