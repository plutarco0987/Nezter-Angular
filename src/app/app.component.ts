
import { NgxSoapService,Client, ISoapMethodResponse } from 'ngx-soap';
import { User, UserObject } from 'src/Object/User';
import { Component, Injectable } from '@angular/core';


const listUsersConst: User[]=[
  {
  ID:1,
  Name:'Plutarco',
  Address:'Pcherman 42',
  CellPhone:123456787,
  ZipCode:123123123
  },
  {
    ID:2,
    Name:'Plutarco',
    Address:'Pcherman 43',
    CellPhone:123456787,
    ZipCode:123123123
    },
    {
      ID:3,
      Name:'Plutarco',
      Address:'Pcherman 44',
      CellPhone:123456787,
      ZipCode:123123123
      },
      {
        ID:4,
        Name:'Plutarco',
        Address:'Pcherman 45',
        CellPhone:123456787,
        ZipCode:123123123
        },
        {
          ID:5,
          Name:'Plutarco',
          Address:'Pcherman 42',
          CellPhone:123456787,
          ZipCode:123123123
          },
          {
            ID:6,
            Name:'Plutarco',
            Address:'Pcherman 42',
            CellPhone:123456787,
            ZipCode:123123123
            },
            {
              ID:7,
              Name:'Plutarco',
              Address:'Pcherman 42',
              CellPhone:123456787,
              ZipCode:123123123
              },
              {
                ID:8,
                Name:'Plutarco',
                Address:'Pcherman 42',
                CellPhone:123456787,
                ZipCode:123123123
                },
                {
                  ID:9,
                  Name:'Plutarco',
                  Address:'Pcherman 42',
                  CellPhone:123456787,
                  ZipCode:123123123
                  },
                  {
                    ID:10,
                    Name:'Plutarco',
                    Address:'Pcherman 42',
                    CellPhone:123456787,
                    ZipCode:123123123
                    },
                    {
                      ID:11,
                      Name:'Plutarco',
                      Address:'Pcherman 42',
                      CellPhone:123456787,
                      ZipCode:123123123
                      }
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NgxSoapService]
})  
@Injectable()
export class AppComponent  {
  title = 'AngularExam';
  client: Client;   
  listUsers: User[];
  selectedUser:UserObject;

  page = 1;
  pageSize = 4;

  RowSelected(user:any){
    this.selectedUser=user;
    this.selectedUser.Flag= !this.selectedUser.Flag;
    }
  refreshCountries() {
    this.listUsers = listUsersConst
      .map((Address, i) => ({id: i + 1, ...Address}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  constructor(private soap: NgxSoapService) {   
    this.selectedUser= new UserObject();
    this.selectedUser.ID=0;
    this.selectedUser.Name="";
    this.selectedUser.Address="";
    this.selectedUser.CellPhone=0;
    this.selectedUser.ZipCode=0;

    this.refreshCountries();   
    this.soap.createClient('/assets/UserWebService.wsdl').then(client => this.client = client);
    console.log(this.client);
    //this.GetAll();
    
  }


  GetAll() {
    (<any>this.client).subscribe((res: ISoapMethodResponse) => this.listUsers = res.result.getAll);
    }


}
