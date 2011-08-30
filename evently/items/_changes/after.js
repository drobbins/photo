function(){
  var db = $$(this).app.db;
  $("div.attachment").mustache_maker({
    mustache_callback : function(mustache){
      var div_id = this;
      mustache.created_at = new Date();
      mustache.profile = $$("#profile").profile;
      mustache.type = "annotation";
      mustache.image = "something";
    }
  });
}