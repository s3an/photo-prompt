//Iron router layout file

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'home', 
	template: 'home'
});

Router.route('/:username', {
  name: 'userPage', 
  template: 'home'
});

Router.route('/:topicInfo', {
  name: 'topicPage', 
  template: 'home'
});

// Router.route('/about', {
// 	name: 'about', 
// 	template: 'about'
// });

Router.onBeforeAction('loading');