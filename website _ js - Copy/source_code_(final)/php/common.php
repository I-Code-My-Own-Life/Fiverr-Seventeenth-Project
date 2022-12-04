<?php


//for all php pages (part 1)
function outputTabTitle($tab){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $tab . '</title>';
    echo '<link rel="stylesheet" href="/source_code_(final)/css/design.css">';
    echo '</head>';
}


$linkNames = array("Home", "How To Play", "Leaderboard", "Login / Register", "My Account");
$linkPage = array("index.php","htplay.php", "leaderboard.php", "login.php", "account.php");
$linkBKG = array("/images/htp_bkg.jpg", "/images/leaderboard_bkg.jpg" , "/images/login_bkg.jpg", "/images/background_5.jpg");


//for all pages except index to pick background from array (part 1.1)
function background($bkg){
        echo '<body background="'. $bkg . '">';
}
        

//for all pages except index (part 1.5) 
function bkgsound(){
  echo '<audio autoplay loop src="/audio/epic adventure music.mp3"></audio>';
  echo '<header>';
}


//for all php pages (part 2)
function outlogo(){
    echo '<nav>
           <div class="top_logo">
             <a href="index.html" class="logo">
               <img src="/images/final_logo_crop.png">
             </a>';
}


//for all php pages (part 3)
function outnavbar($pageName){
    echo '<div .ul class="navbar"'>;
}


for($p = 0; $p < count($linkNames); $p++){
    echo '<a href="' . $linkPage[$p] . '">' . $linkNames[$p] . '</a>';
}


//for all pages after navbar (part 4)
function divnav(){
echo '</div>';
echo '</nav>';
}


//for all php pages (FINAL PART)
function outputFooter(){
    echo '</body>';
    echo '</html>';
}

?>

