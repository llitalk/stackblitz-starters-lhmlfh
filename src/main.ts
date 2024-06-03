import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { count } from 'rxjs';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <h1>Signals</h1>
    <p>signals are for state managment</p>
    <p>signals  = data + some update finction for the data and subscription for changes</p>
    <p> all that subscrobe will notify where there was a change</p>
    the sigalne is wrapping a balue to trck when the value change and notify the subscribers 


    <div>{{count}}</div>
  `,
})
export class App {
  name = 'Angular';

  // signal function with the signal's initial value:
   count = signal(0);

   //if we want to change the value .set() or update
  //  count.set(3);
  //count.update(value => value + 1)
}

bootstrapApplication(App);
