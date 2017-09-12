var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
                "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
//var endpoint = "https://wind-bow.gomix.me/twitch-api/streams/";
var channel = "";
var link = "";
var status = "offline";
var disabled = "";

for (var i = 0; i < channels.length; i++) {
  (function(i) { // protects the value of i
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channels[i] + "?callback=?", function(data) {
      console.log(data);

      if (data.stream === null ) {
        status = "offline";
        disabled = "disabled";
      } else if (data.stream !== null) {
        status = "online";
        link = data.stream.channel.url;
        disabled = "";
      }

      $('.channels').append('<div class="chan-div"><h3>' + channels[i]
                            + '</h3><p>Status: <a href="' + link + '" class="' + disabled
                            + '" target="_blank">' + status + '</a></p></div>');
    });
  })(i);
};
