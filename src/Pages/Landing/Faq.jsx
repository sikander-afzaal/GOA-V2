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
      answer:
        "   Avalanche blockchain. All of our custom smart contracts will be audited by CertiK",
    },
    {
      question: "How can i play?",
      answer:
        "To play Gods of Asgard, you need at least one of the four God NFT's from our collection. To obtain an NFT you can mint the NFT through our dApp, purchase on the secondary marketplace NFTrade, or rent an NFT through our renting marketplace.",
    },
  ];
  return (
    <div id="faq" className="container">
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
