"use client";
import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What age groups do you accept at the daycare?",
      answer: "lorem",
    },
    {
      question: "What are the daycare hours of operation?",
      answer: "lorem",
    },
    {
      question: "Do you provide meals or snacks for the children?",
      answer: "lorem",
    },
    {
      question: "Is there a pick-up and drop-off service available?",
      answer: "lorem",
    },
    {
      question: "How can I schedule a tour of the facility?",
      answer: "lorem",
    },
    {
      question: "What safety measures are in place at the daycare?",
      answer: "lorem",
    },
    {
      question: "Do you offer bilingual programs?",
      answer: "lorem",
    },
    {
      question: "What documents do I need to enroll my child?",
      answer: "lorem",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mt-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-md text-center mb-8 text-gray-600">
        Here are some common questions about our daycare. If you don't find your
        question, feel free to contact us.
      </p>

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6">
            <h3 className="text-xl font-medium text-gray-800">
              {faq.question}
            </h3>
            {faq.answer ? (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            ) : (
              <p className="text-gray-500 italic mt-2">
                Answer coming soon...
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
