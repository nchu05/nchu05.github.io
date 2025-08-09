import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PubList = ({ data }) => {
  return (
    <div className="grid gap-y-4">
      {data.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="block -mx-3 px-3 hover:bg-neutral-100 transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex flex-col sm:flex-row sm:items-end mb-1.5">
            <div className="text-black publication-title">
              {item.title}
              <ArrowUpRight size={18} className="inline text-neutral-400" />
            </div>
          </div>
          <div>
            <span className="leading-snug italic publication-authors">
              {item.authors}
            </span>
          </div>
          <div>
            <span className="text-neutral-500 publication-venue">{item.venue}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default PubList;
