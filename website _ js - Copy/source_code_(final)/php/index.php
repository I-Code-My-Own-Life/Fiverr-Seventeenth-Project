

<?php

 include('common.php');
 outputTabTitle("Archer Impossible | World's Hardest Game | Minecraft Edition");
 echo '<body>';
?>

<!-- html unique code for index/home page -->
<video autoplay muted loop id="bg_video">
        <source src="/images/SnapSave.io-This 4K 120fps Minecraft Scenery Cinematic is the real deal-(1080p60).mp4" type="video/mp4">
      </video>

<audio autoplay loop src="/audio/epic adventure music.mp3">
</audio>
  
   <script> document.getElementById('bg_video').playbackRate = 3;
</script>

<?php
 echo '<header>';
 outlogo();
  outnavbar("Home");
 divnav();
 outputHeader();
?>

<!-- html for PLAY NOW button -->
<button class="play" type="submit">PLAY NOW</button>

<?php
outputFooter();
?>

