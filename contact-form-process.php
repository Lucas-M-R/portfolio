<?php
if (isset($_POST['Email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "contact@lucas-mr.fr";
    $email_subject = "Prise de contact portfolio";

    function problem($error)
    {
        echo "Désolé, il y a un problème avec le formulaire";
        echo "Le problème est le suivant.<br><br>";
        echo $error . "<br><br>";
        echo "Veuillez corriger les erreurs et renvoyer le formulaire.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['Name']) ||
        !isset($_POST['Email']) ||
        !isset($_POST['Message'])
    ) {
        problem('Désolé, il y a un problème avec le formulaire');
    }

    $name = $_POST['Name']; // required
    $email = $_POST['Email']; // required
    $message = $_POST['Message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'Hmm votre adresse n\'a pas l\air d\'être valide.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'Hmm votre nom n\'a pas l\air d\'être valide.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'Hmm votre message n\'a pas l\air d\'être valide.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- include your success message below -->
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="./img/icons/favicon.ico" type="image/x-icon">
    <title>Portfolio</title>
    <meta name="description" content="Portfolio de Lucas Morille-Roy, découvrez son travail et contactez le et découvrez son CV.">
    <div class="slider" data-scroll-container="">


    <!-- a voir ça marche pas  -->


    <!-- ________________________________ -->
    <style>
    *{cursor: default;}
    a{text-decoration: none;}
    .success-message h3{
        margin: 0 auto;
    }
    </style>
        <div class="panneau success-message" style="color:white" id="slide-1">
            <h3>Merci pour votre message,<br> 
            je vous recontacterai très vite.<br>
            <button href="index.html"> Revenir à l'accueil</button></h3>

        </div>
        <div class="panneau success-message" style="color:black" id="slide-2">
            <h3>Thank you for contacting us.<br>
             We will be in touch with you very soon.<br>
             <button href="index.html"> Back to homepage</button></h3>

        </div>
        


    <a href="index.html">Revenir à l'accueil</a>
    <script src="script.js"></script>
    <script>
        window.onload(function(){setTimeout(window.location.replace("./index.html"), 5000)});
      </script>
<?php
}
    // sleep(5);
    // header('Location:./index.html');      
?>
