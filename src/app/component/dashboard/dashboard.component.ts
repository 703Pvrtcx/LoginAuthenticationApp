import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from "../../service/authenticate.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthenticateService, private router: Router) { }

  ngOnInit(): void {
  }

}
