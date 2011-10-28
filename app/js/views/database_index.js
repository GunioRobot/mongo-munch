(function() {
  window.App.Views.DatabaseIndex = Backbone.View.extend({
    initialize: function() {
      this.databases = this.options.databases
      return this.render()
    },
    render: function() {
      $(this.el).html(JST['database_index']({
        collection: this.collection
      }));
      return $("#left").html(this.el)
    }
  })
}).call(this)
