import React from "react";
import Bar from "./Bar";
import Guitar from "../img/Guitar";
import Robot from "../img/Robot";
import Dancer from "../img/Dancer";
import Stone from "../img/Stone";
import Thunder from "../img/Thunder";
import Sunglasses from "../img/Sunglasses";
import Microphone from "../img/Microphone";
import Headphones from "../img/Headphones";
import Cloud from "../img/Cloud";
import Ear from "../img/Ear";
import Bunny from "../img/Bunny";
import Snail from "../img/Snail";
import Sad from "../img/Sad";
import Sun from "../img/Sun";

const AudioFeature = ({ audioFeature, featureValue }) => {
  // NOTE: change < to > to see all the other
  const message =
    featureValue < audioFeature.breakPoint
      ? audioFeature.messages[1]
      : audioFeature.messages[0];
  let img = null;
  img = <Robot />;

  // TODO: Find a better solution
  switch (message.img) {
    case "guitar":
      img = <Guitar />;
      break;
    case "robot":
      img = <Robot />;
      break;
    case "dancer":
      img = <Dancer />;
      break;
    case "stone":
      img = <Stone />;
      break;
    case "thunder":
      img = <Thunder />;
      break;
    case "sunglasses":
      img = <Sunglasses />;
      break;
    case "microphone":
      img = <Microphone />;
      break;
    case "headphones":
      img = <Headphones />;
      break;
    case "ear":
      img = <Ear />;
      break;
    case "cloud":
      img = <Cloud />;
      break;
    case "bunny":
      img = <Bunny />;
      break;
    case "snail":
      img = <Snail />;
      break;
    case "sun":
      img = <Sun />;
      break;
    case "sad":
      img = <Sad />;
      break;
    default:
      img = null;
  }

  let featureValueProcessed = featureValue;

  if (audioFeature.unit === "%") {
    featureValueProcessed = featureValue * 100;
  }

  featureValueProcessed = Math.floor(featureValueProcessed) + audioFeature.unit;

  return (
    <div className="AudioFeature">
      <div className="AudioFeature__intro-wrapper">
        <h3 className="AudioFeature__title">{audioFeature.name}:</h3>
        <span className="AudioFeature__value">{featureValueProcessed}</span>
      </div>
      {audioFeature.unit === "%" && <Bar value={featureValueProcessed} />}
      <div className="AudioFeature__message">{message.text}</div>
      <div
        className="AudioFeature_img"
        style={{
          margin: "auto",
          width: "150px"
        }}
      >
        {img}
      </div>
    </div>
  );
};

export default AudioFeature;
