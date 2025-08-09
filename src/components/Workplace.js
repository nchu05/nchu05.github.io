import React, { useState } from 'react';

const Workplace = ({ title, company, url, dates, location, children, defaultHidden = false }) => {
  const [hidden, setHidden] = useState(defaultHidden);

  return (
    <div
      className={`mb-8 ${hidden ? 'cursor-pointer' : ''}`}
      onClick={() => hidden && setHidden(false)}
    >
      <h3 className="text-black resume-title leading-tight mb-1">
        {title} at{' '}
        <a className="link" href={url}>
          {company}
        </a>
      </h3>
      <p className="font-light mb-2 resume-company">
        <span className="whitespace-nowrap resume-dates">{dates}</span>
        <span className="px-0.5 text-gray-500">•</span>
        <span className="whitespace-nowrap resume-dates">{location}</span>
      </p>
      {!hidden && (
        <ul className="list-disc pl-7 marker:text-neutral-400">
          {children}
        </ul>
      )}
    </div>
  );
};

export default Workplace;
