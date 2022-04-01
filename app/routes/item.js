import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  model(params) {
    let { item_id } = params;
    return item_id;
  }
}
