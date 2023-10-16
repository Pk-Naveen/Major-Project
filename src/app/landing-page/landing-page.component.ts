import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {
  }

  isDarkTheme=false;
  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('selected-theme', this.isDarkTheme? 'dark': 'light')
  }

  loader(){
    this.router.navigate(['landingPage/loading'])
  }

  ngOnInit(): void {
    // Initialization code here

    // ===================== SHOW MENU ====================
    const showMenu = (toggleId: string, navId: string) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show-menu');
        });
      }
    }

    showMenu('nav-toggle', 'nav-menu');

    // ===================== REMOVE MENU MOBILE ====================
    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) {
        navMenu.classList.remove('show-menu');
      }
    }

    navLink.forEach((n: Element) => n.addEventListener('click', linkAction));

    // ===================== SCROLL SECTIONS ACTIVE LINK ====================
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current: HTMLElement) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (sectionId) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
            if (link) {
              link.classList.add('active-link');
            }
          } else {
            const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
            if (link) {
              link.classList.remove('active-link');
            }
          }
        }
      });
    }

    window.addEventListener('scroll', scrollActive);

    // ===================== CHANGE BACKGROUND HEADER ====================
    function scrollHeader() {
      const nav = document.getElementById('header');
      if (nav) {
        if (this.scrollY >= 200) {
          nav.classList.add('scroll-header');
        } else {
          nav.classList.remove('scroll-header');
        }
      }
    }

    window.addEventListener('scroll', scrollHeader);

    // ===================== SHOW SCROLL TOP ====================
    function scrollTop() {
      const scrollTop = document.getElementById('scroll-top');
      if (scrollTop) {
        if (this.scrollY >= 560) {
          scrollTop.classList.add('show-scroll');
        } else {
          scrollTop.classList.remove('show-scroll');
        }
      }
    }

    window.addEventListener('scroll', scrollTop);

    // ===================== DARK LIGHT THEME ====================
    console.log("dark")
    const themeButton: HTMLElement= document.getElementById('theme-button');
const darkTheme: string = 'dark-theme';
const iconTheme: string = 'bx-toggle-right';

// Previously selected topic (if user selected)
const selectedTheme: string  = localStorage.getItem('selected-theme');
const selectedIcon: string  = localStorage.getItem('selected-icon');
console.log('theme-button',themeButton)

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = (): string => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = (): string => themeButton?.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton?.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton?.addEventListener('click', () => {
  console.log("cleicked")
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton?.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
  }

  ngOnDestroy(): void {
    // Cleanup code here
  }
}
