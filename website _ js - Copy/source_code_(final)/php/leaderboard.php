

<?php
include('common.php');
outputTabTitle("Ranking for Archer Impossible | World's Hardest Game | Minecraft Edition");
background($linkBKG[1]);
bkgsound();
outlogo();
  outnavbar("Leaderboard");
divnav();
?>

<!-- html unique code for Leaderboard page -->

<h1 class="rank_title"><u>Leaderboard Ranking</u></h1>

        <table class="rank_table">
           <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>High Score</th>
              <th>Best Time</th>
            </tr>
           </thead>

           <tbody>
            <tr>
              <td>1st</td>
              <td>Chipmunk</td>
              <td>9850</td>
              <td>4mins 23secs</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td>RedPigeon</td>
              <td>8736</td>
              <td>5mins 03secs</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td>TryHard</td>
              <td>8420</td>
              <td>5mins 20secs</td>
            </tr>
            <tr>
              <td>4th</td>
              <td>Coolio949</td>
              <td>8042</td>
              <td>5mins 46secs</td>
            </tr>
            <tr>
              <td>5th</td>
              <td>PinkSock</td>
              <td>7920</td>
              <td>6mins 20secs</td>
            </tr>
           </tbody>
          </table>

<?php
echo '</header>';
outputFooter();
?>
