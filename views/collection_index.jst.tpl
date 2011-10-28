<% if (collection.models.length > 0) { %>
<h3>
<a href='#new'>Create New</a>
</h3>
<ul>
<% collection.each(function(item) { %>
<li>
<a href='#databases/<%= item.id %>'>
<%= item.escape('id') %>
</a>
</li><% }); %>
</ul>
<% } else { %>
<h3>No collections! <a href='#new'>Create one</a></h3>
<% } %>
