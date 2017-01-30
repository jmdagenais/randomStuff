import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HelixAppComponent } from '../app/helix.component';

beforeEachProviders(() => [HelixAppComponent]);

describe('App: Helix', () => {
  it('should create the app',
      inject([HelixAppComponent], (app: HelixAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'helix works!\'',
      inject([HelixAppComponent], (app: HelixAppComponent) => {
    expect(app.title).toEqual('helix works!');
  }));
});
