import "./App.css";
import NavigationBar from "./components/navbar";
import BigPicture from "./components/DisplayPicture";

const ProductData = {
  colorOptions: [
    {
      styleName: "Black Strap",
      imageUrl: "https://imgur.com/iOeUBV7.png",
    },
    {
      styleName: "Red Strap",
      imageUrl: "https://imgur.com/PTgQlim.png",
    },
    {
      styleName: "Blue Strap",
      imageUrl: "https://imgur.com/Mplj1YR.png",
    },
    {
      styleName: "Purple Strap",
      imageUrl: "https://imgur.com/xSIK4M8.png",
    },
  ],
  featureList: ["Time", "Heart Rate"],
};

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
      <h3 style = {{color: "grey"}}>
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
        <div className = "DataSection">
          <HeadingData />
          <DetailsData />
        </div>
      </div>
    </div>
  );
}

export default App;
