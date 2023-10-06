import React from "react";
// import styles from "./CalendlyEmbed.module.css";

const CalendlyEmbed = ({ url }) => {
  return (
    <div className="min-w-[520px] h-screen">
      <iframe
        src={url}
        width="100%"
        height="1000"
        title="Calendly"
        className="w-full h-full border-none"
      />
    </div>
  );
};

export default CalendlyEmbed;
