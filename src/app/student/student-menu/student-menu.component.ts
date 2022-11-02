import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.scss']
})
export class StudentMenuComponent implements OnInit {

  constructor() { }

  menuItems: string[] = ['Update Details', 'View Attendance', 'View Classnote', 'Change Password', 'Reset Password'];

  ngOnInit(): void {
  }



}
