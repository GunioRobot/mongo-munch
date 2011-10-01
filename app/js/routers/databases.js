window.App.Routers.Databases = Backbone.Router.extend({

  routes: {
    "databases/:id/collections": "collections",
    "databases/:id": "edit",
    "": "index",
    "database/new": "new_database"
  },
  
  edit: function(id) {
    var db = new App.Models.Database({ id: id })
    return db.fetch({
      success: function(model, resp) {
        return new App.Views.DatabaseEdit({
          model: db
        })
      },
      error: function() {
        new Error({
          message: "Could not find that database."
        })
        return window.location.hash = "#"
      }
    })
  },
  
  index: function() {
    var databases = new App.Collections.Databases();
    return databases.fetch({
      success: function() {
        return new App.Views.DatabaseIndex({
          collection: databases
        })
      },
      error: function() {
        return new Error({
          message: "Error loading databases."
        })
      }
    })
  },
  
  new_database: function() {
    return new App.Views.DatabaseEdit({
      model: new App.Models.Database()
    })
  },
  
  collections: function(id) {
    var db = new App.Models.Database({ id: id })
    return db.collections.fetch({
      success: function(model, resp) {
        return new App.Views.CollectionIndex({
          collection: db.collections
        })
      },
      error: function() {
        new Error({
          message: "Error loading collections."
        })
        return window.location.hash = "#"
      }
    })
  }
})
