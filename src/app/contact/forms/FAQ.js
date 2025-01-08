import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "Do you provide meals or snacks for the children?",
      answer: "Yes! We provide home-cooked meals for all kids. If the child has any dietary restrictions we will accommodate.",
    },
    {
      question: "How can I schedule a tour of the facility?",
      answer: "1) Send a request form from Contact Us page  2) Download and Complete paperwork from Forms page 3) We will send you an update via email or text regarding confirmation.",
    },
    {
      question: "What safety measures are in place at the daycare?",
      answer: "1) Complete form to visit center  2) You will receive a reminder through email 3) Download forms, complete, and have ready for a scheduled visit.",
    },
    {
      question: "Do you offer bilingual programs?",
      answer: "We teach all of our kids very basic Spanish. They practice speaking and reading through playful activities.",
    },
    {
      question: "What documents do I need to enroll my child?",
      answer: "All documents are provided in the form. It is roughly 10+ pages long.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-12 mt-24 mx-auto">
      <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">
        Frequently Asked Questions
      </h2>
     

      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="p-8 hover:bg-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <h3 className="text-2xl font-medium text-gray-800">
                {faq.question}
              </h3>
              <span className="text-3xl text-gray-600">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-gray-700 mt-4 text-lg">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
