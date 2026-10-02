import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import {
  certifications,
  courses,
  education,
  experiences,
  skills,
  technicalSkills,
} from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I&apos;m{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Akshat Goel
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 max-w-3xl text-slate-500'>
        <p className='leading-relaxed'>
          Computer Science graduate with hands-on experience building full-stack,
          AI-powered, real-time, and multithreaded applications. I work with C++,
          JavaScript, React.js, Node.js, and MongoDB, backed by strong foundations
          in DSA, OOP, DBMS, operating systems, and computer networks.
        </p>
      </div>

      <div className='mt-8 flex flex-wrap gap-3'>
        <a
          className='inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
          href='mailto:akshatgoyal96@gmail.com'
        >
          Email Me
        </a>
        <a
          className='inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
          href='tel:7500713521'
        >
          Call Me
        </a>
        <a
          className='inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
          href='https://www.google.com/maps/search/?api=1&query=Greater+Noida%2C+Uttar+Pradesh%2C+India'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Location
        </a>
      </div>

      <div className='py-12'>
        <h2 className='subhead-text'>Core Skills</h2>
        <div className='mt-10 flex flex-wrap gap-7'>
          {skills.map((skill) => (
            <div className='flex flex-col items-center gap-2' key={skill.name} title={skill.name}>
              <div className='block-container h-16 w-16'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front flex items-center justify-center rounded-xl'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='h-1/2 w-1/2 object-contain'
                  />
                </div>
              </div>
              <span className='text-xs font-medium text-slate-600'>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='grid gap-10 border-y border-slate-200 py-12 lg:grid-cols-2'>
        <section>
          <h2 className='subhead-text'>Technical Skills</h2>
          <div className='mt-6 space-y-5'>
            {technicalSkills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className='font-semibold text-blue-600'>{skillGroup.category}</h3>
                <p className='mt-1 leading-relaxed text-slate-500'>{skillGroup.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className='subhead-text'>Education</h2>
          <div className='mt-6 rounded-xl border border-slate-200 p-6 shadow-sm'>
            <p className='text-xl font-semibold text-slate-900'>{education.degree}</p>
            <p className='mt-1 font-medium text-blue-600'>{education.institution}</p>
            <p className='mt-3 text-slate-500'>{education.period} · {education.location}</p>
            <p className='mt-1 text-slate-500'>{education.score}</p>
          </div>

          <h3 className='mt-8 text-lg font-semibold text-slate-900'>Relevant Courses</h3>
          <div className='mt-3 flex flex-wrap gap-2'>
            {courses.map((course) => (
              <span className='rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700' key={course}>
                {course}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className='py-14'>
        <h2 className='subhead-text'>Work Experience</h2>
        <p className='mt-4 text-slate-500'>A snapshot of the practical work and simulations that have shaped my engineering approach.</p>

        <div className='mt-10 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={`${experience.company_name}-${experience.title}`}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex h-full w-full items-center justify-center'>
                    <img
                      src={experience.icon}
                      alt={`${experience.company_name} icon`}
                      className='h-[60%] w-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='font-poppins text-xl font-semibold text-black'>{experience.title}</h3>
                  <p className='text-base font-medium text-slate-500' style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 ml-5 list-disc space-y-2'>
                  {experience.points.map((point) => (
                    <li className='pl-1 text-sm font-normal text-slate-600' key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className='border-t border-slate-200 py-12'>
        <h2 className='subhead-text'>Certifications</h2>
        <div className='mt-7 grid gap-4 sm:grid-cols-2'>
          {certifications.map((certification) => (
            <div className='rounded-xl border border-slate-200 p-5' key={certification.name}>
              <h3 className='font-semibold text-slate-900'>{certification.name}</h3>
              <p className='mt-1 text-sm text-slate-500'>{certification.provider}</p>
            </div>
          ))}
        </div>
      </div>

      <CTA />
    </section>
  );
};

export default About;
