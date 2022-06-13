import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doacao } from '../models/doacao.model';

@Injectable({
  providedIn: 'root',
})
export class DoacaoService {
  private listaDoacao: any[];
  private url = 'http://localhost:3000/doacoes/';

  constructor(private httpClient: HttpClient) {
    this.listaDoacao = [];
  }

  get doacoes() {
    return this.listaDoacao;
  }

  adicionar(doacao: Doacao) {
    this.inserir(doacao);

    return this.httpClient.post<Doacao>(this.url, doacao);
  }

  lista() {
    return this.httpClient.get<Doacao[]>(this.url);
  }

  private inserir(doacao: Doacao) {
    doacao.data = new Date();
  }
}