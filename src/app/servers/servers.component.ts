import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer = false;
    serverStartStatus = "Not create server";
    serverName = 'Hello';
    constructor() {
      setTimeout(() => {
        this.allowNewServer = true
      }, 2000);
    }

    createServer(){
      this.serverStartStatus = "Server has been created!";
    }

  onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value
  }
}
