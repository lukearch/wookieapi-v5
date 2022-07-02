import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { PageRoutingModule } from './pages-routing.module'
import { SharedModule } from '../shared/shared.module'
import { DocumentationComponent } from './documentation/documentation.component'
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [HomeComponent, DocumentationComponent, AboutComponent],
  imports: [CommonModule, PageRoutingModule, SharedModule]
})
export class PagesModule {}
