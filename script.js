var smamo_save_script = {
    
    save : function(){
        
        if(jQuery('#save').length && jQuery('#save').is(':visible')){
            jQuery('#save').trigger('click');
        }
        
        else if(jQuery('#save-post').length){
            jQuery('#save-post').trigger('click');
        }
        
        else if(jQuery('#submit').length){
            jQuery('#submit').trigger('click');
        }
        
        else if(jQuery('#publish').length){
            jQuery('#publish').trigger('click');
        }
    
    }
};

jQuery(window).bind('keydown.ctrl_s keydown.meta_s', function(event) {
    event.preventDefault();
    smamo_save_script.save();
});