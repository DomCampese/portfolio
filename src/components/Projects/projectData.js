/* Each object is rendered as one project card in the projects component */

import journalerImage from '../../images/journaler.png'
import jumpyballImage from '../../images/jumpyball.png'
import chatioImage from '../../images/chatio.png'

export const projectData = [
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
    image: chatioImage,
    title: 'Chat.io',
    description: 'A website that allows a user to create, join, and participate in real-time chatrooms. Leverages HTML, CSS, and vanilla JavaScript on the frontend and the Flask (Python) backend framework on the server side.',
    githubUrl: 'https://github.com/DomCampese/Chat.io'
  }
]