import React from "react";
import Bar from "./bar";
import guitar from "../img/guitar.svg";
import robot from "../img/robot.svg";
import dancer from "../img/dancer-male.svg";
import stone from "../img/stone.svg";
import thunder from "../img/thunder.svg";
import sunglasses from "../img/sunglasses.svg";
import mikrophone from "../img/mikrophone.svg";
import headphones from "../img/headphones.svg";
import cloud from "../img/cloud.svg";
import ear from "../img/ear.svg";
import bunny from "../img/bunny.svg";
import snail from "../img/snail.svg";
import sad from "../img/sad.svg";
import sun from "../img/sun.svg";

const AudioFeature = ({ audioFeature, featureValue }) => {
  const message =
    featureValue > audioFeature.breakPoint
      ? audioFeature.messages[1]
      : audioFeature.messages[0];
  let img = null;

  // TODO: Find a better solution
  switch (message.img) {
    case "guitar":
      img = guitar;
      break;
    case "robot":
      img = robot;
      break;
    case "dancer":
      img = dancer;
      break;
    case "stone":
      img = stone;
      break;
    case "thunder":
      img = thunder;
      break;
    case "sunglasses":
      img = sunglasses;
      break;
    case "mikrophone":
      img = mikrophone;
      break;
    case "headphones":
      img = headphones;
      break;
    case "ear":
      img = ear;
      break;
    case "cloud":
      img = cloud;
      break;
    case "bunny":
      img = bunny;
      break;
    case "snail":
      img = snail;
      break;
    case "sun":
      img = sun;
      break;
    case "sad":
      img = sad;
      break;
    default:
      img = null;
  }

  console.log(audioFeature.name);

  return (
    <div className="AudioFeature">
      <div className="AudioFeature__intro-wrapper">
        <h3 className="AudioFeature__title">{audioFeature.name}:</h3>
        <span className="AudioFeature__value">{featureValue}</span>
      </div>
      <Bar />
      <div className="AudioFeature__message">{message.text}</div>
      <img className="AudioFeature__img" src={img} alt="emoji" />
    </div>
  );
};

export default AudioFeature;
