import React from "react";

const AudioFeature = ({ audioFeature, featureValue }) => {
  return (
    <div className="AudioFeatures__item">
      <div className="AudioFeatures__value">
        {audioFeature.name}: {featureValue}
      </div>
      <div className="AudioFeatures__result">
        {featureValue > audioFeature.breakPoint
          ? audioFeature.messages[1].text
          : audioFeature.messages[0].text}
      </div>
    </div>
  );
};

export default AudioFeature;
