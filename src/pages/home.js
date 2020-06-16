const Home = (() => {
  const content = document.getElementById('content');
  const homeRender = () => {
    const container = document.getElementById('container');

    const navLinks = document.getElementsByClassName('nav-link');
    [...navLinks].forEach((link) => {
      link.className = link.className.replace('active', '');
    });
    document.getElementById('home').classList.add('active');

    if (container) {
      container.parentNode.removeChild(container);
    }

    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('id', 'container');

    const homeCard = document.createElement('div');

    homeCard.classList.add(
      'd-flex',
      'justify-content-center',
      'home-description',
    );

    homeCard.innerHTML = "If you love amazing Japanese cuisine, you just found your dream place. Our creative and unique rolls will blow your mind and take you to every corner of the world while tasting our awarded fusion-creations. We will take you to Mexico with one of the house favorites 'Pastor Maki', to Italy with our 'Lasagna Maki'; Spain with the famous 'Paella Maki' and so much more. Visit the menu for the full list of spectacular dishes. We hope we won't make your choice too hard. Meshiagare!";

    homeContainer.appendChild(homeCard);

    content.appendChild(homeContainer);
  };

  return { homeRender };
})();

export default Home;
