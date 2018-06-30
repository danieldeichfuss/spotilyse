import React from "react";
import ReactDOM from "react-dom";
import FavouriteSong from "./FavouriteSong";
import renderer from "react-test-renderer";

const favouriteSong = "Favourite Song";
const favouriteArtist = "Favourite Artist";
const favouriteTrackFeatures = {
  audioFeature: {
    name: "Name"
  }
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <FavouriteSong
      favouriteSong={favouriteSong}
      favouriteArtist={favouriteArtist}
      favouriteTrackFeatures={favouriteTrackFeatures}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

// it("renders page correctly", () => {
//   const component = renderer.create(
//     <FavouriteSong
//       favouriteSong={favouriteSong}
//       favouriteArtist={favouriteArtist}
//       favouriteTrackFeatures={favouriteTrackFeatures}
//     />
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
