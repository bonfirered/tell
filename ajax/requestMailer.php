<?php 

$postEmail       = filter_var($_POST["postEmail"], FILTER_SANITIZE_EMAIL);

if(strlen($postEmail)<1)
{
    header('HTTP/1.1 500 Email Field Empty');
    exit();
}

$to = 'metrockolis@gmail.com';
$subject = 'TellCollective News & Updates Enrollment Reqest';

$headers = "From: donotreply@tellcollective.com \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = '<html><body>';
$message .= 'Please add the following email to the News & Updates email list.<br \><br \>';
$message .= 'Email: '.$postEmail;
$message .= '<br \><br \></body></html>';

@$sentMail = mail($to, $subject, $message, $headers);

if(!$sentMail)
{
    header('HTTP/1.1 500 Couldnot send mail! Sorry..');
    exit();
}else{
    echo '<h2>Hi '.$postName.', Thank you for your email</h2>
    <p>Your email has already arrived in my Inbox, all I need to do is Check it..
    <br />Good day.</p> <div><a href="" onclick="return false;" id="gobacknow"><strong>Send Another Email!</strong></a></div>';
}

?>

