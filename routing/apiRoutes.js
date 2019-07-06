// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends.
// ===============================================================================



// module.exports = function (app) {

//     //display all friends in the DB
//     app.get("/api/friends", function (req, res) {
//         console.log('going to friends page...')
//         res.json(friendData);
//     });

//     app.post('/api/friends', function (req, res) {
//         var newFriend = req.body;
//         friendData.push(newFriend);
//         console.log("Added new Friend to list: " + JSON.stringify(newFriend));
//     });
// }