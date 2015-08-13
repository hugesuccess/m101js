var db = db.getSiblingDB('weather');
var l = null;
var q = db.data.find({},{}).sort({"State": 1, "Temperature": -1});

q.forEach(function(data) {
    if(data.State != l) {
        l = data.State;
        db.data.update({_id: data._id}, {"$set": {"month_high" : true}});
        print(data.State);
    }
});
