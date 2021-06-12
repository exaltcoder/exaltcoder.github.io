import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  buttons: string[];

  constructor(private router: Router) {
    /*------------------0---------1-----------2-----------3-----------4-------------5--------*/
    this.buttons = ["YouTube", "GitHub", "Instagram", "Discord", "Telegram", "Udemy Coupons"];
  }

  onButtonClick(buttonIndex: number): void {
    switch (buttonIndex) {
      case 0: { window.open("https://www.youtube.com"); break; }
      case 1: { break; }
      case 2: { break; }
      case 3: { break; }
      case 4: { break; }
      case 5: {
        this.router.navigate(['/misc/udemy-coupons']);
        break;
      }
    }
  }

}
