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

function sample_person_plugin_shortcode($atts = [], $content = null, $tag = '')
{
    // normalize attribute keys, lowercase
    $atts = array_change_key_case((array)$atts, CASE_LOWER);
    // override default attributes with user attributes
    $sample_person_plugin_atts = shortcode_atts([
                                     'person_name' => 'John Doe',
                                 ], $atts, $tag);

    // start output
    $out = '';
    // start box
    $out .= '<div class="person-box" id="root" person_name="' . esc_html__($sample_person_plugin_atts['person_name'], 'sample_person_plugin') . '">';
    $out .= '</div>';
    // return output
    return $out;
}

function sample_person_plugin_shortcodes_init()
{
    add_shortcode('sample_person_plugin', 'sample_person_plugin_shortcode');
}

add_action('init', 'sample_person_plugin_shortcodes_init');

function sample_plugin_enqueue_scripts()
{

          $files = scandir(dirname(__FILE__) . '/js/');
          $jsFiles = '';
          $i = 0;

          foreach($files as $filename) {
            if(strpos($filename,'.js')) {
              $jsFiles = plugin_dir_url( __FILE__ ) . 'js/' . $filename;
            }
            wp_enqueue_script('sample_person_plugin-scrpt-' . $i, $jsFiles, '', '0.0.1', true);
            $i++;
          }

}

function sample_plugin_enqueue_styles()
{

          $files = scandir(dirname(__FILE__) . '/css/');
          $cssFiles = '';
          $i = 0;

          foreach($files as $filename) {
            if(strpos($filename,'.css')) {
              $cssFiles = plugin_dir_url( __FILE__ ) . 'css/' . $filename;
            }
            wp_enqueue_style('sample_person_plugin-style-' . $i, $cssFiles, '', '0.0.1', false);
            $i++;
          }

}


add_action( 'wp_enqueue_scripts', 'sample_plugin_enqueue_scripts');
add_action( 'wp_enqueue_scripts', 'sample_plugin_enqueue_styles' );

// function on_page_publish( $ID, $post ) {
//     $content = get_post_field('post_content', $ID);
//
// }
// add_action(  'publish_page',  'on_page_publish', 10, 2 );
