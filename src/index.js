import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Menu from './pages/menu';
import Contact from './pages/contact';

function render() {
  const content = document.getElementById('content');

  const nav = document.createElement('ul');
  nav.classList.add('nav', 'nav-pills', 'bg-success');

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

  li1.appendChild(link1);
  li2.appendChild(link2);
  li3.appendChild(link3);

  nav.append(li1, li2, li3);
  content.appendChild(nav);

  document.getElementById('content').appendChild(nav);
}

render();
