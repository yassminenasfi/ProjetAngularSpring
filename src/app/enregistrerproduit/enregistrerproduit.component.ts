import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-enregistrerproduit',
  templateUrl: './enregistrerproduit.component.html',
  styleUrls: ['./enregistrerproduit.component.css']
})
export class EnregistrerproduitComponent implements OnInit {
produit: Produit=new Produit();
  constructor(private produitService: ProduitService, private router:Router) { }

  ngOnInit(): void {
  }
  enregistrerproduit(){
    this.produitService.ajouterproduit(this.produit).subscribe(data => {
      console.log(data);
      this.goToProductList();
    },
    error=> console.log(error));
  }
 goToProductList(){
   this.router.navigate(['/Listdesproduits']);
 }
onSubmit(){
  console.log(this.produit);
  this.enregistrerproduit();
}
}
