(function($) {

  window.App.Models.Database = Backbone.Model.extend({

    initialize: function() {
      this.collections = new App.Collections.Collections
      return this.collections.url = "databases/" + this.name + "/collections"
    },

    url: function() {
      var base = "database"
      if (this.isNew()) {
        return base
      }
      return base + (base.charAt(base.length - 1) === "/" ? "" : "/") + this.name
    }

  })

}).call(jQuery)
