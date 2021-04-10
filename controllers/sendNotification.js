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
  

module.exports = (heading,playerID,...rest) => {
    const message = { 
        app_id: "8deb85de-b63f-4015-9bd1-7a30bd2e6fe9",
        contents: {"en": "Congratulations"},
        headings: {"en": heading},
        include_player_ids: playerID,
        ...rest
    };
    sendNotification(message)
}