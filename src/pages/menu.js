const Menu = (() => {
  const content = document.getElementById('content');
  const menuRender = () => {
    const navLinks = document.getElementsByClassName('nav-link');
    [...navLinks].forEach((link) => {
      link.className = link.className.replace('active', '');
    });
    document.getElementById('menu').classList.add('active');

    const container = document.getElementById('container');
    if (container) {
      container.parentNode.removeChild(container);
    }

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'container');
    menuContainer.classList.add(
      'container-fluid',
      'row',
      'justify-content-center'
    );

    for (let i = 0; i < 6; i++) {
      let menuCard = document.createElement('div');
      menuCard.classList.add('card', 'col-12', 'col-sm-5', 'col-md-3', 'm-3');
      menuCard.setAttribute('id', 'card');

      let image = document.createElement('img');
      image.setAttribute('id', `img-${i}`);
      image.classList.add('card-img-top');
      menuCard.appendChild(image);

      let cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      let para = document.createElement('p');
      para.classList.add('card-text');
      para.setAttribute('id', `card-${i}`);

      let price = document.createElement('strong');
      price.innerHTML = '$9.99';
      price.classList.add(['price', 'align-self-end']);

      cardBody.appendChild(para);
      cardBody.appendChild(price);
      menuCard.appendChild(cardBody);

      menuContainer.appendChild(menuCard);
    }

    content.appendChild(menuContainer);

    console.log(menuContainer);

    const image1 = document.getElementById('img-0');
    console.log(image1);
    image1.setAttribute(
      'src',
      'https://video-images.vice.com/_uncategorized/1542388763655-MR4.jpeg'
    );

    const image2 = document.getElementById('img-1');
    image2.setAttribute(
      'src',
      'https://static.zyda.com/cdn-cgi/image/w=300,quality=85,f=auto,metadata=none/photos/menu_items/photo_urls/7d717f4e-0f6c-11e9-a313-023de5d13960/original/LASAGNA-MAKI_6358718_635930403818667415.jpg?1567950040'
    );

    const image3 = document.getElementById('img-2');
    image3.setAttribute(
      'src',
      'https://img.ohmymag.com/article/1280/cuisine/maki-de-paella_558279d5e534d9f815a94f084350579e08e396a4.jpg'
    );

    const image4 = document.getElementById('img-3');
    image4.setAttribute(
      'src',
      'https://static.wixstatic.com/media/bf0357_d7856574e9984e498aa2ac94dcc1fa7d.png/v1/fill/w_378,h_223,al_c,q_85,usm_0.66_1.00_0.01/bf0357_d7856574e9984e498aa2ac94dcc1fa7d.webp'
    );

    const image5 = document.getElementById('img-4');
    image5.setAttribute(
      'src',
      'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/52146396_2124438514292172_8225984290312159232_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_eui2=AeFZbQbdwosM0gwyCQiuRYxRW3z41BVg20lbfPjUFWDbSfuovNm8RMcLERtKdelnX80&_nc_ohc=r2q1Msb5E4UAX_X0nvm&_nc_ht=scontent.fgdl5-2.fna&oh=f484e95910d5ecdd53565269bed0c6c4&oe=5F10137E'
    );

    const image6 = document.getElementById('img-5');
    image6.setAttribute(
      'src',
      'https://images.squarespace-cdn.com/content/v1/58992b88f7e0ab73329b13b9/1588566487713-Q34WM4XZRBTP5D93W41Z/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/Garlic+Bomb+Maki.jpg?format=2500w'
    );

    const para1 = document.getElementById('card-0');
    para1.innerHTML =
      'Mexican style pastor with chopped onion and coriander in the inside. Fried rice on the outside wrapped with tortilla, fried and topped with our famous Mexican salsa.';

    const para2 = document.getElementById('card-1');
    para2.innerHTML =
      'Bolognese meat inside, Italian-seasoned rice on the outside, wrapped with homemade lasagna pasta and dressed with our 5 cheese grilled sauce. ';

    const para3 = document.getElementById('card-2');
    para3.innerHTML =
      'Seafood and sausage inside, paella rice on the outside, wrapped with Iberic jam. All the flavor from Spain in a Japanese dish.';

    const para4 = document.getElementById('card-3');
    para4.innerHTML =
      'Melon pearls and camembert cheese on the inside, rice on the outside, wrapped with prosciutto. The freshest roll we offer, perfect for hot days.';

    const para5 = document.getElementById('card-4');
    para5.innerHTML =
      'Rib Eye inside with gouda cheese, rice on the outside, fried, and grilled with manchego cheese on top.';

    const para6 = document.getElementById('card-5');
    para6.innerHTML =
      'A more conventional roll. Avocado and cucumber inside, rice outside, wrapped with grilled salmon, and topped with tobiko.';
  };

  return { menuRender };
})();

export default Menu;
