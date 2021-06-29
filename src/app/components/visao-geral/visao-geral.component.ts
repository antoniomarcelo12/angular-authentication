import { AccountService } from '../../account/shared/account.service';
import { Component, OnInit } from '@angular/core';
// import { Client } from 'src/app/account/clients.model';

@Component({
  selector: 'app-visao-geral',
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.css']
})
export class VisaoGeralComponent implements OnInit {
  

  // clients: Client[];
  clients
  displayedColumns = ['id', 'name'];
  
  constructor(private accountService: AccountService) { }
  arrayClients = []

  ngOnInit(): void {
    this.accountService.read().subscribe(clients => {
      this.clients = clients;
      
      console.log(clients)
    })
  }
  


}
