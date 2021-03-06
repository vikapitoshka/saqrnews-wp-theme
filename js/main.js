var menu = new Vue({
  el: '.header',
  data() {
    return {
      isShowMenu: false,
      isShowSearch: false
    };
  },
  methods: {
    showMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
    showSearchForm() {
      this.isShowSearch = !this.isShowSearch;
    }
  }
});

var social = new Vue({
  el: '.footer__social-list',
  data() {
    return {
      socials: [
        //{ name: 'snapchat', icon: 'fa-snapchat', link: '#' },
        //{ name: 'telegram', icon: 'fa-telegram-plane', link: '#' },
        { name: 'twitter', icon: 'fa-twitter', link: '#' },
        //{ name: 'instagram', icon: 'fa-instagram', link: '#' },
        { name: 'facebook', icon: 'fa-facebook-f', link: '#' }
      ] 
    };
  }
});

function iconDownSubmenu() {
  const hasChild = document.querySelectorAll('.menu-item-has-children > a');
  for (let i = 0; i < hasChild.length; i++) {
    let iconSortDown = document.createElement('i');
    hasChild[i].appendChild(iconSortDown);
    iconSortDown.classList.add('fas', 'fa-sort-down');
  }
};

function iconForMenuItems() {
  const menuItems = document.querySelectorAll('.header__menu-list > .menu-item');
  const iconClasses = ['fa-home', 'fa-newspaper', 'fa-futbol', 'fa-users'];
  
  for (let i = 0; i < 4; i++) { 
    icon = document.createElement('i');
    menuItems[i].insertBefore(icon, menuItems[i].children[0]);
    icon.classList.add('fas', iconClasses[i]);
  }
};

function openSubMenu(elem) {
  let display = elem.style.display;
  if (display === 'block') {
    elem.style.display = 'none';
  } else {
    elem.style.display = 'block';
  }
};

function subMenu() {
  const linkSubmenus = document.querySelectorAll('.menu-item-has-children > a');
  const submenus = document.querySelectorAll('.menu-item-has-children > .sub-menu');
  for (let i = 0; i < linkSubmenus.length; i++) {
    linkSubmenus[i].addEventListener('click', function(e) {
      e.preventDefault();
      openSubMenu(submenus[i]);
    });
  }
};

function openPeriod(period) {
  const periodBlocks = document.querySelectorAll('.horoscopes > .period-block');
  const tabs = document.querySelectorAll('.horoscopes__item > a');

  for (i = 0; i < tabs.length; i++) {
    periodBlocks[i].style.display = 'none';
    tabs[i].className = '';
  }
  periodBlocks[period].style.display = 'block';
  tabs[period].className = 'horoscopes__item_active';
}

document.addEventListener('DOMContentLoaded', function() {
  iconDownSubmenu();
  subMenu();
  iconForMenuItems();
});


