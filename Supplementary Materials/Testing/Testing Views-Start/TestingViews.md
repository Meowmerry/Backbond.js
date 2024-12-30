Testing Backbone Views

- Initial set up (tagName, className, etc)
- Rendering login
- Handling DOM and model events


## Mocking Calls to the Server
- Put a spy on the model's fetch(), save(), or destroy() methods.
- Do Not
  - spy on jQuery ajaz
  - Create a fake server with Sinon.js and inspect URLs and params