(function($) {

  window.App.Collections.Databases = Backbone.Collection.extend({
    model: App.Models.Database,
    url: '/databases'
  })

}).call(jQuery)

