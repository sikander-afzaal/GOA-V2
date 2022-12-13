import "./FaqTab.css";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaqTab = ({ question, answer }) => {
  const [activeTab, setActiveTab] = useState(false);

  return (
    <div className="faq-tab">
      <div
        className={`faq-btn ${activeTab ? "active-faq-btn" : ""}`}
        onClick={() => setActiveTab((prev) => !prev)}
      >
        <h2 className="trajan">{question}</h2>
        <FontAwesomeIcon
          style={{ transform: activeTab ? "rotate(180deg)" : "none" }}
          icon={faChevronDown}
        />
      </div>
      <div className={`faq-answer ${activeTab ? "active-answer" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqTab;
