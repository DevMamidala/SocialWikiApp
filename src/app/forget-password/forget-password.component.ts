import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  public var_one: string;
  constructor() {
        this.var_one = "This is for forgotten password "
   }

  ngOnInit(): void {
  }

}
