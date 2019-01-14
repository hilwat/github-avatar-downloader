var request = require('./request');
var required = require('./secrets.js');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request'
      'Authorization': 'token ' + secrets.GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body) {
    var contributors = JSON.parse(body)
    cb(err, contributors);
  });
}

getRepoContributors("jquery","jquery", function(err, contributors){
  contributors.forEach(function(contributors)){
    console.log(contributor.avatar_url)
  }
})


                    // Note 4

