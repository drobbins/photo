
function photo_load(scripts) {
  for (var i=0; i < scripts.length; i++) {
    document.write('<script src="'+scripts[i]+'"><\/script>')
  };
};

photo_load([
  "https://raw.github.com/drobbins/jQuery-mustache_maker/master/jquery.mustache_maker.js"
]);
