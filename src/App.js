import React, {
  Fragment,
  useEffect,
  useState,
  Component,
  Suspense,
  lazy,
} from "react";
import Card from "./components/Card";
// import Loader from "react-loader-spinner";
import showLoaders from "./components/Loaders";
// import ShowDetail from "./components/ShowDeatils";
import Container from "./UI/Container";
import Navbar from "./layout/Navbar";
import CardPosts from "./components/cardPosts/CardPosts";
function App() {
  const [dataApi, setDataApi] = useState([]);
  const [status, setStatus] = useState("users");
  const [spinnerLoading, setspinnerLoading] = useState(false);

  useEffect(() => {
    fetchPhotos(status);
  }, [status]);

  async function fetchPhotos(path) {
    try {
      spinnerLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/" + path);
      if (!res.ok) {
        throw new Error("Something wrong..." + res.status);
      }
      const data = await res.json();
      setDataApi(data);
    } catch (err) {
      alert(err.message);
    }
    setspinnerLoading(false);
  }

  const handleStatus = (status) => {
    setStatus(status);
  };

  const Cards = React.lazy(() => import("./components/Card"));

  const fetchData = () => {
    if (status === "users") {
      return (
        <div className="d-flex">
          <Suspense fallback={<div>Loading...</div>}>
            <Cards dataApi={dataApi} />;
          </Suspense>
        </div>
      );
    }
    if (status === "posts") {
      return <CardPosts dataApi={dataApi} />;
    }
  };
  // const spinnerLoader = (spinnerLoading) => {
  //   setspinnerLoading(spinnerLoading);
  // };

  // spinnerLoader.addEventListener("click", function (spinnerLoading) {
  //   const spinnerLoader = useState(true);
  // console.log(spinnerLoader);
  // });
  return (
    <Fragment>
      <Navbar handleStatus={handleStatus} />
      <Container>
        <div className="d-flex">
          {setspinnerLoading && fetchData()}
          {!spinnerLoading && "Loading..."}
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
