import React from "react";
import data from "../audio-features";

const AudioFeature = ({ featureName, featureValue }) => {
  const featureData = data[featureName];

  return (
    <div className="AudioFeatures__item">
      <div className="AudioFeatures__value">
        {featureData.name}: {featureValue}
      </div>
      <div className="AudioFeatures__result">
        {featureValue > featureData.breakPoint
          ? featureData.messages[1].text
          : featureData.messages[0].text}
      </div>
    </div>
  );
};

export default AudioFeature;
