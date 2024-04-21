import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  registrationData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve data passed from registration component
    const data = this.route.snapshot.paramMap.get('data');
    if (data) {
      this.registrationData = JSON.parse(data);
    }
  }
}
