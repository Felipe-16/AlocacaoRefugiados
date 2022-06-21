import { Component, Input, OnInit } from '@angular/core';
import { DoacaoService } from '../services/doacao.service';

@Component({
  selector: 'app-extrato-doacao',
  templateUrl: './extrato-doacao.component.html',
  styleUrls: ['./extrato-doacao.component.css'],
})
export class ExtratoDoacaoComponent {
  @Input()
  transf = []
  doacoes: any[];


  constructor(private service: DoacaoService) {}

  ngOnInit(): void {
    this.service.lista().subscribe((x) => (this.doacoes = x));
  }


}
