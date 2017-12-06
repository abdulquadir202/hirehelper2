exports.notFound = function notFound(req, res, next){
	res.status(404).render('404', {
		layout:'layout',
		title:'wrong turn'
	});
};

exports.error = function error(err, req, res, next){
	console.log(err);
	res.status(500).render('500', {
		layout:'layout',
		title:'Mistake were made'
	});
};