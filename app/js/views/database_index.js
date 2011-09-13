(function() {
  window.App.Views.DatabaseIndex = Backbone.View.extend({
    initialize: function() {
      this.databases = this.options.databases
      return this.render()
    },
    render: function() {
      $(this.el).html(App.Templates.DatabaseIndex({
        collection: this.collection
      }));
      return $("#left").html(this.el)
    }
  })
}).call(this)
