<?php
/**
 * Plugin Name: Caroussel
 * Description: Affiche un carroussel d'images controlé par des boutons radio
 * Author: Eloi Chayer
 * Version: 1.0.0
 */

function eddym_enqueue(){
    $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style(   'em_plugin_carrousel_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

    wp_enqueue_script(  'em_plugin_carrousel_js',
                    plugin_dir_url(__FILE__) ."js/carrousel.js",
                    array(),
                    $version_js,
                    true);
}

add_action('wp_enqueue_scripts', 'eddym_enqueue');


// POUR QUE CA MARCHE !!!!!!!!!
// wp_head() -> avant la fermeture de la balise </head> (header.php)
// wp_footer() -> avant la fermeture de la balise </footer> (footer.php)

function genere_html(){
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte
    
    $contenu = 
    '<div class="carrousel">
    <button class="carrousel__x">X</button>
    <figure class="carrousel__figure"></figure>
    <form class="carrousel__form"></form>
    <button class="carousel-prev">&#x2190;</button>
    <button class="carousel-next">&#x2192;</button>
    </div>';
    
    return $contenu;
}

add_shortcode('carrousel', 'genere_html');
