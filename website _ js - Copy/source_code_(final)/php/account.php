

<?php
include('common.php');
outputTabTitle("My Account | Archer Impossible | World's Hardest Game | Minecraft Edition");
background(linkBKG[3]);
bkgsound();
outlogo();
  outnavbar("My Account");
divnav();
echo '</header>' ;
?>

<!-- html unique code for account page -->
<div class="account_pfp"> <img src="/images/pfp.png" class="pfp">
         </div> 

<h1 class="account_title"><u>My Account Details</u></h1>
    <div class="account_overview">

        
     
        <p><mark class="account_bkg">My Email Address</mark></p>
        <input type="text" readonly="readonly" placeholder="example@gmail.com">
        <p><mark class="account_bkg">My Username</mark></p>
        <input type="text" readonly="readonly" placeholder="Username">
        <p><mark class="account_bkg">My Password</mark></p>
        <input type="text" readonly="readonly" placeholder="*********">
        <p><mark class="account_bkg">My Age</mark></p>
        <input type="text" readonly="readonly" placeholder="21">
        <p><mark class="account_bkg">My Leaderboard Ranking</mark></p>
        <input type="text" readonly="readonly" placeholder="34th">
       

     </div>

<?php
outputFooter();
?>
