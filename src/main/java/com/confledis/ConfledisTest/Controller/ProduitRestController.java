package com.confledis.ConfledisTest.Controller;

import java.util.List;

import javax.management.relation.RelationNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.confledis.ConfledisTest.Repositories.ProduitRepository;
import com.confledis.ConfledisTest.Srevice.ProduitService;
import com.confledis.ConfledisTest.entities.Produit;



@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ProduitRestController {


@Autowired
ProduitService produitservice;
@Autowired
ProduitRepository repoproduit;
//http://localhost:8082/SpringMVC/AfficherListProduits
	 @GetMapping("/produits") 
	 @ResponseBody
	 public List<Produit> getProduits() {
	 List<Produit> list = produitservice.AfficherListProduit();
	 return list;
	 }
	// http://localhost:8082/SpringMVC/AfficherProduit/{id}
		  @GetMapping("/produits/{id}") 
		  @ResponseBody
		 public Produit AfficherProduit(@PathVariable("id")int id) {
		  return produitservice.AfficherProduitByID(id);
		 }
		  // http://localhost:8082/SpringMVC/EnregistrerProduit
		   @PostMapping("/produits") 
		   @ResponseBody
		   public Produit EnregistrerProduit(@RequestBody Produit p) {
		   Produit  produit = produitservice.EnregistrerProduit(p);
		   return produit;  
		   }
		// http://localhost:8082/SpringMVC/SupprimerProoduit{id}
		    @DeleteMapping("/produits/{id}") 
		    @ResponseBody
		    public void SupprimerProduit(@PathVariable("id")int id) { 
		    produitservice.SupprimerProduit(id);
		   }
		    
			@PutMapping("/produits/{id}")
			public ResponseEntity<Produit> ModifierProduit(@PathVariable int id, @RequestBody Produit produitDetails){
				Produit produit = repoproduit.findById(id).orElse(null);
				produit.setNom(produitDetails.getNom());
				produit.setPrix(produitDetails.getPrix());
				produit.setQuantite(produitDetails.getQuantite());
				
				Produit updatedProduit =repoproduit.save(produit);
				
				return ResponseEntity.ok(updatedProduit);
			}
		    @GetMapping("/produits/{nom}/{prix}")
		    @ResponseBody
			 public List<Produit> RechercheProduits(@PathVariable("nom") String nom,@PathVariable("prix") float prix) {
			 List<Produit> list1 = produitservice.RechercherProduit(nom, prix);
			 return list1;
			 }
}
