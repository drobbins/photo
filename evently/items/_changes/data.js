function(data) {
  // $.log(data)
  var p
    , db = $$(this).app.db
    ;
  function attachments(doc){
    var atts = [];
    if(doc._attachments){
      for (var name in doc._attachments){
        atts.push({
          name : name,
          path : ["",db.name,doc._id,name].join('/'),
          _id : doc._id
        });
      }
    }
    return atts;
  }
  return {
    items : data.rows.map(function(r) {
      p = (r.value && r.value.profile) || {};
      p.message = r.value && r.value.message;
      p.atts = attachments(r.value);
      p.id = r.value && r.value._id;
      return p;
    })
  }
};