# Sandpack fails to update with web components

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