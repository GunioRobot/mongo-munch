(function($) {

  window.App.Views.DatabaseEdit = Backbone.View.extend({

    events: {
      "submit form": "save",
      "click a.delete": "delete"
    },

    "delete": function(e) {
      e.preventDefault()
      this.model.destroy()
      return this.remove()
    },

    initialize: function() {
      _.bindAll(this, 'render')
      this.model.bind('change', this.render)
    },

    save: function() {
      var self = this
      var msg = (this.model.isNew() ? "Successfully created!" : "Saved!")
      this.model.save({
        title: this.$("[name=title]").val(),
        body: this.$("[name=body]").val()
      }, {
        success: function(model, resp) {
          new App.Views.Notice({
            message: msg
          });
          self.model = model
          self.render()
          self.delegateEvents()
          return Backbone.history.saveLocation("databases/" + model.id)
        },
        error: function() {
          return new App.Views.Error()
        }
      });
      return false
    },
    
    render: function() {
      var $ = jQuery
      $(this.el).html(JST['database_edit']({
        model: this.model
      }))
      $("#databases .edit").html(this.el)
      return this
    }

  })

}).call(jQuery)
