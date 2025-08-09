import React from 'react';
import Seo from '../components/Seo';
import Workplace from '../components/Workplace';
import './Resume.css';

const Resume = () => {
  return (
    <>
      <Seo
        title="Owen Oertell – Resume"
        description="Researcher, software engineer."
      />

      <section className="layout-md py-12">
        <h2 className="heading2">Education</h2>

        <div className="mb-4">
          <div className="flex justify-between items-end">
            <h3 className="text-black resume-title">Cornell University</h3>
            <div className="text-neutral-500 mb-0.5 resume-dates">2022 — Current</div>
          </div>
          <p className="byline">B.S. in Computer Science; Minor in Mathematics</p>
        </div>

        <h4 className="font-medium mt-4 mb-1">Teaching:</h4>
        <ul>
          <li>TA for CS 4789 (Introduction to Reinforcement Learning). Sp24, Sp25 (Head TA)</li>
          <li>TA for CS 4820 (Introduction to Analysis of Algorithms). Fa23, Sp23</li>
        </ul>

        <h4 className="font-medium mt-4 mb-1">Community Service:</h4>
        <ul>
          <li>ICLR 2025 Reviewer (Notable Reviewer)</li>
          <li>NeurIPS 2025 Reviewer</li>
          <li>RLC 2025 Reviewer</li>
          <li>COLM 2025 Reviewer</li>
          <li>ACL ARR 2025 Reviewer</li>
        </ul>
      </section>

      <section className="layout-md py-5">
        <h2 className="heading2">Professional Experience</h2>

        <Workplace
          title="Research Intern"
          company="NVIDIA"
          url="https://nvidia.com"
          dates="June 2025 – August 2025"
          location="Santa Clara, CA"
        >
          <li>RL + Compilers</li>
        </Workplace>

        <Workplace
          title="Research Intern"
          company="NVIDIA"
          url="https://nvidia.com"
          dates="August 2024 – December 2024"
          location="Santa Clara, CA"
        >
          <li>ML + Compilers</li>
        </Workplace>

        <Workplace
          title="Software Engineering Intern"
          company="DRW Holdings"
          url="https://drw.com"
          dates="June 2024 – August 2024"
          location="Chicago, IL"
        >
          <li>Commodities desk</li>
        </Workplace>

        <Workplace
          title="Researcher"
          company="Sun Lab, Cornell University"
          url="https://wensun.github.io"
          dates="September 2022 – Current"
          location="Ithaca, NY"
        >
          <li>Reinforcement learning</li>
        </Workplace>
      </section>
    </>
  );
};

export default Resume;
