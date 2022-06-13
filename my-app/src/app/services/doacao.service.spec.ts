/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DoacaoService} from './doacao.service';

describe('Service: Doacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoacaoService]
    });
  });

  it('should ...', inject([DoacaoService], (service: DoacaoService) => {
    expect(service).toBeTruthy();
  }));
});