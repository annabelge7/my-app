'use client'

import PageBox from '../atoms/pageBox'

const text = `
{
    'education': {
        'school': 'Northwestern University',
        'majors': ['Computer Science, Environmental Policy and Culture'],
        'year': 'fourth',
    },

    'skills': {
        'frontend': ['React', 'Next.js', 'Javascript', 'Typescript', 'HTML/CSS'],
        'backend': ['Node.js', 'Django', 'Spring'],
        'object-oriented': ['Python', 'C/C++'],
    },

    'interests': {
        'programming': ['software engineering', 'full stack dev'],
        'industries': ['sustainable and green tech','AI','edtech'],
        'hobbies': ['tennis', 'sailing', 'scuba diving', 'guitar'],
    },
}`

const biotext = `
    My name is Annabel Edwards, and I'm currently a student at Northwestern from Chicago, IL.
    I am very interested in AI and software driven solutions 
    for renewable energy optimization, waste reduction, and 
    eco-efficient urban planning, aiming to use my technical skills to make a contribution towards a 
    greener future.`

export default function AboutBox() {
  return (
    <div className="m-20 flex flex-col">
      <PageBox title="about-me.json" code={text} />
      <PageBox title="Bio" text={biotext} />
    </div>
  )
}
