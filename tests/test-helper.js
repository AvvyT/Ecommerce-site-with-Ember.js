import Application from 'ecommerce-site/app';
import config from 'ecommerce-site/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
