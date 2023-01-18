import { Component } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routs-ex';
  showHeader = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.activatedRoute.firstChild?.snapshot.data['showHeader'] !== false;
       
      }
    });
  }
  
}
