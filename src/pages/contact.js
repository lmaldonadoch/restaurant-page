const Contact = (() => {
  const content = document.getElementById('content');
  const contactRender = () => {
    const navLinks = document.getElementsByClassName('nav-link');
    [...navLinks].forEach((link) => {
      link.className = link.className.replace('active', '');
    });
    document.getElementById('contact').classList.add('active');

    const container = document.getElementById('container');
    if (container) {
      container.parentNode.removeChild(container);
    }

    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'container');

    const contactCard = document.createElement('div');

    contactCard.classList.add(
      'd-flex',
      'flex-column',
      'justify-content-center',
      'home-description',
      'contact-details',
    );

    const phoneContainer = document.createElement('div');
    const emailContainer = document.createElement('div');
    phoneContainer.classList.add('d-flex', 'align-items-baseline');
    emailContainer.classList.add('d-flex', 'align-items-baseline');

    const phone = document.createElement('i');
    const email = document.createElement('i');
    phone.classList.add('fas', 'fa-phone-square');
    email.classList.add('fas', 'fa-envelope');

    const phoneText = document.createElement('p');
    const emailText = document.createElement('p');
    phoneText.innerHTML = '877-956-2857';
    emailText.innerHTML = 'customerservice@sushiroyal.com';
    phoneText.classList.add('contact-paragraph');
    emailText.classList.add('contact-paragraph');
    phoneContainer.append(phone, phoneText);
    emailContainer.append(email, emailText);

    contactCard.append(phoneContainer, emailContainer);

    const map = document.createElement('img');
    map.setAttribute('src', '../assets/images/map.png');
    map.classList.add('map');

    contactContainer.append(contactCard, map);

    content.appendChild(contactContainer);
  };

  return { contactRender };
})();

export default Contact;
