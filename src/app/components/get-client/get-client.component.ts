import { AccountService } from './../../account/shared/account.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-get-client',
  templateUrl: './get-client.component.html',
  styleUrls: ['./get-client.component.css']
})
export class GetClientComponent implements OnInit {

  
  
  constructor(private accountService: AccountService, private route: ActivatedRoute) { }
  
  dataClient = []
  identificacao = ''
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.accountService.readClientInfo(id).subscribe(data => {
      this.dataClient = data;
      console.log(this.dataClient);
      this.identificacao = id
    }
    )
    
  }
}