
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="p-10">
    <app-login></app-login>
    <hr class="my-10"/>
    <app-edit-profile></app-edit-profile>
  </div>
  `
})
export class AppComponent {}
