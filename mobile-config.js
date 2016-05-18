//Mobile config for corodva, this stops the need to mess with the cordova.xml files
App.info({
 id: 'com.photoprompt.app',
 name: 'Sean Keeley',
 description: 'A reason to take a picture',
 version: '0.2.1',
 author: 'Sean Keeley',
 email: 'sean.keeley1@gmail.com',
 // website: 'http://www.photoprompt.com'
});
App.accessRule('*');
App.setPreference('DisallowOverscroll', 'true');
// using mobile-status-bar package that uses the cordova packages
App.setPreference('StatusBarOverlaysWebView','true');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('StatusBarStyle', 'lightcontent');
App.icons({

 // Android
 'android_ldpi': 'images/Camera-icon.png',
 'android_mdpi': 'images/Camera-icon.png',
 'android_hdpi': 'images/Camera-icon.png',
 'android_xhdpi': 'images/Camera-icon.png'
});
App.launchScreens({
 // iOS
 
 // Android
 'android_ldpi_portrait': 'images/Camera-icon.png',
 'android_ldpi_landscape': 'images/Camera-icon.png',
 'android_mdpi_portrait': 'images/Camera-icon.png',
 'android_mdpi_landscape': 'images/Camera-icon.png',
 'android_hdpi_portrait': 'images/Camera-icon.png',
 'android_hdpi_landscape': 'images/Camera-icon.png',
 'android_xhdpi_portrait': 'images/Camera-icon.png',
 'android_xhdpi_landscape': 'images/Camera-icon.png'
});