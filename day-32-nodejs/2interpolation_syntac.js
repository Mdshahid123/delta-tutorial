//  EJS (Embedded JavaScript), interpolation refers to embedding JavaScript code within our HTML templates to dynamically generate content. The syntax for interpolation in EJS involves using the <% %> tags for executing JavaScript code and <%= %> tags specifically for outputting the result of JavaScript expressions into the HTML.

// JavaScript Code Execution <% %>:

// Use <% %> tags to include JavaScript code that does not directly output to the template. This is useful for control flow or logic that doesn't need to output HTML directly.


// <% if (user.isAdmin) { %>
//     <p>Welcome, admin!</p>
// <% } %>

// Output Escaped <%= %>:

// Use <%= %> tags to output the result of a JavaScript expression directly into the HTML. EJS automatically escapes the output to prevent XSS (Cross-Site Scripting) attacks.

//example

//<p>User's email: <%= user.email %></p>


//Output Unescaped <%- %>:

// Use <%- %> tags to output the result of a JavaScript expression directly into the HTML, but without escaping the HTML content. Use this carefully to avoid XSS vulnerabilities if the content is user-generated.
//Example:

// ejs code
// <p>User's profile: <%- user.profile %></p>
// These tags <% %>, <%= %>, and <%- %> are central to the EJS syntax for interpolation and are used extensively to inject dynamic data and execute JavaScript logic within your HTML templates.
