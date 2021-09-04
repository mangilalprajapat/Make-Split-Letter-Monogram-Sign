<?php
/**
 * Plugin Name: Make Split Letter Monogram Sign
 * Plugin URI: https://www.yourmetalsigns.com/
 * Description: The Make Split Letter Monogram Sign.
 * Version: 1.0
 * Author: Yurmetalsigns
 * Author URI: https://www.yourmetalsigns.com/
 */

add_action('woocommerce_before_add_to_cart_button','cmk_additional_button');
function cmk_additional_button() 
 {
    global $product;
    if($product->get_id() == 4073){$display='block';}else{$display ='none';}
    echo '<div class="preview-button" > <button type="button" style="max-width: 100% !important; display:'.$display.'" width="100%" class="button alt" id="preview-button">LIVE PREVIEW</button></div>';
}


add_action('wp_footer', 'mycustom_footer_section');
function mycustom_footer_section()
{?>


<?php wp_enqueue_style( 'master-style',  plugin_dir_url(__FILE__). 'css/master-style.css',false,'1.1','all'); ?>

<div class="preview-modal center" style="display: flex;display: none;">
  <div class="preview-content">
    <div class="preview-close">x</div>
    <div class="preview-header">Monogram preview</div>
    <canvas id="preview-canvas" width="1536" height="960"></canvas>
    <div class="preview-footer">*** This is only a render for visual purposes and when we personally design the monogram it will be filled out correctly.</div>
  </div>
</div>


<script>
  document.querySelector('.preview-close').addEventListener('click', () => {
    document.querySelector('.preview-modal').style.display = 'none';
  });
</script>
<?php wp_enqueue_script( 'master-min', plugin_dir_url(__FILE__).'js/master-min.js', array( 'jquery' ) ); ?>
<script>
 
  
  document.getElementById('preview-button').addEventListener('click', () => {              
    /*
    if (screen.width < 400) {
      $('html,body').animate({scrollTop: 200}, 'slow');
    }
    else {
      $('html,body').animate({scrollTop: 20}, 'slow');
    }*/
    document.querySelector('.preview-modal').style.display = 'flex';
    // var initial = document.getElementById("initiale").value; 
    // var text = document.getElementById("lastName").value;
    var initial = jQuery('.cmt-initial').find('input[type="text"]').val();

    var text = jQuery('.cmt-name').find('input[type="text"]').val();
    
    // Set defaults for initial and text incase no values were mentioned
    if(initial == "") {
      initial = "L";
    }
    if(text == "") {
      text = "LARSEN";
    }

    initial = initial.toUpperCase();
    text = text.toUpperCase();

    var alphabet = getAlphabetDetails(initial);

    var canvas = document.getElementById("preview-canvas");
    canvas.width = window.innerWidth;
    canvas.height = canvas.width * 10 / 16; // 16:10 aspect ratio.

    var ctx = canvas.getContext("2d");
        
    var image = new Image();                // The image needs to be in 16:10 aspect ratio for best view.
    image.src = alphabet.image;
    image.onload = () => {

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      var textXPercentage = alphabet.textXPercentage;
      var textYPercentage = alphabet.textYPercentage;
      var fontPercentage = alphabet.fontPercentage;

      // Adjust the scaling of text if length > 5 or 7
      if(text.length > 5) {
        if(text.length > 7) {
          if(text.length > 10) {
            ctx.scale(0.5, 1);
            textXPercentage *= 2;
          }
          else {
            ctx.scale(0.6, 1);
            textXPercentage *= 1.66;
          }
        }
        else {
          ctx.scale(0.95, 1);
          textXPercentage *= 1.05;
        } 
      }
      ctx.font = "bold " + canvas.height/100 * fontPercentage + "pt Book Antiqua MS";
      ctx.textAlign = "center";
      ctx.fillText(text, canvas.width/100 * textXPercentage, canvas.height/100 * textYPercentage);
    }
  });
</script>


<script>

jQuery(document).ready(function()
{
    jQuery( '.cmt-initial').find('input[type="text"]').attr('maxlength','1');

});

</script>


<?php }
?>
