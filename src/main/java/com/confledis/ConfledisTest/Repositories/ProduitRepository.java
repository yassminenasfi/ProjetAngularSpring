package com.confledis.ConfledisTest.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.confledis.ConfledisTest.entities.Produit;



@Repository
public interface ProduitRepository extends JpaRepository<Produit, Integer> {
	@Query(value="SELECT * FROM produit  p WHERE p.nom=:nom  and p.prix=:prix ",  nativeQuery=true)
	public List<Produit> RechercheProduit(@Param("nom") String nom ,@Param("prix") float prix );
}
