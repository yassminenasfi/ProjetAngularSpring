import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {
  id:BigInteger;
produit: Produit=new Produit();
  constructor(private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
this.id=this.route.snapshot.params['id'];
    this.produitService.AfficherProduitById(this.id).subscribe(data => {
      this.produit=data; 


    }, error=> console.log(error));
  }
  onSubmit(){
    this.produitService.ModifierProduit(this.id,this.produit).subscribe( data => {
      this.goToProductList();
    }
    ,error => console.log(error) );
  }
  goToProductList(){
    this.router.navigate(['/Listdesproduits']);
  }
}



