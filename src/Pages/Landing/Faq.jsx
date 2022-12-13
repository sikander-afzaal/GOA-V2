import "./styles/Faq.css";
import FaqTab from "../../Components/FaqTab/FaqTab";

const Faq = () => {
  const FAQS = [
    {
      question: "How long do you take to launch a project?",
      answer: "By End of Year 2022",
    },
    {
      question: "What blockchain will Gods of Asgard be launched on?",
      answer: "By End of Year 2022",
    },
    {
      question: "How can i play?",
      answer: "By End of Year 2022",
    },
  ];
  return (
    <div className="container">
      <div className="faq-div">
        <h2 className="trajan title">Frequently Asked Questions</h2>
        <div className="faqs">
          {FAQS.map((elem, idx) => {
            return <FaqTab {...elem} key={idx + "faq-tab"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
