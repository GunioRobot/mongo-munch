(function() {
  window.App = {
    Views: {},
    Routers: {},
    Collections: {},
    Templates: {},
    init: function() {
      new App.Routers.Databases()
      return Backbone.history.start()
    }
  };
}).call(this)
