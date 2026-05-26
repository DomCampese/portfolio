import { type FC } from 'react';
import journalerImage from '@images/journaler.png';
import jumpyballImage from '@images/jumpyball.png';
import chatioImage from '@images/chatio.png';
import { ReactLogo, TSLogo, HTMLLogo, CSSLogo, DotNetLogo, CSharpLogo, JavaLogo, PythonLogo, FlaskLogo, AngularLogo, KotlinLogo, SpringBootLogo } from '@components/svgs';

export interface SkillItem {
  Logo: FC
  name: string
}

export interface ProjectItem {
  image: string
  title: string
  description: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
}

const JOB_START_YEAR = 2022;
const numberWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const yearsAtJob = new Date().getFullYear() - JOB_START_YEAR;
const yearsAtJobWord = numberWords[yearsAtJob - 1] ?? `${yearsAtJob}`;

export const description = `Software engineer based in Pittsburgh, PA. I graduated Summa Cum Laude from Pitt in 2023 with a CS degree and a minor in Spanish. For the past ${yearsAtJobWord} years I've been an engineer at a Fortune 500 retailer, working customer-facing E-commerce application that serves a high volume of users, primarily in Angular and TypeScript. Outside of work I build full-stack projects in React, Angular, Svelte, Python, and more.`;

export const skills: SkillItem[] = [
  { Logo: AngularLogo, name: 'Angular' },
  { Logo: TSLogo, name: 'TypeScript' },
  { Logo: ReactLogo, name: 'React' },
  { Logo: HTMLLogo, name: 'HTML 5' },
  { Logo: CSSLogo, name: 'CSS 3' },
  { Logo: KotlinLogo, name: 'Kotlin' },
  { Logo: SpringBootLogo, name: 'Spring Boot' },
  { Logo: CSharpLogo, name: 'C Sharp' },
  { Logo: DotNetLogo, name: '.NET Core' },
  { Logo: JavaLogo, name: 'Java' },
  { Logo: PythonLogo, name: 'Python 3' },
  { Logo: FlaskLogo, name: 'Flask' },
];

export const projects: ProjectItem[] = [
  {
    image: journalerImage,
    title: 'Journaler',
    description: 'A journaling app for mood tracking and daily entries. Built with a React frontend and a Django REST API using JWT authentication.',
    tags: ['React', 'Django', 'Python', 'JWT'],
    githubUrl: 'https://github.com/DomCampese/Journaler',
  },
  {
    image: chatioImage,
    title: 'Chat.io',
    description: 'Real-time chatrooms — create, join, and participate in live conversations. Flask backend with a vanilla JS frontend.',
    tags: ['Python', 'Flask', 'JavaScript'],
    githubUrl: 'https://github.com/DomCampese/Chat.io',
  },
  {
    image: jumpyballImage,
    title: 'Jumpy Ball',
    description: 'A Flappy Bird clone built with p5.js. Procedurally generated terrain, score tracking, and playable on both mobile and desktop.',
    tags: ['p5.js', 'JavaScript', 'Canvas'],
    demoUrl: 'https://domcampese.github.io/Jumpy-Ball/',
    githubUrl: 'https://github.com/DomCampese/Jumpy-Ball',
  },
];
