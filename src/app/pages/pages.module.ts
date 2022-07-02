import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { PageRoutingModule } from './pages-routing.module'

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [CommonModule, PageRoutingModule, SharedModule]
})
export class PagesModule {}
