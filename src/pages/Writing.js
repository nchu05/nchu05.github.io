import React from 'react';
import Seo from '../components/Seo';
import { ArrowUpRight } from 'lucide-react';
import { writingData } from '../data/writing';

const Writing = () => {
  return (
    <>
      <Seo
        title="Writing - Owen Oertell"
        description="Blog posts and writings by Owen Oertell"
      />
      <div className="layout-md my-10">
        <div className="grid gap-y-4">
          {writingData.map((item, index) => (
            <a
              key={index}
              href={item.link || `/writing/${item.slug}`}
              className="block -mx-3 px-3 hover:bg-neutral-100 transition-colors"
              target={item.link ? "_blank" : "_self"}
              rel={item.link ? "noreferrer" : ""}
            >
              <div className="flex flex-col sm:flex-row sm:items-end mb-1.5">
                <div className="text-black writing-title">
                  {item.title}
                  {item.link && <ArrowUpRight size={18} className="inline text-neutral-400" />}
                </div>
                <div className="sm:ml-auto mb-0.5 text-neutral-500">
                  <div className="text-sm">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
              <div>
                <span className="text-neutral-500">
                  {item.tags.join(', ')}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Writing;
