function transformPayload(payload) {
  var gatewayPayloads = [];
  for each (var commit in payload.commits) {
     gatewayPayloads.push(createCommitPayload(payload, commit, payload.repository));
  }
  return gatewayPayloads;
}
 
function createCommitPayload(payload, commit, repository){
 
 
// XXX PUT DETATAILS HERE
var repoID = repository.id.toString();
var message = commit.message;
var splitMessage = message.split('\n\n');
var message = splitMessage[0];
var formattedID = splitMessage[1];
//var changes = "{" + "\"Changes\"" + ":[{" + "\"PathAndFilename\"=" commit.url + ", \"Action\"=\"action\"" + "}, ]}"

//add a test comment line
//change to code, change b
 
return {
                                        'formatted_id':formattedID,
                                        'commitmessage':message,
                                        'created':commit.timestamp,
                                        'author_name':commit.author.name,
                                        'author_email':commit.author.email,
                                        'files_added':commit.added[0],
                                        'files_modified':commit.modified[0],
                                        'files_removed':commit.removed[0],
                                        'url':commit.url,
                                        'repository_name':repository.name,
                                        'Commit_repository_url':repository.url,
                                        'Commit_repository_id':repository.name,
                                        'branch_name':payload.ref,
                                        'changes': "[" + commit.url + "] " + message
                                        }
 
}
