import journalerImage from './images/journaler.png'
import jumpyballImage from './images/jumpyball.png'
import chatioImage from './images/chatio.png'
import battleshipImage from './images/battleship.png'
import ReactLogo from './components/svgs/ReactLogo'
import TSLogo from './components/svgs/TSLogo'
import HTMLLogo from './components/svgs/HTMLLogo'
import CSSLogo from './components/svgs/CSSLogo'
import  DotNetLogo from './components/svgs/DotNetLogo'
import CSharpLogo from './components/svgs/CSharpLogo'
import JavaLogo from './components/svgs/JavaLogo'
import PythonLogo from './components/svgs/PythonLogo'
import FlaskLogo from './components/svgs/FlaskLogo'
import CLogo from './components/svgs/CLogo'

export const description = `
  I'm a Senior at the University of Pittsburgh studying Computer Science with a minor in Spanish.
  I'm a passionate full-stack Software Engineer specializing in developing web applications.
  I live and work in the Pittsburgh, PA area. Please feel free to check out my work and to
  reach out to me with any questions using the contact form below!
`

export const projects = [
  {
    image: journalerImage,
    title: 'Journaler',
    description: 'A mental health tool that lets a user create and edit journal entries to track their mood, save memories about their day, or vent about their troubles. It is built with a React (JS) frontend and a Django (Python) backend REST API using JWT Authentication.',
    demoUrl: 'https://journaler.netlify.app/',
    githubUrl: 'https://github.com/DomCampese/Journaler'
  },
  {
    image: jumpyballImage,
    title: 'Jumpy Ball',
    description: 'A clone of the viral Flappy Bird game built using the p5.js creative coding library. The game features score and high score tracking, a randomly generated world, and supports mobile and desktop gameplay.',
    demoUrl: 'https://domcampese.github.io/Jumpy-Ball/',
    githubUrl: 'https://github.com/DomCampese/Jumpy-Ball'
  },
  {
    image: battleshipImage,
    title: 'Battleship',
    description: 'A web version of the classic game of Battleship. A dynamic pass and play game created with HTML, CSS, and JavaScript.',
    githubUrl: 'https://github.com/DomCampese/battleship'
  },
  {
    image: chatioImage,
    title: 'Chat.io',
    description: 'A website that allows a user to create, join, and participate in real-time chatrooms. Leverages HTML, CSS, and JavaScript on the frontend and the Flask (Python) backend framework on the server side.',
    githubUrl: 'https://github.com/DomCampese/Chat.io'
  }
]

export const skills = [
  {
    Logo: ReactLogo,
    name: 'React'
  },
  {
    Logo: TSLogo,
    name: 'TypeScript'
  },
  {
    Logo: HTMLLogo,
    name: 'HTML 5'
  },
  {
    Logo: CSSLogo,
    name: 'CSS 3'
  },
  {
    Logo: DotNetLogo,
    name: 'ASP .NET Core'
  },
  {
    Logo: CSharpLogo,
    name: 'C Sharp'
  },
  {
    Logo: JavaLogo,
    name: 'Java'
  },
  {
    Logo: PythonLogo,
    name: 'Python 3'
  },
  {
    Logo: FlaskLogo,
    name: 'Flask'
  },
  {
    Logo: CLogo,
    name: 'C Language'
  },
]