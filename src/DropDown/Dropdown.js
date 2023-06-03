import { useState } from 'react';

const Faq = () => {
  const [openBox, setopenBox] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'Elon Musk',
      answer: 'Never. I dont ever give up. Id have to be dead or completely incapacitated. For my part, I will never give up, and I mean never.',
    },
  ];

  const toggleQuestion = (d) => {
    if (openBox === d) {
      setopenBox(null);
    } else {
      setopenBox(d);
    }
  };

  return (
    <div className='container-dropdown'>
      {questions.map((q, d) => (
        <div key={q.id} className='content-dropdown'>
          <h3 onClick={() => toggleQuestion(d)}>
           <p className='dp-question'>{q.question}</p>
           <div className='icon'> {openBox === d ? '↑' : '↓'}</div>
          </h3>
         <div className='answer'></div>
         {openBox === d && <div className='dropdown'>{q.answer}</div>} 
        </div>
      ))}
    </div>
  );
};

export default Faq;
