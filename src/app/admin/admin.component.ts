import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  onSubmit(employeeForm: NgForm) {
    // if (employeeForm.value.$key == null)
    //   this.dataService.saveCulturals(employeeForm.value);
  }
}
