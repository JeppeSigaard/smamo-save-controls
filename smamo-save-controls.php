<?php 
/*
Plugin name: SmartMonkey's save controls
Description: overskriver cmd+s / ctrl+s og prøver at gemme indholdet på den aktive side 
*/

function smamo_save_script_enqueue() {
    wp_enqueue_script( 'jquery-hotkey', plugin_dir_url( __FILE__ ) . 'jquery.hotkey.js');
    wp_enqueue_script( 'smamo-save-script', plugin_dir_url( __FILE__ ) . 'script.js');
}
add_action( 'admin_enqueue_scripts', 'smamo_save_script_enqueue' );