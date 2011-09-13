(function() {
  window.App.Views.CollectionIndex = Backbone.View.extend({
    initialize: function() {
      this.collections = this.options.collections
      return this.render()
    },
    render: function() {
      $(this.el).html(App.Templates.CollectionIndex({
        collection: this.collection
      }))
      return $("#middle").html(this.el)
    }
  })
}).call(this)
