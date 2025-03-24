import React, { useState } from "react";

function Accordion({ title, content, selected, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id={`accordion-heading-${title}`}>
        <button
          type="button"
          className="flex items-center flex-row-reverse justify-between w-full p-5 gap-x-10"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${title}`}
        >
          <span>{title}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-body-${title}`}
        className={`${isOpen ? "" : "hidden"}`}
        aria-labelledby={`accordion-heading-${title}`}
      >
        <div className="p-5 border border-b-0 border-gray-200 ">
          {content?.map((item) => {
            const id = item.levelName || item.techName || item.typeName;
            const isChecked = Array.isArray(selected)
              ? selected.includes(item.id)
              : selected === item.id;

            return (
              <div key={item.id} className="flex justify-between items-center">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onChange(item.id)}
                  id={id}
                />
                <label htmlFor={id}>{id}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
