import React from "react";

import InfoColumn from "../../components/infoColumn/infoColumn";
import PricingColumn from "../../components/pricingColumn/pricingColumn";
import PricingCTA from "../../components/pricingCTA/pricingCTA";

import "./styles.css";

const Pricing = () => {
  const pricingColumnsProps = [
    {
      name: "Free",
      price: 0,
      descriptors: ["Plan includes:", "view all features"],
      features: [
        "Manange conversations directly from your website",
        "Bot without the AI service",
        "Archived chat for 30 days",
        "Free, forever",
      ],
      buttonText: "Select Plan",
    },
    {
      name: "Pro",
      price: 29.99,
      descriptors: ["All of Lite plus:", "view all features"],
      features: [
        "Conversational AI bot",
        "Unlimited conversational flows",
        "Facebook, Twitter, Instagram, and Linkedin integration",
        "Unlimited archived chat",
      ],
      buttonText: "Start 14 day free trial",
    },
  ];
  return (
    <div className="columns">
      <InfoColumn />
      <PricingCTA />
      {pricingColumnsProps.map((pricingColumn, i) => (
        <PricingColumn {...pricingColumn} i={i + 1} />
      ))}
    </div>
  );
};

export default Pricing;
