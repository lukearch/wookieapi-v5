import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ContainerComponent } from './components/container/container.component'
import { HeaderComponent } from './components/header/header.component'
import { LinkComponent } from './components/link/link.component'
import { MenuButtonComponent } from './components/menu-button/menu-button.component'
import { PageComponent } from './components/page/page.component'
import { SideMenuComponent } from './components/side-menu/side-menu.component'

@NgModule({
  declarations: [
    HeaderComponent,
    ContainerComponent,
    MenuButtonComponent,
    LinkComponent,
    PageComponent,
    SideMenuComponent
  ],
  exports: [
    HeaderComponent,
    ContainerComponent,
    PageComponent,
    SideMenuComponent
  ],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {}
