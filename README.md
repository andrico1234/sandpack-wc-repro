# Sandpack fails to update with web components

## Update: This works!

This was due to two issues:

- the sandpack compiler should have had the template set to "node"
- without explicitly passing through a `startRoute` in the options, it was set to undefined, which prevented the site from loading
  - setting this to `/index.html` solves this problem

## Steps to reproduce

- `npm install`
- `npm run dev`
- open in browser
- `click LOAD`
- initial HTML should appear
- `click UPDATE`
- error overlay should appear


## Expected behaviour

Sandpack should be able to handle web components, or at the very least the documentation should explain how to handle web components.

My first thought was to prevent "hot module reloading", but there doesn't seem to be such an option.