(function() {
  window.App.Collections.Databases = Backbone.Collection.extend({
    model: Database,
    url: '/databases'
  })
}).call(this)
