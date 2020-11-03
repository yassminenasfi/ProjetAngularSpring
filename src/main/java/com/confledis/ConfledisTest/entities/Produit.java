package com.confledis.ConfledisTest.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Produit")
public class Produit implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String nom;
	private int quantite; 
	private float prix;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Column(name = "nom", nullable = false)
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	@Column(name = "quantite", nullable = false)
	public int getQuantite() {
		return quantite;
	}
	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}
	@Column(name = "prix", nullable = false)
	public float getPrix() {
		return prix;
	}
	public void setPrix(float prix) {
		this.prix = prix;
	}
	@Override
	public String toString() {
		return "Produit [id=" + id + ", nom=" + nom + ", quantite=" + quantite + ", prix=" + prix + "]";
	}
	public Produit(int id, String nom, int quantite, float prix) {
		super();
		this.id = id;
		this.nom = nom;
		this.quantite = quantite;
		this.prix = prix;
	}
	public Produit() {
		super();
		// TODO Auto-generated constructor stub
	} 


}
