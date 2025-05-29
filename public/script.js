// ******************menu***************************
const btnAdd = document.querySelectorAll('.btn[data-bs-target]');
  const allMenus = document.querySelectorAll('.first');

  btnAdd.forEach(btn => {
    btn.addEventListener('click', () => {
      allMenus.forEach(menu => menu.style.display = 'none');

      const targetId = btn.getAttribute('data-bs-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.style.display = 'block';
      }
    });
  });

  const btnCloseList = document.querySelectorAll('.close');

  btnCloseList.forEach(closeEl => {
    closeEl.addEventListener('click', (e) => {
      const parentMenu = e.target.closest('.first');
      if (parentMenu) {
        parentMenu.style.display = 'none';
      }
      e.stopPropagation(); 
    });
  });
  // ****************testimonial

  let list = document.querySelector('.slider .list');
        let items = document.querySelectorAll('.slider .list .item');
        let dots = document.querySelectorAll('.slider .dots li');
        let prev = document.getElementById('prev');
        let next = document.getElementById('next');
        let active = 0;
        let lengthItems = items.length - 1;

        next.onclick = function () {
            active = (active + 1 > lengthItems) ? 0 : active + 1;
            reloadSlider();
        };

        prev.onclick = function () {
            active = (active - 1 < 0) ? lengthItems : active - 1;
            reloadSlider();
        };

        let refreshSlider = setInterval(() => { next.click() }, 3000);

        function reloadSlider() {
            let checkLeft = items[active].offsetLeft;
            list.style.left = -checkLeft + 'px';

            document.querySelector('.slider .dots li.active')?.classList.remove('active');
            dots[active].classList.add('active');

            clearInterval(refreshSlider);
            refreshSlider = setInterval(() => { next.click() }, 3000);
        }

        dots.forEach((li, key) => {
            li.addEventListener('click', function () {
                active = key;
                reloadSlider();
            });
        });