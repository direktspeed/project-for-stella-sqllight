import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'sqllight-frontend/models/test';

F.attach(QUnit);

QUnit.module('sqllight-frontend functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('sqllight-frontend main page shows up', function() {
  F('title').text('sqllight-frontend', 'Title is set');
});
