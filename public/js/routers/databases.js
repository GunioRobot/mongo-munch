(function($) {

  window.App.Routers.Databases = Backbone.Router.extend({

    routes: {
      "": "index",
      "databases/:id": "edit",
      "database/new": "new_database",
      "database/:id/collections": "collections"
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
      new App.Views.DatabaseIndex({
        collection: databases
      })

      return databases.fetch({
        success: function() {
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
      this.index()
      var database = new App.Models.Database({ id: id })
      new App.Views.CollectionIndex({
        collection: database.collections
      })

      return database.collections.fetch({
        success: function(model, resp) {
        },
        error: function() {
          new Error({
            message: "Error loading collections."
          })
        }
      })
    }
  })

}).call(jQuery)

