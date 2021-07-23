import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  p:any=1;
  t1:string="";
  t2:string="";
  updateCity:string="";
  updateName:string="";
  tableData:any;
  updateId:any;
  searchKey:string="";
  constructor(private http:HttpClient) { 
    this.tableData=[];
    this.getData(null);
    this.updateId="";
  }
  ngOnInit(): void {
  }

  create=()=>{
    //this.http.post("http://localhost:1000/"+(this.btntext === "Update"?"update":"create"),{
    this.http.post("http://localhost:1000/create",{
      name:this.t1,
      city:this.t2,
      id:this.updateId
    }).subscribe(dt =>{console.log(dt);this.getData(null);})
    this.t1=this.t2=this.updateId="";
  }
  update=()=>{
    this.http.post("http://localhost:1000/update",{
      name:this.updateName,
      city:this.updateCity,
      id:this.updateId
    }).subscribe(dt =>{console.log(dt);this.getData(null);})
    this.updateName=this.updateCity=this.updateId="";
  }
  updateCancel=()=>{
    this.updateName=this.updateCity=this.updateId="";
  }
  getData = (e:any)=>{
    this.http.get("http://localhost:1000/getdata").subscribe(dt=>this.tableData=dt);
  }
  delete = (id:any) =>{
    this.http.post("http://localhost:1000/delete",{
      id:id
    }).subscribe(dt =>{console.log(dt);this.getData(null);});
  }
  populate = (data:any)=>{
    this.updateName = data.name;
    this.updateCity = data.city;
    this.updateId=data.id;
  }
}
