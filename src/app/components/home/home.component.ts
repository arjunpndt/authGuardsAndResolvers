import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activeroute: ActivatedRoute = inject(ActivatedRoute);
  loggedInUser: string | undefined;
  user: string | undefined;
  ngOnInit(): void {
    this.loggedInUser = this.activeroute.snapshot.queryParams['user'];
    console.log(this.loggedInUser);
    this.user = this.loggedInUser;
  }
}
