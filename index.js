//  FUNCTIONALITY FOR MOBILE MENU

const menu = document.querySelector('.fa-bars');
const mobLinks = document.querySelectorAll('.links');
const mobMenu = document.querySelector('.mobile');
const closeBtn = document.querySelector('.fa-times');

menu.addEventListener('click', () => {
  mobMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  mobMenu.classList.add('hidden');
});

for (let i = 0; i < mobLinks.length; i++) {
  mobLinks[i].addEventListener('click', () => {
    mobMenu.classList.add('hidden');
  });
}

//  DATA FOR DYNAMICALLY CREATING PROJECT CARDS

const projects = [{
    id: 1,
    name: 'Conference Website',
    image: 'images/conference.png',
    desc: 'This project is a tech conference website that is aimed at bringing developers from all around the globe together. Users will be able to view the date and location of the event, access guest speaker\'s informaton and get information about upcoming events.',
    lang: ['Html', 'Css', 'Javascript'],
    live: 'https://devtiwo.github.io/Capstone-1/index.html',
    source: 'https://github.com/Devtiwo/Capstone-1',
  },
  {
    id: 2,
    name: 'Reddit client app',
    image: 'images/sample.png',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    lang: ['React', 'Redux', 'Ruby'],
    live: 'https://devtiwo.github.io/Portfolio',
    source: 'https://github.com/Devtiwo/Portfolio',
  },
  {
    id: 3,
    name: 'Portfolio project app',
    image: 'images/sample.png',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    lang: ['html', 'bootstrap', 'Ruby'],
    live: 'https://devtiwo.github.io/Portfolio',
    source: 'https://github.com/Devtiwo/Portfolio',
  },
  {
    id: 4,
    name: 'Random quote generator',
    image: 'images/sample.png',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    lang: ['html', 'bootstrap', 'Ruby'],
    live: 'https://devtiwo.github.io/Portfolio',
    source: 'https://github.com/Devtiwo/Portfolio',
  },
  {
    id: 5,
    name: 'E-commerce app',
    image: 'images/sample.png',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    lang: ['html', 'bootstrap', 'Ruby'],
    live: 'https://devtiwo.github.io/Portfolio',
    source: 'https://github.com/Devtiwo/Portfolio',
  },
  {
    id: 6,
    name: 'full stack application',
    image: 'images/sample.png',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    lang: ['html', 'bootstrap', 'Ruby', 'Css', 'sass'],
    live: 'https://devtiwo.github.io/Portfolio',
    source: 'https://github.com/Devtiwo/Portfolio',
  },
];

//   CREATING PROJECT CARDS

const cardWrap = document.querySelector('.project-cards');
for (let i = 0; i < projects.length; i++) {
  const card = document.createElement('article');
  card.className = 'cards';
  const cardInfo = `
  <h2>${projects[i].name}</h2>
  <p>${projects[i].desc}</p>
  <button id="${projects[i].id}" class="see-btn">see project</button>
  `;
  card.innerHTML = cardInfo;
  cardWrap.appendChild(card);
}

// POPPING UP THE MODAL AFTER CLICKING EACH SEE PROJECT BUTTON

document.querySelectorAll('.see-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const project = projects.find((p) => p.id === Number(btn.id));
    document.querySelector('#project-name').innerHTML = project.name;
    let languages = '';
    project.lang.forEach((tech) => {
      languages += `<li>${tech}</li>`;
    });
    document.querySelector('#lang').innerHTML = languages;
    document.querySelector('#projectImage').setAttribute('src', project.image);
    document.querySelector('#projectDesc').innerHTML = project.desc;
    document.querySelector('#liveLink').setAttribute('href', project.live);
    document.querySelector('#sourceCode').setAttribute('href', project.source);

    document.querySelector('.modal').style.display = 'block';
  });
});

//  CLOSING THE MODAL

document.querySelector('#close').addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});

// FORM VALIDATION

const form = document.getElementById('contact-form');
const fName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errMsg = document.querySelector('.err');

form.addEventListener('submit', (e) => {
  if (fName.value === '' || email.value === '' || message.value === '') {
    errMsg.textContent = '*All fields are required!';
    e.preventDefault();
  } 
  else {
    errMsg.textContent = '';
  }
})

// IMPLEMENTING LOCAL STORAGE FUNCTIONALITY

const store = () => {
  const localName = fName.value;
  const localEmail = email.value;
  const localMsg = message.value;

  localStorage.setItem('name', localName);
  localStorage.setItem('email', localEmail);
  localStorage.setItem('message', localMsg);
}

const prefill = () => {
  fName.value += localStorage.getItem('name');
  email.value += localStorage.getItem('email');
  message.value += localStorage.getItem('message');
}

if (localStorage.getItem('name')) {
  prefill();
} else {
  store();
}

fName.onchange = store;
email.onchange = store;
message.onchange = store;

form.addEventListener('submit', store, prefill);