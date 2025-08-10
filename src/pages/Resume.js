import React from 'react';
import Seo from '../components/Seo';
import Workplace from '../components/Workplace';
import './Resume.css';

const Resume = () => {
  return (
    <>
      <Seo
        title="Nathan Chu – Resume"
        description="Software engineer."
      />

      <section className="layout-md py-12 pb-2">
        <h2 className="heading2">Education</h2>

        <div className="mb-3">
          <div className="flex justify-between items-end">
            <h3 className="font-medium mt-4 mb-1">Cornell University</h3>
            <div className="text-neutral-500 mb-0.5">2023 — Current</div>
          </div>
          <p className="byline">Bachelor of Science in Computer Science</p>
        </div>

        <h4 className="font-medium mt-1 mb-1">Teaching:</h4>
        <ul>
          <li>TA for CS 4820 (Introduction to Analysis of Algorithms). Fall 2025</li>
          <li>TA for CS 3410 (Computer System Organization and Programming). Spring 2025</li>
        </ul>

        <h4 className="font-medium mt-1">Relevant Coursework:</h4>
        <ul>
          <li>CS 2110 — Object-Oriented Programming and Data Structures</li>
          <li>CS 2800 — Discrete Structures</li>
          <li>CS 3110 — Data Structures and Functional Programming</li>
          <li>CS 3410 — Computer System Organization and Programming</li>
          <li>CS 4820 — Introduction to Analysis of Algorithms</li>
          <li>CS 4850 — Probability, Vectors, and Matrices in Computing (Randomized Algorithms)</li>
          <li>CS 4414 — Systems Programming *</li>
          <li>CS 5414 — Distributed Computing Principles *</li>
          <li>BTRY 3080 — Probability and Statistics</li>
          <li>MATH 2940 — Linear Algebra</li>
        </ul>
        <p className="text-xs text-neutral-500 mt-1">* denotes in progress</p>
      </section>

      <section className="layout-md">
        <h2 className="heading2">Professional Experience</h2>

        <Workplace
          title="Software Development Engineer Intern"
          company="Amazon Web Services (AWS)"
          url="https://aws.amazon.com/"
          dates="May 2025 – August 2025"
          location="Seattle, WA"
        >
          <li>Developed infra for Bedrock Provider Commerce billing</li>
        </Workplace>

        <Workplace
          title="Software Engineer Intern"
          company="Niagara Bottling"
          url="https://www.niagarawater.com/"
          dates="May 2024 – August 2024"
          location="Los Angeles, CA"
        >
          <li>Worked on LLM, RAG, and fine-tuning for Asset Management team</li>
        </Workplace>

        <Workplace
          title="Software Engineer Intern"
          company="Aeyesafe"
          url="https://www.aeyesafe.com/"
          dates="September 2023 – April 2024"
          location="Seattle, WA (Remote)"
        >
          <li>Created RESTful APIs and ETL pipeline for startup</li>
        </Workplace>
      </section>
    </>
  );
};

export default Resume;
