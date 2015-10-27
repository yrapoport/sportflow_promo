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

// ************************************************************* //
// SETTINGS for Finely Responsive Under Construction Template
// ************************************************************* //



// To setup the template, change the variables below
// Follow instructions in code comments or see documentation for more detail


// ************************************************************* //
// ==== GENERAL SETTINGS ====

// Enable or disable the preloader by changing var preloader to 'on' or 'off' (disabling it is not reccomended)
var preloader = 'on';

// If var preloaderGIF is 'off', the default CSS3 animation preloader is used - set to 'on' and a GIF image preloader will be used, the loader.gif file in images folder
var preloaderGIF = 'off';


// Enable or disable the background image overlay (the squares) using 'on' or 'off'
var bgImgOverlay = 'on';

// Edit the colour of the CSS background overlay which darkens background images/video by using '#HEX' - use a HEX colour
var bgOverlayColour = '#000000';

// Edit the opacity of the colour overlay - determine how visible the background images/video are between '0' and '1.0'
var bgOverlayOpacity = '0.7';


// ************************************************************* //
// ==== SLIDESHOW BACKGROUND ====

// Set URLs to background images inside the array
// Each image must be on its own line, inbetween speech marks (" ") and with a comma at the end of the line
// Add / remove images by changing the number of lines below
// To use a single (static) image background, only use one image line below
var slideshowBackgroundURLS = [
	"images/back1.jpg",
	"images/back2.jpg",
	"images/back3.jpg",
	"images/back10.jpg",
	"images/back4.jpg",
	"images/back11.jpg",
	"images/back5.jpg",
	"images/back6.jpg",
	"images/back12.jpg",
	"images/back7.jpg",
	"images/back8.jpg",
	"images/back13.jpg",
	"images/back9.jpg",	
];

// Variable slideshowFade = transition speed for fade animation, in milliseconds
var slideshowFade = 2000;

// Variable slideshowDuration = time each slide is shown for, in milliseconds
var slideshowDuration = 4000;


// ************************************************************* //
// ==== VIDEO BACKGROUND ====


// NOTE
// Video background cannot work on mobile devices due to device restrictions, instead shows slideshow
// If disabled slideshow is shown

// Enable Video Background - 'on' to enable, 'off' to disable
var videoBackground = 'off';

// Paste YouTube URL into the videoBackgronudURL variable - use YouTube link NOT embed code
// You must have http:// before the URL
var videoBackgroundURL = '';

// Set videoMuted to 'true' and background videos will be muted with no toggle mute button visible
// Set videoMuted to 'false' and videos will not be muted, and the toggle mute button will be visible on the site so users can turn off audio if they want
var videoMuted = true;


// ************************************************************* //
// ==== COUNTDOWN ====

// Enable the countdown by setting this to 'on' or disable it by setting the variable to 'off'
var countdownOnOff = 'on';

// Set up the date and time that will be counted down to
// Enter date in the format (24 hr clock): DD Month YYYY HH:MM:SS for example: 01 January 2015 23:04:00
var countdownDate = '5 December 2015 10:00:00';

// If neccessary (to change language of countdown), words used in countdown are found here
// Make sure you change the plural and singular forms (e.g. days and day)
var countdownLang_Days = 'дней';
var countdownLang_Day = 'день';
var countdownLang_Day_2_4 = 'дня';

var countdownLang_Hours = 'часов';
var countdownLang_Hour = 'час';
var countdownLang_Hour_2_4 = 'часа';

var countdownLang_Minutes = 'минут';
var countdownLang_Minute = 'минута';
var countdownLang_Minute_2_4 = 'минуты';

var countdownLang_Seconds = 'секунд';
var countdownLang_Second = 'секунда';
var countdownLang_Second_2_4 = 'секунды';