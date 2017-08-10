<!DOCTYPE HTML>  
<html>
<head>
    <title>David Luke Contact Form</title>
	<meta charset="utf-8" />
    <link rel="stylesheet" href="css/styles.css" type="text/css" />
    <link rel="stylesheet" href="css/Hover.css" type="text/css" />
	<meta name="viewport" content="width=device-width,maximum-scale=1,initial-scale=1" />
    <meta name="description" content="David Luke .Net/Web Developer" />
    <meta name="keywords" content="David Luke, .Net Developer, Web Developer, Software Enginner, Javascript Developer, Front End Developer, Developer" />
</head>
<body>  

<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_phone = $_POST['cf_phone'];
$field_website = $_POST['cf_website'];
$field_message = $_POST['cf_message'];

$successMessage = "Thank you, your message has been sent!";
$wrongMessage = "Something went wrong, go back and try again";
$spamMessage = "You must be a computer! Go Away.";
$requireMessage = "Name and email are required, Try again";

$nameErr = $emailErr = $websiteErr = "";
$name = $email = $comment = $website = "";

$mail_to = 'dluke345@gmail.com';
$subject = 'Message from a site visitor '.$field_name;
$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Phone: '.$field_phone."\n";
$body_message .= 'Message: '.$field_message;
$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if (empty($field_name)) {
			$nameErr = "Name is required";
		} else {
			$name = test_input($field_name);
			// check if name only contains letters and whitespace
			if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
				$nameErr = "Only letters and white space allowed"; 
			}
			$nameErr = "true";
		}
		if (empty($field_email)) {
			$emailErr = "Email is required";
		} else {
			$email = test_input($field_email);
			// check if e-mail address is well-formed
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
				$emailErr = "Invalid email format"; 
			}
			$emailErr = "true";
		}
		if (empty($field_website)) {
			$websiteErr = "Website is required";
		} else {
			$website = test_input($field_website);
			// check if URL address syntax is valid (this regular expression also allows dashes in the URL)
			if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
				$websiteErr = "Invalid URL"; 
			}
			$websiteErr = "true";
		}
		if (empty($field_message)) {
			$comment = "";
		} else {
			$comment = test_input($field_message);
		}	
	}
function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

if ($nameErr == "true" && $emailErr == "true" && $websiteErr == "true") {
	$mail_status = mail($mail_to, $subject, $body_message, $headers);
	echo "<script>alert('Message Sent! Thanks.');</script>";
	header("Refresh:1; url=http://lukeskydeveloper.com");
	}
?>

    <div id="wrapper">
        <header>
            <div class="header">
                <a name="backToTop"></a>
                <h1 class="siteHeading">The Sky Developer</h1>
            </div>
            <div id="menu" align="center">
                <ul>
                    <li class="globalLink homeLink" id="A1"><a class="hvr-underline-from-center" runat="server" href="/default.aspx">Home</a></li>
                    <li id="A5" class="globalLink resumeLink"><a class="hvr-underline-from-center" runat="server" href="/Resume.aspx">Resume</a></li>
                    <li id="A6" class="globalLink linksLink"><a class="hvr-underline-from-center" runat="server" href="/Links.aspx">Links</a></li>
                </ul>
            </div>
        </header>

<div id="contactForm" align="center">
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
                <p>Your name</p>
                <input type="text" name="cf_name" placeholder="Name Here"><span class="error">* <?php echo $nameErr;?></span><br />
                <p>Your e-mail</p>
                <input type="email" name="cf_email" placeholder="Email Here"><span class="error">* <?php echo $emailErr;?></span><br />
                <p>Your phone number</p>
                <input type="text" name="cf_phone" placeholder="Phone Here"><br />
				<p>Website</p>
				<input type="text" name="cf_website" placeholder="Website Here"><span class="error">* <?php echo $websiteErr;?></span>
                <p>Message</p>
                <textarea name="cf_message" placeholder="Message Here" rows="5" cols="40"><?php echo $comment;?></textarea><br />
                <input name="submit" id="submit" type="submit" value="Send">
                <input type="reset" value="Clear">
            </form>
</div>
        <footer>
            <div class="row footerLinks">
                <ul>
                    <li class="globalLink homeLink"><a class="hvr-bounce-in" runat="server" href="/default.aspx">Home</a></li>
                    <li class="globalLink resumeLink"><a class="hvr-bounce-in" runat="server" href="/Resume.aspx">Resume</a></li>
                    <li class="globalLink linksLink"><a class="hvr-bounce-in" runat="server" href="/Links.aspx">Links</a></li>
                </ul>
            </div>
            <div class="row">
                <ul>
                    <li class="copyright">© Copyright 2016 - David Luke</li>
                </ul>
            </div>
        </footer>
    </div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="JS/MyJS.js"></script>
</body>
</html>