import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbrigoComponent } from './abrigo/abrigo.component';
import { ExtratoDoacaoComponent } from './extrato-doacao/extrato-doacao.component';
import { HomeComponent } from './home/home.component';
import { TransferenciaDoacaoComponent } from './transferencias-doacao/transferencias-doacao.component';

const routes: Routes = [
  {path: '', redirectTo: 'extrato-doacao', pathMatch: 'full'},
  {path: 'abrigo', component: AbrigoComponent},
  {path: 'extrato-doacao', component: ExtratoDoacaoComponent},
  {path: 'transferencias-doacao', component: TransferenciaDoacaoComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
