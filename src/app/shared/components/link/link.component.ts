import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { Link } from '../../interfaces/link'
import { DevicesService } from '../../services/devices.service'

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  public currentRoute: string
  public device: string
  public isOpen: boolean
  @Input() public link: Link

  constructor(private router: Router, private devicesService: DevicesService) {
    this.link = {
      name: '',
      route: '',
      external: false
    }
    this.currentRoute = ''
    this.isOpen = false
    this.device = this.devicesService.device
  }

  @HostListener('window: resize')
  onResize(): void {
    this.device = this.devicesService.device
  }

  ngOnInit() {
    this.getRoute()
  }

  getRoute(): void {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentRoute = route.url
      }
    })
  }

  checkIfIsActive(): boolean {
    const active = this.link.sublinks?.find(
      (link) => link.route === this.currentRoute
    )
    if (active) {
      return true
    }
    return false
  }

  openDropdown(el: HTMLDivElement): void {
    this.isOpen = !this.isOpen
    if (!el.classList.contains('open')) {
      el.style.height = el.children[0].clientHeight + 'px'
    } else {
      el.style.height = '0px'
    }
  }
}
