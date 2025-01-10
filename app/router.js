import EmberRouter from '@ember/routing/router';
import config from 'ecommerce-site/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('articles');
  this.route('dam',  { path: '/articles/dam' });
  this.route('news', { path: '/articles/dam/news' });
  this.route('shoes', { path: '/articles/dam/shoes' });
  this.route('sale', { path: '/articles/dam/sale' });

  this.route('herr', { path: '/articles/herr' });
  this.route('item', { path: '/item/:item_id' });
  this.route('bag', { path: 'shopping-bag'});
  this.route('not-found', { path: '/*path' });
});
