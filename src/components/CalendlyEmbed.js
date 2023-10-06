import React from "react";
// import styles from "./CalendlyEmbed.module.css";

const CalendlyEmbed = ({ url }) => {
  return (
    <iframe
      src={url}
      width="100%"
      height="100%"
      title="Calendly"
      className="w-full h-full border-none"
    />
  );
};

export default CalendlyEmbed;
