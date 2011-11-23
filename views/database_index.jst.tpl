<% if (collection.models.length > 0) { %>
  <h3>
  <a href='#new'>Create New</a>
  </h3>
  <ul>
  <% collection.each(function(item) { %>
    <li>
    <a href='#database/<%= item.get('name') %>/collections'>
    <%= item.escape('name') %>
    </a>
    <a href='#database/<%= item.get('name') %>'>edit</a>
    </li><% }); %>
</ul>
<% } else { %>
  <h3>No documents! <a href='#new'>Create one</a></h3>
<% } %>

