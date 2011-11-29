(function($) {

  window.App.Models.Database = Backbone.Model.extend({

    initialize: function() {
      this.collections = new App.Collections.Collections
      this.collections.url = "database/" + this.id + "/collections"
    },

    url: function() {
      var base = "database"
      if (this.isNew()) {
        return base
      }
      return base + (base.charAt(base.length - 1) === "/" ? "" : "/") + this.id
    }

  })

}).call(jQuery)

