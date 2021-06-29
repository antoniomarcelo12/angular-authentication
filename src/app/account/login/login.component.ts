import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login = {
    username: '',
    password: ''
  };

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.login);
      if (result) {
      console.log(`Login efetuado. ${result}`);
      this.router.navigate([''])
    } else {
        var content = document.querySelector('.erro').innerHTML = ("Login ou senha incorretos. Tente novamente")
          }
    } catch(error) {
      console.log(error)
    }
  }

}

