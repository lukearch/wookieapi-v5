import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public route: string
  public links = [
    {
      name: 'Home',
      route: '/',
      external: false
    },
    {
      name: 'Documentation',
      route: '/documentation',
      external: false
    },
    {
      name: 'About',
      route: '/about',
      external: false
    },
    {
      name: 'Github',
      route: 'https://github.com/lukearch',
      external: true
    }
  ]

  constructor(private router: Router) {
    this.route = ''
  }

  ngOnInit(): void {
    this.getRoute()
  }

  getRoute(): void {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.route = route.url
      }
    })
  }
}
