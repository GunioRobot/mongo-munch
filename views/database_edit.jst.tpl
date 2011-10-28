<form>
<input name='id' type='hidden' value='<%= model.escape('id') %>' />
<label for='name'>Name</label>
<input name='name' type='text' value='<%= model.escape('name') %>' />
<% if (model.isNew()) { %>
<button>Create</button>
<% } else { %>
<a class="delete" href="#">delete</a>
<button>Save</button>
<% } %>
</form>

