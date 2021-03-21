import "./App.css";
// nLEPyjNGvZS12M6eUrJ0ozaIpQpCNRH5vXRdssymP0c
// https://api.unsplash.com/
import Images from "./Images";

function App() {
  let show;

  show = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
    return <Images />;
  });

  return (
    <div className="container">
      <main className="grid">{show}</main>
    </div>
  );
}

export default App;
