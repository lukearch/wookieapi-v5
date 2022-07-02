import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DocumentationRoutingModule } from './documentation-routing.module'
import { GettingStartedComponent } from './getting-started/getting-started.component'

@NgModule({
  declarations: [GettingStartedComponent],
  imports: [CommonModule, DocumentationRoutingModule]
})
export class DocumentationModule {}
