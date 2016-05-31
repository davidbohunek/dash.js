(function(){
    function loadPlayer() {
        var url = "http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd";
        var player = dashjs.MediaPlayer().create();
        player.getDebug().setLogToBrowserConsole(false);
        player.setAutoSwitchQuality(false);
        player.initialize(document.querySelector("#videoPlayer"), url, true);
    }


    document.querySelector('#reloadPlayerBtn').addEventListener('click', () => {
        loadPlayer();
    }, false);

    loadPlayer();
})();