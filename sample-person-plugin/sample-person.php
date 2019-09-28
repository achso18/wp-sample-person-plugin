<?php
/**
 * @package Sample_Person_Plugin
 * @version 0.0.1
 */
/*
Plugin Name: Sample Person Plugin
Plugin URI: http:/ach.im/sample-person-plugin
Description: This is just a sample person plugin.
Author: Achim Geisler
Version: 0.0.1
Author URI: http:/ach.im/
*/

/*******************************************************************************
Shortcode setup
*******************************************************************************/
function sample_person_plugin_shortcode($atts = [], $content = null, $tag = '')
{
  $atts = array_change_key_case((array)$atts, CASE_LOWER);

  $sample_person_plugin_atts = shortcode_atts([
    'person_name' => 'John Doe',
  ], $atts, $tag);

  $out = '<div class="wpsp-person-box" id="wpsp-person-root"';
  $out .= 'person_name="' . esc_html__($sample_person_plugin_atts['person_name'], 'sample_person_plugin') . '" ';
  $out .= 'image_url="' . plugin_dir_url( __FILE__ ) . 'images/">';
  $out .= '</div>';

  return $out;
}

function sample_person_plugin_shortcodes_init()
{
  add_shortcode('sample_person_plugin', 'sample_person_plugin_shortcode');
}

add_action('init', 'sample_person_plugin_shortcodes_init');

/*******************************************************************************
Enqueue scripts and styles
*******************************************************************************/
function sample_plugin_enqueue_scripts()
{
  if (is_page()) {
    $files = scandir(dirname(__FILE__) . '/js/');
    $jsFiles = '';
    $i = 0;

    foreach($files as $filename) {
      if(strpos($filename,'.js') && !strpos($filename,'.js.map')) {
        $jsFiles = plugin_dir_url( __FILE__ ) . 'js/' . $filename;
        wp_enqueue_script('sample_person_plugin-scrpt-' . $i, $jsFiles, '', '0.0.1', true);
        $i++;
      }

    }
  }

}

function sample_plugin_enqueue_styles()
{
  if (is_page()) {
    $files = scandir(dirname(__FILE__) . '/css/');
    $cssFiles = '';
    $i = 0;

    foreach($files as $filename) {
      if(strpos($filename,'.css') && !strpos($filename,'.css.map')) {
        $cssFiles = plugin_dir_url( __FILE__ ) . 'css/' . $filename;
        wp_enqueue_style('sample_person_plugin-style-' . $i, $cssFiles, '', '0.0.1', false);
        $i++;
      }

    }
  }

}

add_action( 'wp_enqueue_scripts', 'sample_plugin_enqueue_scripts');
add_action( 'wp_enqueue_scripts', 'sample_plugin_enqueue_styles' );
