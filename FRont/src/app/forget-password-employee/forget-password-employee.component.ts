import { PasswordService } from './../password.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password-employee',
  templateUrl: './forget-password-employee.component.html',
  styleUrls: ['./forget-password-employee.component.css']
})
export class ForgetPasswordEmployeeComponent implements OnInit {
  message: string;
  message02: string;
  myGroup

  constructor(private router: Router, private PasswordService: PasswordService) { }

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      email: new FormControl()
    });
  }

  reset(f) {
    if (f.status != 'INVALID') {
      this.PasswordService.forgetPassword(f.value.email).subscribe(res => {
        this.message = "Please Check Your Email"
      },err=>{
        this.message = err.message

      })
    } else {
      this.message = "Please Enter Your Email"
    }
  }
}
