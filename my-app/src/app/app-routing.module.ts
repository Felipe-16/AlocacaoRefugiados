import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoDoacaoComponent } from './extrato-doacao/extrato-doacao.component';
import { TransferenciaDoacaoComponent } from './transferencias-doacao/transferencias-doacao.component';

const routes: Routes = [
  {path: '', redirectTo: 'abrigo', pathMatch: 'full'},
  {path: 'extrato-doacao', component: ExtratoDoacaoComponent},
  {path: 'transferencias-doacao', component: TransferenciaDoacaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
