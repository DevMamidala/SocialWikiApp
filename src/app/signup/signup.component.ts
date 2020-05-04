import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SharedService} from "../shared.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signUpForm: FormGroup;
  isSubmitClicked: boolean = false;
  
  constructor(private fb: FormBuilder,
              private sharedSvc: SharedService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['',[Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      password: ['',[Validators.required]],
      cpassword :['',[Validators.required]],
      mem_name :['',[Validators.required]],
      gender:['',[Validators.required]],
      contactnum:['',[Validators.required]],
      contactnum2 : [''],

    });
  }

  onSubmit(){
    this.isSubmitClicked = true;
    this.sharedSvc.postSignUp(this.isSubmitClicked ).subscribe((result:any)=>{
      if (result && result.status && result.status === 'success')  {
        // this.listData = result.data;
      }
  })
  }
}

