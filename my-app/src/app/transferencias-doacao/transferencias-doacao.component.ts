import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DoacaoService } from '../services/doacao.service';

@Component({
  selector: 'app-transferencias-doacao',
  templateUrl: './transferencias-doacao.component.html',
  styleUrls: ['./transferencias-doacao.component.css'],
})
export class TransferenciaDoacaoComponent {
  @Output() aoDoar = new EventEmitter<any>();

  valor: number;

  constructor(private service: DoacaoService, private router: Router) { }

  doar() {
    console.log('Doação feita com sucesso');
    const valorDoacao = { valor: this.valor };
    this.aoDoar.emit(valorDoacao);

    this.service.adicionar(valorDoacao).subscribe((resultado) => {
      console.log(resultado);
      this.router.navigateByUrl('extrato-doacao');
    },
      (error) => console.error(error));
  }


}