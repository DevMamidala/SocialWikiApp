import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public listData: any;
  public employeeData = {'employee_name':'','employee_age':'','employee_salary':'','id':'',
  'profile_image': ''};
  constructor(public sharedSvc: SharedService) { 
    this.getData();
  }

  ngOnInit() {
   
  }


  onClickSave(){
    this.sharedSvc.postEmployeeDetails(this.employeeData).subscribe((result:any)=>{
      if (result && result.status && result.status === 'success')  {
        // this.listData = result.data;
      }
  })
  }

  onClickEdit(employee){
    this.employeeData= employee;
  }

  getData(){
    this.sharedSvc.getEmployeeDetails().subscribe((result:any)=>{
      if (result && result.status && result.status === 'success')  {
        this.listData = result.data;
      }
  })
  }

}
