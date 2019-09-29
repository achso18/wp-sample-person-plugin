<?php
/**
 * @package WPSP Person
 * @version 0.1.1
 */
/*
Plugin Name: WP Sample Plugin Person
Plugin URI: http:/ach.im/sample-person-plugin
Description: This is just a sample person plugin.
Author: Achim Geisler
Version: 0.1.1
Author URI: http:/ach.im/
*/

class WPSP_Person
{
  /**
	 * Static property to hold our singleton instance
	 *
	 */
	static $instance = false;

  /**
  * Private property to hold the person data
  *
  **/
  private $person_data;

  /**
  * Private constructor
  *
  * @return void
  **/
  private function __construct() {

    $this->load_data();

    add_action ('wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

    add_action ('wp_ajax_send_person_data', array( $this, 'send_person_data') );
    add_action ('wp_ajax_nopriv_send_person_data', array( $this, 'send_person_data') );

    add_filter('the_content', array( $this, 'modify_content') );
  }

  /**
	 * If an instance exists, return it.  If not, create and return it.
	 *
	 * @return WPSP_Person
	 */
	public static function getInstance() {

		if ( !self::$instance )
			self::$instance = new self;
		return self::$instance;
	}

  /**
  * Loads the person data from file
  *
  *@return void
  **/
  public function load_data() {
    $person_data_json = file_get_contents(dirname(__FILE__) . '/data/sample_person_data.json');
    $this->person_data = json_decode($person_data_json, true);

  }

  /**
  * Add styles and scripts
  *
  *@return void
  **/
  public function enqueue_scripts() {

    $cssFiles = scandir(dirname(__FILE__) . '/css/');
    $jsFiles = scandir(dirname(__FILE__) . '/js/');
    $wpsp_nonce = wp_create_nonce('wpsp_person');
    $i = 0;

    foreach($cssFiles as $filename) {
      if(strpos($filename,'.css') && !strpos($filename,'.css.map')) {
        $file = plugin_dir_url( __FILE__ ) . 'css/' . $filename;
        wp_enqueue_style('wpsp-person-style-' . $i, $file, '', '0.1.1', false);
        $i++;
      }
    }

      foreach($jsFiles as $filename) {
        if(strpos($filename,'.js') && !strpos($filename,'.js.map')) {
          $file = plugin_dir_url( __FILE__ ) . 'js/' . $filename;
          wp_enqueue_script('wpsp-person-script-' . $i, $file, '', '0.1.1', true);
          wp_localize_script('wpsp-person-script-' . $i, 'wpsp_http_object',
                    array(
                        'ajax_url' => admin_url( 'admin-ajax.php' ),
                        'nonce'    => $wpsp_nonce,
                    ));
          $i++;
        }
      }
  }

  /**
  * If a persons name is recognized, modify the content,
  * otherwise leaf it as it is.
  *
  *@return string
  **/
  public function modify_content($content) {

    if (is_singular('page') && in_the_loop()) {

      foreach ($this->person_data as $key => $person) {

        if (substr_compare($content, $person['firstLastName'], 4, strlen($person['firstLastName']), true) === 0) {

          $newContent = '<div class="person-box" id="wpsp-person-root"';
          $newContent .= 'person_name="' . $person['firstLastName'] .'" ';
          $newContent .= 'image_url="' . plugin_dir_url( __FILE__ ) . 'images/">';
          $newContent .= '</div>';

          return $newContent;
        }
      }
    }
    // leave the_content on all other post_types as is
    return $content;
  }

  public function send_person_data() {

    $args = array();
    $person_name = $_POST['person_name'];

    foreach ($this->person_data as $key => $person) {

      if (strtolower($person['firstLastName']) === strtolower($person_name)) {

        $args = $this->person_data[$key];
        break;
      }
    }
    
    wp_send_json($args);
    wp_die();
  }

}

// Instantiate our class
$WPSP_Person = WPSP_Person::getInstance();
