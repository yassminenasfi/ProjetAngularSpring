package com.confledis.ConfledisTest.Srevice;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.confledis.ConfledisTest.Repositories.ProduitRepository;
import com.confledis.ConfledisTest.entities.Produit;




@Service
public class ProduitService implements IProduitService {
	private static final Logger l=LogManager.getLogger(Produit.class);
	@Autowired
	ProduitRepository produitRepo;
	
	@Override
	public List<Produit> AfficherListProduit() {
		List<Produit> products =(List<Produit>) produitRepo.findAll();
		for ( Produit produit:products){
		l.info("produit: "+produit);
		}
		return products;
	}

	@Override
	public Produit EnregistrerProduit(Produit p) {
		p=produitRepo.save(p);
		return p;
	}

	@Override
	public void SupprimerProduit(int id) {
		// TODO Auto-generated method stub
		produitRepo.deleteById(id);
	}

	@Override
	public Produit ModifierProduit(Produit p) {
		// TODO Auto-generated method stub
		return produitRepo.save(p);
	}

	@Override
	public Produit AfficherProduitByID(int id) {
		// TODO Auto-generated method stub
		Produit p=produitRepo.findById(id).orElse(null);
		return p;
	}

	@Override
	public List<Produit> RechercherProduit(String nom,float prix) {
		List<Produit> p =produitRepo.RechercheProduit(nom,prix);
		return p;
	}

}
