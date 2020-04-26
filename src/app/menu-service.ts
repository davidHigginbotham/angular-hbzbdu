import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class MenuService {
  private products: any[] = [];

  constructor(
    private http: HttpClient,
    private logger: Logger) { }

  getProducts() {
    this.http.get..getAll(Product).then( (products: Product[]) => {
      this.logger.log(`Fetched ${products.length} products.`);
      this.products.push(...products); // fill cache
    });
    return this.products;
  }
}