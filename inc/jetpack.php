<?php
/**
 * Jetpack Compatibility File.
 *
 * @link https://jetpack.me/
 *
 * @package PMA_MAU
 */

/**
 * Add theme support for Infinite Scroll.
 * See: https://jetpack.me/support/infinite-scroll/
 */
function pma_mau_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'render'    => 'pma_mau_infinite_scroll_render',
		'footer'    => 'page',
	) );
} // end function pma_mau_jetpack_setup
add_action( 'after_setup_theme', 'pma_mau_jetpack_setup' );

/**
 * Custom render function for Infinite Scroll.
 */
function pma_mau_infinite_scroll_render() {
	while ( have_posts() ) {
		the_post();
		get_template_part( 'template-parts/content', get_post_format() );
	}
} // end function pma_mau_infinite_scroll_render
