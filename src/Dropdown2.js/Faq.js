import { useState } from "react";

import icon from "./icon.jpg"

const Dropdown = () => {
  const [Faq, setFaq] = useState(null);
  const [SubFaq, setSubFaq] = useState(null);

  const questions = [
    {
      id: 1,
      icon:icon,
      title: "Motivational Quotes",
      subquestions: [
        {
          id: 2,
          title: "Albert Eistein",
          answer:
            "We cannot solve problems with the kind of thinking we employed when we came up with them.",
        },
        {
          id: 3,
          title: "Dale Carnegie",
          answer:
            "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        },
        {
          id: 3,
          title: "Tony Robbins",
          answer:
            "Setting goals is the first step in turning the invisible into the visible.",
        },
        {
          id: 3,
          title: "Winston Churchill",
          answer:
            "Success is stumbling from failure to failure with no loss of enthusiasm.",
        },
      ],
    },
  ];

  const toggleQuestion = (i) => {
    if (Faq === i) {
      setFaq(null);
    } else {
      setFaq(i);
    }
  };

  const toggleSubquestion = (i) => {
    if (SubFaq === i) {
      setSubFaq(null);
    } else {
      setSubFaq(i);
    }
  };

  return (
    <div className="faq">
        {questions.map((o, k) => (
          <div key={o.id} className="faq-content">
              <h4 onClick={() => toggleQuestion(k)}>
              <span>{o.title}</span>
                <div className="faq-icon">{Faq === k ? "↑" : "↓"}</div>
              </h4>
            {Faq === k && (
              <div className="faq-answer">
                <p>{o.answer}</p>
                {o.subquestions.map((s, subIndex) => (
                  <div key={s.id} className="faq-dropdown">
                    <h5 onClick={() => toggleSubquestion(subIndex)}>

                      {s.title}
                    <div className="arrow">{SubFaq === subIndex ? "↑" : "↓"}</div>
                    </h5>

                    <div className="footer">{SubFaq === subIndex && <p>{s.answer}</p>}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
  );
};

export default Dropdown;
