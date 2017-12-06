module.exports.index = index;

function index (req, res) {
	res.render('index', {
		layout:'layout',
		title:'home page'
	});
};

module.exports.about = about;

function about(req, res){
	res.render('about', {
		layout:'layout',
		title:'about page'
	});
};

module.exports.services = services;

function services(req, res){
	res.render('services', {
		layout:'layout',
		title:'service page'
	});
};

module.exports.blog = blog;

function blog (req, res) {
	res.render('blog', {
		layout:'layout',
		title:'blog page'
	});
};

module.exports.booking = booking;

function booking (req, res) {
	res.render('booking', {
		layout:'layout',
		title:'booking page'
	});
};

module.exports.contact = contact;

function contact (req, res) {
	res.render('contact', {
		layout:'layout',
		title:'contact page'
	});
};