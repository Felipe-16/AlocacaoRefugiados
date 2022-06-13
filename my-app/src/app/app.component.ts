import { Component } from '@angular/core';
import { DoacaoService } from './services/doacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alocação Refugiados';
  doacao: any[] = [];

  constructor(private service: DoacaoService) {}

  doar($event) {
    this.service.adicionar($event).subscribe(x => console.log(x));
  }
}
