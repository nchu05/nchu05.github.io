import React from 'react';
import Seo from '../components/Seo';
import PubList from '../components/PubList';
import { publicationsData } from '../data/publications';

const Publications = () => {
  return (
    <>
      <Seo
        title="Publications - Owen Oertell"
        description="Research publications and papers by Owen Oertell"
      />
      <div className="layout-md my-10">
        <div className="space-y-12">
          <div>
            <h2 className="heading2">2025</h2>
            <PubList data={publicationsData.papers2025} />
          </div>
          
          <div>
            <h2 className="heading2">2024</h2>
            <PubList data={publicationsData.papers2024} />
          </div>
          
          <div>
            <h2 className="heading2">2023</h2>
            <PubList data={publicationsData.papers2023} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Publications;
