import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ["accessory", "watch", "phone", "computer"];
  showCategories = false;

  constructor(private router: Router) {
    this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      // Теперь TypeScript точно знает, что event имеет тип NavigationEnd, благодаря Type Guard
      this.showCategories = event.url === '/' || event.url === '/home';
    });
  }
}
