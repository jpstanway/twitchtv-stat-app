var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
                "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var twitchURL = "https://www.twitch.tv/"
var channel = "";
var link = "";
var status = "offline";
var disabled = "";
var desc = "";
var logo = "";
var size = "";

for (var i = 0; i < channels.length; i++) {
  (function(i) { // protects the value of i
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"
              + channels[i] + "?callback=?", function(data) {

      console.log(data);

      if (data.stream === null ) {
        status = "offline";
        disabled = "disabled";
        desc = "";
        logo = "";
        size = "";
      } else if (data.stream !== null) {
        status = "online";
        disabled = "";
        desc = data.stream.channel.status;
        logo = data.stream.channel.logo;
        size = "75";
      }

      link = twitchURL + channels[i];

      $('.channels').append('<div class="row chan-div"><div class="col-lg-10"><h3>' + channels[i] 
                            + '</h3><p>Status: <a href="' + link + '" class="' + disabled 
                            + '" target="_blank">' + status + '</a></p><p><em>' + desc 
                            + '</em></p></div><div class="col-lg-2 text-right"><img src="' + logo + '" height="' 
                            + size + '" width="' + size + '"></div></div>');
    });
  })(i);
};

