import "./App.css";
import NavigationBar from "./components/navbar";
import BigPicture from "./components/DisplayPicture";
import ColorGrids from "./components/ColorGrid";
import FeaturesButton from "./components/Features";
import { Component } from "react";

const data = [
  {
    pos: 0,
    styleName: "Black Strap",
    imageUrl: "https://imgur.com/iOeUBV7.png",
  },
  { pos: 1, styleName: "Red Strap", imageUrl: "https://imgur.com/PTgQlim.png" },
  {
    pos: 2,
    styleName: "Blue Strap",
    imageUrl: "https://imgur.com/Mplj1YR.png",
  },
  {
    pos: 3,
    styleName: "Purple Strap",
    imageUrl: "https://imgur.com/xSIK4M8.png",
  },
];

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

class App extends Component {
  state = {
    display_Image: 0,
  };

  //Function to chnage the Image
  ColorGridFunction = (current_pos) => {
    this.setState({ display_Image: current_pos });
  };

  render() {
    const ColorGridFeature = data.map((items) => {
      return (
        <ColorGrids
          key={items.pos}
          ImageUrl={items.imageUrl}
          active={this.state.display_Image}
          current={items.pos}
          func={() => this.ColorGridFunction(items.pos)}
        />
      );
    });

    return (
      <div className="App">
        <NavigationBar />
        <div className="section">
          <div>
            <BigPicture ImageUrl={data[this.state.display_Image].imageUrl} />
          </div>
          <div className="DataSection">
            <HeadingData />
            <DetailsData />
            <h1>Colors</h1>
            <div className="section">{ColorGridFeature}</div>
            <h1>Features</h1>
            <FeaturesButton />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
