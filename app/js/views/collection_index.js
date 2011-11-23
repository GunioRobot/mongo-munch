(function($) {

  window.App.Views.CollectionIndex = Backbone.View.extend({

    initialize: function() {
      _.bindAll(this, 'render')
      this.model.bind('change', this.render)
    },

    render: function() {
      var $ = jQuery
      $(this.el).html(JST['collection_index']({
        collection: this.collection
      }))
      $("#collections").html(this.el)
      return this
    }

  })

}).call(jQuery)
