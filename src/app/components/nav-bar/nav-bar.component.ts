import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  // title = 'Employees Management System';
  activeTitle: string = '';

  constructor(private router: Router, private titleService: Title) {
    this.updateTitle(); // Ενημέρωση τίτλου κατά την αρχική φόρτωση
    this.router.events.subscribe(() => {
      this.updateTitle(); // Ενημέρωση τίτλου σε κάθε αλλαγή διαδρομής
    });
  }

  updateTitle() {
    const currentRoute = this.router.url;
    this.activeTitle = currentRoute.includes('display-users') ? 'Display Users' :
                       currentRoute.includes('register-user') ? 'Add New User' :
                       currentRoute.includes('user-list') ? 'User Details' :
                       'Home';

    this.titleService.setTitle(`${this.activeTitle} | Employees Management System`);
  }

}
