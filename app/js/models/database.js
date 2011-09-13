(function() {
  window.Database = Backbone.Model.extend({
    initialize: function() {
      this.collections = new App.Collections.Collections
      return this.collections.url = "databases/" + this.id + "/collections"
    },
    url: function() {
      var base = "databases";
      if (this.isNew()) {
        return base
      }
      return base + (base.charAt(base.length - 1) === "/" ? "" : "/") + this.id
    }
  })
}).call(this)
