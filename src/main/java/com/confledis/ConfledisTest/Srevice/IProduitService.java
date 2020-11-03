package com.confledis.ConfledisTest.Srevice;

import java.util.List;

import com.confledis.ConfledisTest.entities.Produit;



public interface IProduitService {
	 List<Produit> AfficherListProduit(); 
	 Produit EnregistrerProduit(Produit p);
	 void SupprimerProduit(int id);
	Produit ModifierProduit(Produit p);
	 Produit AfficherProduitByID(int id);
	 List<Produit> RechercherProduit(String nom ,float prix );
}
