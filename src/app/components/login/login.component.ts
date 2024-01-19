import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  login = (username: string) => {
    console.log('loged In');
    this.router;
    if (username == 'admin') {
      this.router.navigate(['/admin'], {
        queryParams: { user: username },
      });
    } else if (username != '') {
      this.router.navigate(['/home'], {
        queryParams: { user: username },
      });
    } else {
      alert('Enter Valid ');
    }
  };
}
