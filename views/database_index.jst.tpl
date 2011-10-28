<% if (collection.models.length > 0) { %>
<h3>
<a href='#new'>Create New</a>
</h3>
<ul>
<% collection.each(function(item) { %>
<li>
<a href='#databases/<%= item.id %>/collections'>
<%= item.escape('id') %>
</a>
<a href='#databases/<%= item.id %>'>edit</a>
</li><% }); %>
</ul>
<% } else { %>
<h3>No documents! <a href='#new'>Create one</a></h3>
<% } %>

