import "./App.css";
import NavigationBar from "./components/navbar";
import BigPicture from "./components/DisplayPicture";
import ColorGrids from "./components/ColorGrid";
import FeaturesButton from "./components/Features";

//In-App Components
const HeadingData = () => {
  return (
    <div>
      <h1>FitBit 19 - The Smartest Watch</h1>
    </div>
  );
};

const DetailsData = () => {
  return (
    <div>
      <h3 style={{ color: "grey" }}>
        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
        Lorem ipsum dolor Lorem ipsum dolor
      </h3>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="section">
        <div>
          <BigPicture />
        </div>
        <div className="DataSection">
          <HeadingData />
          <DetailsData />
          <h1>Colors</h1>
          <ColorGrids />
          <h1>Features</h1>
          <FeaturesButton/>
        </div>
      </div>
    </div>
  );
}

export default App;
