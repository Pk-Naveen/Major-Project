import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit{
  constructor(private router: Router) {
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

  }

}
