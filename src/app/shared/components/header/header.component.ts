import { Component, HostListener, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { links } from '../../../../data/link'
import { Link } from '../../interfaces/link'
import { DevicesService } from '../../services/devices.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public route: string
  public device: string
  public menuOpen: boolean
  public links: Link[]

  constructor(private router: Router, private devicesService: DevicesService) {
    this.route = ''
    this.device = ''
    this.links = links
    this.menuOpen = false
    this.device = this.devicesService.device
  }

  @HostListener('window:resize')
  onResize(): void {
    this.device = this.devicesService.device

    if (this.devicesService.device === 'desktop') {
      const page = document.getElementById('page')
      const sideMenu = document.getElementById('side-menu')

      if (page && sideMenu) {
        page.classList.remove('menu-active')
        sideMenu.classList.remove('menu-active')
        this.menuOpen = false
      }
    }
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

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen
    const page = document.getElementById('page')
    const sideMenu = document.getElementById('side-menu')
    if (page && sideMenu) {
      page.classList.toggle('menu-active')
      sideMenu.classList.toggle('menu-active')
    }
  }
}
