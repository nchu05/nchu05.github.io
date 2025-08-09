import React from 'react';
import Seo from '../components/Seo';

const Home = () => {
  return (
    <>
      <Seo
        title="Nathan Chu"
      />
      <div className="layout-md text-lg space-y-14 my-10">
        <div className="space-y-5">
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
            Some of my other interests include rock climbing, running, and reading philosophy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
