
<?php
include('common.php');
outputTabTitle("Ranking for Archer Impossible | World's Hardest Game | Minecraft Edition");
background($linkBKG[2]);
bkgsound();
outlogo();
  outnavbar("Login / Register");
divnav();
echo '</header>'
?>

<!-- html unique code for login page -->
<div class="login-register">
        <h1><u>Login</u></h1>
        <form action="#" method="post"></form>
        <p>Username</p>
        <input type="text" name="user" placeholder="Username">
        <p>Password</p>
        <input type="password" name="password" placeholder="*******">
        <button class="login" type="submit">Login</button>


        <div class="register">

           <h2><u>Register</u></h2>
           <form action="###" method="post"></form>
           <p>Email address</p>
           <input type="email" name="email" placeholder="example@gmail.com">
           <p>Username</p>
           <input type="text" name="reg_user" placeholder="Username">
           <p>Password</p>
           <input type="password" name="password" placeholder="********">
           <form>
            <label for="quantity">Age</label>
            <input type="number" id="quantity" name="quantity" min="1" max="100" placeholder="1-100">
           </form>
           
           <button class="register" type="submit">Register</button>

        </div>
        

    </div>

<?php
outputFooter();
?>
