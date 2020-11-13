import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
 produits: Produit[]=[];
  nom : string;
  constructor( private produitService: ProduitService) { }


  ngOnInit(): void {
    this.getproduit();
  }
  private getproduit()
  {
    this.produitService.AfficherProduits().subscribe((data: Produit[]) =>{
      this.produits=data; 
     });
  }
  Search(){
    if (this.nom == ""){
      this.ngOnInit();
    }
    else {
    this.produits = this.produits.filter(res => {
return res.nom;



    });
    }
  }
}
