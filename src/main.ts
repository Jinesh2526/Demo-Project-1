import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppleComponent } from './apple/apple.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,AppleComponent],
  template: `
  <app-apple></app-apple>
  `,
})
export class App {
  name = 'Jinesh';
}

bootstrapApplication(App);
