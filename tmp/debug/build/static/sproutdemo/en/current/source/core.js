// ==========================================================================
// Project:   Sproutdemo
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sproutdemo */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Sproutdemo = SC.Application.create(
  /** @scope Sproutdemo.prototype */ {

  NAMESPACE: 'Sproutdemo',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures)
  
  // TODO: Add global constants or singleton objects needed by your app here.

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('sproutdemo');