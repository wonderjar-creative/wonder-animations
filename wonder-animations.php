<?php

/**
 * Plugin Name:       Wonder Animations
 * Description:       Add animations to your blocks. Powered by the animate.css library.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.8.1
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
define('WONDER_ANIMATIONS_VERSION', '1.8.1');

/**
 * Enqueue block editor assets.
 * 
 * Add the block editor assets to add animations to blocks.
 * 
 * @since 1.9.0 Removed async attribute from script enqueue.
 * @since 1.7.0
 */
function wonder_animations_enqueue_block_editor_and_frontend_assets() {
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
      'in_footer' => true
    )
  );
}
add_action('enqueue_block_assets', 'wonder_animations_enqueue_block_editor_and_frontend_assets');

/**
 * Render dynamic blocks.
 * 
 * Check if the block is dynamic and has animation attributes, then add the animation classes to the block's wrapper.
 * 
 * @since 1.7.0
 * @param string $block_content The block's content.
 * @param array $block The block's attributes.
 * @return string The block's content with the animation classes added.
 */
function wonder_animations_render_dynamic_blocks($block_content, $block) {
  // Check if the block is dynamic and has animation attributes but no animation classes
  if (isset($block['attrs']) && ! empty($block['attrs']['waAnimationName']) && strpos($block_content, 'animate__animated') === false) {
    // Extract animation attributes
    $animation_name = isset($block['attrs']['waAnimationName']) ? 'animate__' . esc_attr($block['attrs']['waAnimationName']) : '';
    $animation_delay = isset($block['attrs']['waAnimationDelay']) ? 'animate__' . esc_attr($block['attrs']['waAnimationDelay']) : '';
    $animation_duration = isset($block['attrs']['waAnimationDuration']) ? 'animate__' . esc_attr($block['attrs']['waAnimationDuration']) : '';
    $animation_repeat = isset($block['attrs']['waAnimationRepeat']) ? 'animate__' . esc_attr($block['attrs']['waAnimationRepeat']) : '';
    $reset_view = isset($block['attrs']['waResetView']) ? 'data-wa-reset-view="true"' : '';

    $animation_classes = implode(' ', array_filter([
      'is-dynamic-block',
      'animate__animated',
      $animation_name,
      $animation_delay,
      $animation_duration,
      $animation_repeat,
    ]));

    // Add the classes to the block's wrapper
    $block_content = preg_replace(
      '/class="([^"]*)"/',
      'class="$1 ' . $animation_classes . '" ' . $reset_view,
      $block_content,
      1
    );
  }

  return $block_content;
}
add_filter('render_block', 'wonder_animations_render_dynamic_blocks', 10, 2);
