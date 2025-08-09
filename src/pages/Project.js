import React from 'react';
import Seo from '../components/Seo';
import { ArrowUpRight } from 'lucide-react';
import { projectData } from '../data/project';

const Project = () => {
  return (
    <>
      <Seo
        title="Projects - Nathan Chu"
        description="Project Details by Nathan Chu"
      />
      <div className="layout-md my-10">
        <div className="grid gap-y-4">
          {projectData.map((item, index) => {
            const content = (
              <>
                <div className="flex flex-col sm:flex-row sm:items-end mb-1.5">
                  <div className="text-black writing-title">
                    {item.title}
                    {item.link && <ArrowUpRight size={18} className="inline text-neutral-400" />}
                  </div>
                  <div className="sm:ml-auto mb-0.5 text-neutral-500">
                    <div className="text-sm">
                      {(() => {
                        const formatMonthYear = (str) => {
                          const [month, year] = str.split('-').map(Number);
                          return new Date(year, month - 1).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric'
                          });
                        };

                        return `${formatMonthYear(item.start_month)} - ${formatMonthYear(item.end_month)}`;
                      })()}
                    </div>
                  </div>
                </div>
                <div>
                  <span className="sm:ml-auto mb-0.5 text-neutral-500 text-sm">
                    {item.tags.join(', ')}
                  </span>
                </div>
              </>
            );

            return item.link ? (
              <a
                key={index}
                href={item.link}
                className="block -mx-3 px-3 hover:bg-neutral-100 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            ) : (
              <div
                key={index}
                className="block -mx-3 px-3 hover:bg-neutral-100 transition-colors"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
