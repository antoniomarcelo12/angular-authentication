import { TesteComponent } from './teste/teste/teste.component';
import { GetClientComponent } from './components/get-client/get-client.component';
import { VisaoGeralComponent } from './components/visao-geral/visao-geral.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponent } from './account/authentication/authentication.component';
import { AuthGuard } from './account/shared/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'visao-geral', component: VisaoGeralComponent  },
      { path: 'get-client/:id', component: GetClientComponent  },
      { path: 'get-client/teste', component: TesteComponent  },
      { path: 'dashboard', component: TesteComponent  },
      { path: 'vpn-lock', component: TesteComponent  },
      { path: 'assignment', component: TesteComponent  },
      { path: 'theaters', component: TesteComponent  },
      { path: 'mobile-friendly', component: TesteComponent  },
      { path: 'network-check', component: TesteComponent  },
      { path: 'settings', component: TesteComponent  },
      { path: 'people', component: TesteComponent  },
      { path: 'business', component: TesteComponent  }
    ],
    canActivate: [AuthGuard]
  }, 
    {
      path: '', component: AuthenticationComponent,
      children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent }
      ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
