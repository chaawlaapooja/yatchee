var sendNotification = function(data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8"
    };
    
    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };
    
    var https = require('https');
    var req = https.request(options, function(res) {  
      res.on('data', function(data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });
    
    req.on('error', function(e) {
      console.log("ERROR:");
      console.log(e);
    });
    
    req.write(JSON.stringify(data));
    req.end();
};
  

module.exports = (heading,playerID) => {
    const message = { 
        app_id: "7006366b-1230-47b4-bac6-db560d647773",
        contents: {"en": "Congratulations"},
        headings: {"en": heading},
        include_player_ids: playerID
    };
    sendNotification(message)
}