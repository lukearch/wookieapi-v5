import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  get device(): string {
    return window.innerWidth <= 768 ? 'mobile' : 'desktop'
  }
}
