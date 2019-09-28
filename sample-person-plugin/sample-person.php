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
Filter the_content
*******************************************************************************/
function sample_plugin_add_content($content)
{
  $sample_plugin_persons = array('John Doe', 'Jane Foe', 'Tom Yoe', 'Lisa Moe');

  if (is_singular('page') && in_the_loop()) {

    foreach ($sample_plugin_persons as $key => $person_name) {
      
      if (substr_compare($content, $person_name, 4, strlen($person_name), true) === 0) {

        $newContent = '<div class="person-box" id="wpsp-person-root"';
        $newContent .= 'person_name="' . $person_name .'" ';
        $newContent .= 'image_url="' . plugin_dir_url( __FILE__ ) . 'images/">';
        $newContent .= '</div>';

        return $newContent;
      }
    }
  }
  // leave the_content on all other post_types as is
  return $content;
}

add_filter('the_content', 'sample_plugin_add_content');

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
