(function($) {

  window.App.Views.DatabaseIndex = Backbone.View.extend({

    initialize: function() {
      _.bindAll(this, 'render')
      this.collection.bind('reset', this.render)
    },

    render: function() {
      var $ = jQuery
      $(this.el).html(JST['database_index']({
        collection: this.collection
      }))
      $("#databases").html(this.el)
      return this
    }

  })

}).call(jQuery)
