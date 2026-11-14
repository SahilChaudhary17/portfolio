'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Sahil Chaudhary. I'm a full-stack engineer at{' '}
            <Link
              href="https://www.infosys.com/"
              target="_blank"
              className="text-accent"
            >
              Infosys
            </Link>
            , building an enterprise RAG cybersecurity assistant used by 6,400+
            people with React, TypeScript, Python, and Azure. I elevate that
            experience in every release, so asking a question and reaching a
            trustworthy answer feels straightforward.
          </p>
          <p>
            I graduated from{' '}
            <Link
              href="https://www.vitbhopal.ac.in/"
              target="_blank"
              className="text-accent"
            >
              Vellore Institute of Technology
            </Link>{' '}
            in May 2025 with a cumulative GPA of 9.18.
          </p>
          <p>
            I care about shipping measurable impact through thoughtful UI and
            solid engineering. Recent recognition includes the STG Rise Award
            for Rookie of the Quarter and a Rise Insta client appreciation
            award for migrating the product from Angular to React. I also hold
            Claude Certified Architect, Google Cloud Digital Leader, and AWS 
            Cloud Practitioner.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
