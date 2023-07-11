import {
  loadSandpackClient
} from "@codesandbox/sandpack-client";

const files = {
  "/index.js": {
    code: `import { html, LitElement } from "lit";

document.getElementById("app").innerHTML = \`
<h1>Hello world</h1>
<new-el></new-el>
\`;

class NewEl extends LitElement {
  render() {
    return html\` <div>hey there</div>\`;
  }
}

customElements.define("new-el", NewEl);
`,
  },

  "/index.html": {
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite App</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/index.js"></script>
</body>
</html>
`,
  },
  "/package.json": {
    code: JSON.stringify({
      scripts: {
        dev: "vite",
        build: "vite build",
        preview: "vite preview",
      },
      dependencies: {
        lit: "2.6.1",
      },
      devDependencies: {
        vite: "4.1.4",
        "esbuild-wasm": "0.17.12",
      },
    }),
  },
};
const filesTwo = {
  "/index.js": {
    code: `import { html, LitElement } from "lit";

document.getElementById("app").innerHTML = \`
<h1>Hello world</h1>
<new-el></new-el>
\`;

class NewEl extends LitElement {
  render() {
    return html\` <div>hey theere</div>\`;
  }
}

customElements.define("new-el", NewEl);
`,
  },

  "/index.html": {
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite App</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/index.js"></script>
</body>
</html>
`,
  },
  "/package.json": {
    code: JSON.stringify({
      scripts: {
        dev: "vite",
        build: "vite build",
        preview: "vite preview",
      },
      dependencies: {
        lit: "2.6.1",
      },
      devDependencies: {
        vite: "4.1.4",
        "esbuild-wasm": "0.17.12",
      },
    }),
  },

}

let client;

const onLoad = () => {

  const iframe = document.getElementById("iframe");
  loadSandpackClient(iframe, { files }).then((newClient) => {
    client = newClient;
  });
}


document.getElementById("load").addEventListener('click', onLoad)


const onUpdate = () => {
  client.updateSandbox({ files: filesTwo, template: 'node', entry: '/index.js' })
}

document.getElementById("update").addEventListener('click', onUpdate)

