import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{

  y = []
  exibirDoacao (doacao){
    this.y = [doacao, ...this.y]
    console.log(doacao)
  }
}
