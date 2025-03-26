<?php

/**
 * Plugin Name:       Wonder Animations
 * Description:       Add animations to your blocks. Powered by the animate.css library.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.7.0
 * Author:            Matthew Ediger
 * Author URI:        https:wonderjarcreative.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wonder-animations
 */

if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

/**
 * Define constants.
 * 
 * Set requried paramaters for further usage as constants.
 * 
 * @since 0.5.0 Dropped plugin from version constant.
 */
define('WONDER_ANIMATIONS_PLUGIN_NAME', 'wonder-animations');
define('WONDER_ANIMATIONS_VERSION', '1.7.0');

/**
 * Enqueue block editor assets.
 * 
 * Add the block editor assets to add animations to blocks.
 * 
 * @since 1.7.0
 */
function enqueue_block_editor_and_frontend_assets() {
  wp_enqueue_style(
    WONDER_ANIMATIONS_PLUGIN_NAME,
    plugin_dir_url(__FILE__) . 'build/style-index.css',
    array(),
    WONDER_ANIMATIONS_VERSION
  );
  wp_enqueue_script(
    WONDER_ANIMATIONS_PLUGIN_NAME,
    plugin_dir_url(__FILE__) . 'build/index.js',
    array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'lodash'),
    WONDER_ANIMATIONS_VERSION,
    array(
      'strategy' => 'async',
      'in_footer' => true
    )
  );
}
add_action('enqueue_block_assets', 'enqueue_block_editor_and_frontend_assets');
