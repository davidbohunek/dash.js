(function(){
    var url = "http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd";
    var player = dashjs.MediaPlayer().create();
    // player.getDebug().setLogToBrowserConsole(false);
    window.enableProxy = true;
    player.initialize(document.querySelector("#videoPlayer"), url, true);
})();