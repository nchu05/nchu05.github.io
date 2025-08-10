import React from 'react';
import Seo from '../components/Seo';

const Home = () => {
  return (
    <>
      <Seo
        title="Nathan Chu"
      />
      <div className="layout-md text-lg space-y-14 my-10">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8 space-y-8 md:space-y-0">
          <div className="space-y-5 flex-1">
            <p>
              Hi! My name is Nathan. I study at Cornell University, where I am pursuing a B.S. in Computer Science.
            </p>
            <p>
              I am interested in software engineering, distributed systems, and systems programming.
            </p>
            <p>
              This summer, I was an SDE intern on the Bedrock team at {' '}
              <a className="link" href="https://aws.amazon.com/bedrock/?sec=aiapps&pos=2">
                Amazon Web Services (AWS)
              </a>
              . Last summer, I interned at{' '}
              <a className="link" href="https://www.niagarawater.com/">
                Niagara Bottling
              </a>
              .
            </p>
            <p>
              Some of my other interests include rock climbing, running, and reading philosophy. Thanks for visiting!
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/assets/images/profile.jpeg"
              alt="Nathan Chu"
              className="w-64 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
