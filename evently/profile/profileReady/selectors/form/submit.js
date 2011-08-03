function() {
  var form = $(this);
	var db = $$(this).app.db;
  var fdoc = form.serializeObject();
	delete(fdoc._rev);
  fdoc.created_at = new Date();
  fdoc.profile = $$("#profile").profile;
  $$(this).app.db.saveDoc(fdoc, {
    success : function() {
			var text = $("[name='message']",form);
			$("[name='_rev']", form).val(fdoc._rev);
			var attachments = $("[name='_attachments']",form).val();
			if(attachments){
				text.val('Uploading file...');
				form.ajaxSubmit({
					url : db.uri + $.couch.encodeDocId(fdoc._id),
					success : function(){
						text.val("");
					}
				});
			}
			else{
				text.val("");
			}
    }
  });
  return false;
};
