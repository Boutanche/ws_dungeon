package com.dungeon.game;

import com.badlogic.gdx.Application;
import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.utils.ScreenUtils;

/**
 * La classe DungeonDesktop est une classe qui hérite de ApplicationAdapter.
 * Elle permet de créer une fenêtre de jeu et de dessiner des éléments 2D dans cette fenêtre.
 */
public class DungeonDesktop extends ApplicationAdapter {
	/**
	 * Le SpriteBatch est un objet qui permet de dessiner des éléments 2D dans la fenêtre de jeu.
	 */
	public SpriteBatch batch;
	/**
	 * La Texture est un objet qui contient une image.
	 */
	public Texture img;
	/**
	 * Le BitmapFont est un objet qui permet de dessiner du texte dans la fenêtre de jeu.
	 */
	public BitmapFont font;

	/**
	 * La méthode create est appelée une seule fois au début du jeu.
	 * Elle permet d'initialiser les objets de la classe.
	 */
	@Override
	public void create () {
		Gdx.app.setLogLevel(Application.LOG_DEBUG);
		batch = new SpriteBatch();
		img = new Texture("badlogic.jpg");
		font = new BitmapFont();
		System.out.println("Premier lancement de l'application : Cadre de campagne !");
	}

	/**
	 * La méthode render est appelée à chaque image du jeu.
	 * Elle permet de dessiner les éléments 2D dans la fenêtre de jeu.
	 */
	@Override
	public void render () {
		ScreenUtils.clear(0, 0, 0, 1);
		batch.begin();
		batch.draw(img, 0, 0);
		batch.end();
	}

	/**
	 * La méthode dispose est appelée une seule fois à la fin du jeu.
	 * Elle permet de libérer la mémoire utilisée par les objets de la classe.
	 */
	@Override
	public void dispose () {
		batch.dispose();
		img.dispose();
	}
}
