import React from "react";
import "./Feature.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Feature() {
  return (
    <div className="features">

      <div className="FeatureItem">
        <span className="featureItem__title">Revanue</span>
        <div className="featureItem__container">
          <span className="feature__Money">$2,415</span>
          <span className="feature__Rate">
            -11.5 <MailOutlineIcon className="feature__icon negative" />
          </span>
        </div>
        <span className="featureItem__sub">Compared to last month</span>
      </div>
      
      <div className="FeatureItem">
        <span className="featureItem__title">Sales</span>
        <div className="featureItem__container">
          <span className="feature__Money">$2,415</span>
          <span className="feature__Rate">
            -11.5 <MailOutlineIcon className="feature__icon negative" />
          </span>
        </div>
        <span className="featureItem__sub">Compared to last month</span>
      </div>
      <div className="FeatureItem">
        <span className="featureItem__title">Cost</span>
        <div className="featureItem__container">
          <span className="feature__Money">$2,415</span>
          <span className="feature__Rate">
            -11.5 <MailOutlineIcon className="feature__icon negative" />
          </span>
        </div>
        <span className="featureItem__sub">Compared to last month</span>
      </div>

    </div>
  );
}
