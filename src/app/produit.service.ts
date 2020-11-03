import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produit } from './produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl ="http://localhost:8082/SpringMVC/produits";
 
  constructor(private http: HttpClient) { }
  AfficherProduits(): Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.baseUrl}`);
  }
  ajouterproduit(produit: Produit):Observable<object>{
    return this.http.post(`${this.baseUrl}`,produit);
  }
  AfficherProduitById(id: BigInteger): Observable<Produit>{
    return this.http.get<Produit>(`${this.baseUrl}/${id}`);
  }
  ModifierProduit(id: BigInteger, produit: Produit): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, produit);
  }
  SupprimerProduit(id: BigInteger):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
