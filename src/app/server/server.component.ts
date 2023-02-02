import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
   serverId:number = 200;
   serverStatus:string = "Active";

   userName = '';

   submitUser(){
     this.userName = '';
   }
}
