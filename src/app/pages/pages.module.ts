import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { PageRoutingModule } from './pages-routing.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PageRoutingModule]
})
export class PagesModule {}
