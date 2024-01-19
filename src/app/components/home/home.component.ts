import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activeroute: ActivatedRoute = inject(ActivatedRoute);
  // loggedInUser: string | null | undefined;
  user: string | undefined | null;
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/home'], {
        queryParams: { user: localStorage.getItem('username') },
      });
    }
    this.user = localStorage.getItem('name');
    // console.log(this.loggedInUser);
    // this.user = this.auth.login().subscribe()
  }
}
