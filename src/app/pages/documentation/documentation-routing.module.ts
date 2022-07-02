import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GettingStartedComponent } from './getting-started/getting-started.component'

const routes: Routes = [
  {
    path: '',
    component: GettingStartedComponent
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule {}
