import { Component } from '@angular/core'
import { links } from '../../../../data/link'
import { Link } from '../../interfaces/link'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  public links: Link[]

  constructor() {
    this.links = links
  }
}
