import React from "react";
import Bar from "./bar";
import Guitar from "../img/guitar";
import Robot from "../img/robot";
import Dancer from "../img/dancer";
import Stone from "../img/stone";
import Thunder from "../img/thunder";
import Sunglasses from "../img/sunglasses";
import Microphone from "../img/microphone";
import Headphones from "../img/headphones";
import Cloud from "../img/cloud";
import Ear from "../img/ear";
import Bunny from "../img/bunny";
import Snail from "../img/snail";
import Sad from "../img/sad";
import Sun from "../img/sun";

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
