<?php

/*
  ____                    _      _          _         
 / ___|___  ___ _ __ ___ (_) ___| |    __ _| |__  ___ 
| |   / _ \/ __| '_ ` _ \| |/ __| |   / _` | '_ \/ __|
| |__| (_) \__ \ | | | | | | (__| |__| (_| | |_) \__ \
 \____\___/|___/_| |_| |_|_|\___|_____\__,_|_.__/|___/
                                                   

Finely - Responsive Under Construction Template
Version 1.2 - Last updated August 2015
Copyright 2015 CosmicLabs

This template and more are available to purchase on Themeforest.net
http://themeforest.net/user/cosmiclabs/portfolio

For template support, see the documentation files or get in touch with us.
Support site: https://cosmiclabs.ticksy.com/
Support email: support@cosmiclabs.co.uk

*/

// **** SETTINGS for CONTACT FORM ****
$yourEmail = 'info@sportflow.ru'; // Your Email Address that messages will be sent to
$yourName = 'Sportflow'; // Personal name or company name to identify sender to email clients, to help stop them being marked as spam
$siteName = 'Sportflow|Рекомендации для спортсменов <info@sportflow.ru>'; // For from part of email, to identify yourself to email client






// **** SETTINGS FOR SUBSCRIBE FORM ****
// Choose a method for the subscribed email addresses to be saved or sent. You can choose both options to be used at the same time, i.e. store in MySQL and email you.

// To save email addresses into MySQL Server, set the following variable to 'true' and add in your MySQL connection settings below. Settings this to 'false' will disable all usage of MySQL, such as checking if addresses is already subscribed.
$saveToMySQL = 'true';

// To receive an email notification containing subscribed address (i.e. Joe Bloggs has subscribed, email address: joe@bloggs.net), set the following variable to 'true' and add in your email notification settings below
$sendToEmail = 'true';
	
// To subscribe the given email address to your MailChimp list, set the following variable to 'true' and update your MailChimp settings belowl
$mailChimpList = 'false';


// MySQL Connection Settings
// Change these details with the correct information for your server

// Host name, domain or IP Address for MySQL Database location
$mysql_host = "localhost";

// Username for MySQL Access
$mysql_username = "sfpromo";

// Password for MySQL Access
$mysql_password = "mghE3Dios7nF";

// Name of MySQL Database to use
$mysql_database = "sportflow_promo";

// Name of MySQL table where email information will be stored
$mysql_table = "signups";


// Email Notification Settings
// Change these details so notification emails can be sent to you

// Email address to send notifications to
$myEmail = "info@sportflow.ru";

// Where email is 'from', i.e. when you read email it will say From: (whatever you say). Add a name then email address you have setup inbetween the < and >
$emailFrom = "Sportflow|Рекомендации для спортсменов <info@sportflow.ru>";


// MailChimp Settings
// Change these details according to information available from your MailChimp account - see documentation for more help

// Enter your MailChimp API Key - see http://admin.mailchimp.com/account/api
$apikey = '51ee7b481df48558a5231d095dca4874-us12';

// List ID is required in order to decide which of your lists to subscribe users to. This can be found by loggin into your MailChimp account and by going to Lists --> List Tools, and List ID entry at bottom of page. See Documentation for more info
$listId = 'c3ab306568';



/* === Error / Success Messages === */
// Change these details with your own custom messages if you wish

// Error message if no email is entered
$emailempty_errormsg = "Пожалуйста, заполните email";

// Error message if email is invalid
$invalidemail_errormsg = "Введенные email некорректен. Пожалуйста, исправьте его и повторите попытку.";

// Error message if another error occurred (such as could not insert data into database)
$insertfailure_errormsg = "Извините, произошла внутренняя ошибка. Пожалуйста, попробуйте еще раз.";

// Error message if email address already exists in the database
$emailexists_errormsg = "Спасибо, Ваш email уже зарегистрирован ранее";

// Success message once email address is successfully stored in database
$subscriptionsuccess_msg = "Спасибо, что подписались. Мы будем информировать Вас не чаще 1 раза в неделю.";

?>