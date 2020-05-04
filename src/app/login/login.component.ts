import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  

  constructor(private fb: FormBuilder,
             private _router: Router,
             public sharedSvc: SharedService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password :['',[Validators.required]],
    });
  }

  onClickLogin(){
    this.sharedSvc.userLogin(this.loginForm.value).subscribe((result:any)=>{
      if (result && result.status && result.status === 'success')  {
        // this.listData = result.data;
      }
  })
  }

}
