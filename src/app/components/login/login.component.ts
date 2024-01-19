import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}
  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit = () => {
    console.log('loged In', this.loginForm.value);

    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['/home'], {
            queryParams: { user: this.loginForm.value.username },
          });
        },
        (error: Error) => {
          alert(error.message);
        }
      );
    }
    // this.router;
    // if (username == 'admin') {
    //   this.router.navigate(['/admin'], {
    //     queryParams: { user: username },
    //   });
    // } else if (username != '') {
    //   this.router.navigate(['/home'], {
    //     queryParams: { user: username },
    //   });
    // } else {
    //   alert('Enter Valid ');
    // }
  };
}
