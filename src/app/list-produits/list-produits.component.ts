import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  produits: Produit[];
  produit: Produit;
  nom : string;
  constructor(private produitService: ProduitService,
     private router: Router ) { }

  ngOnInit(): void {
    this.getproduit();
  }
  private getproduit()
  {
    this.produitService.AfficherProduits().subscribe((data: Produit[]) =>{
      this.produits=data; 
     });
  }
  ModifierProduit(id: BigInteger){
this.router.navigate(['modifierproduit', id]);
}

SupprimerProduit(id: BigInteger){
  this.produitService.SupprimerProduit(id).subscribe( data => {
    console.log(data);
    this.getproduit();
  })
}

}
