import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Home from './pages/home';
import Menu from './pages/menu';
import Contact from './pages/contact';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

function render() {
  const content = document.getElementById('content');

  const nav = document.createElement('ul');
  nav.classList.add('nav', 'nav-pills', 'bg-success', 'w-100');

  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');

  [li1, li2, li3].forEach((li) => {
    li.classList.add('nav-item');
  });

  const link1 = document.createElement('a');
  const link2 = document.createElement('a');
  const link3 = document.createElement('a');

  link1.onclick = Home.homeRender;
  link2.onclick = Menu.menuRender;
  link3.onclick = Contact.contactRender;

  link1.innerHTML = 'Home';
  link2.innerHTML = 'Menu';
  link3.innerHTML = 'Contact us';

  [link1, link2, link3].forEach((link) => {
    link.classList.add('nav-link', 'text-light');
  });
  link1.classList.add('active');
  link1.setAttribute('id', 'home');
  link2.setAttribute('id', 'menu');
  link3.setAttribute('id', 'contact');

  li1.appendChild(link1);
  li2.appendChild(link2);
  li3.appendChild(link3);

  nav.append(li1, li2, li3);
  content.appendChild(nav);

  const imageDiv = document.createElement('div');
  imageDiv.classList.add(
    'd-flex',
    'w-100',
    'justify-content-center',
    'logo-container',
    'my-3'
  );
  content.appendChild(imageDiv);

  const footer = document.createElement('footer');
  footer.classList.add(
    'w-100',
    'd-flex',
    'bg-success',
    'justify-content-between',
    'align-items-center'
  );

  const imageDivFooter = document.createElement('div');
  imageDivFooter.classList.add('logo-container');
  footer.appendChild(imageDivFooter);

  const disclaimer = document.createElement('p');
  disclaimer.classList.add('disclaimer', 'text-center', 'text-light');
  disclaimer.innerHTML =
    'All images come from different pages; they belong to the restaurants. The images are for educational purposes only.';

  footer.appendChild(disclaimer);

  const socialContainer = document.createElement('div');
  socialContainer.classList.add(
    'social-container',
    'd-flex',
    'justify-content-between'
  );

  const linkedin = document.createElement('a');
  linkedin.classList.add('social-link');
  linkedin.setAttribute('href', 'https://www.linkedin.com/in/lmaldonadoch/');
  const linkedinIcon = document.createElement('i');
  linkedinIcon.classList.add('fab', 'fa-linkedin-in');
  linkedin.appendChild(linkedinIcon);

  const github = document.createElement('a');
  github.classList.add('social-link');
  github.setAttribute('href', 'https://github.com/lmaldonadoch');
  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fab', 'fa-github-square');
  github.appendChild(githubIcon);

  const twitter = document.createElement('a');
  twitter.classList.add('social-link');
  twitter.setAttribute('href', 'https://twitter.com/LuisAngelMCh');
  const twitterIcon = document.createElement('i');
  twitterIcon.classList.add('fab', 'fa-twitter-square');
  twitter.appendChild(twitterIcon);

  socialContainer.append(linkedin, github, twitter);

  footer.appendChild(socialContainer);

  console.log(document.body);
  document.body.appendChild(footer);

  Home.homeRender();
}

render();
