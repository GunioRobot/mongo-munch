(function($) {

  window.App.Models.Collection = Backbone.Model.extend({
    url: function() {
      var base = "databases"
      if (this.isNew()) {
        return base
      }
      return base + (base.charAt(base.length - 1) === "/" ? "" : "/") + this.id
    }
  })

}).call(jQuery)

