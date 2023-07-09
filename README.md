# Simple minimal setup for React SSR rendering

### Prerequisites
- Tested on Node 20.04
- Uses fast router and Node js as http server
- Uses SWC to create bindles frontend and server components
- See packages.json for the commands
- Start at the same time in three separate terminals:
    - npm run watch
    - npm run dev
    - npm run bundle

## Additional Links

- For live reload (Not implemented):
https://dev.to/rajeshroyal/how-to-live-reload-node-js-server-along-with-hot-reloading-2im0

- Introduction to SWC:
https://www.youtube.com/watch?v=RXQlPpbdn_E

- JSX plugin
https://swc.rs/docs/configuration/compilation#jscexperimentalplugins
https://www.npmjs.com/package/@swc/plugin-styled-components

- DENO
https://deno.com/

- renderToPipeableStream
https://react.dev/reference/react-dom/server/renderToPipeableStream


- spack.config.js bug
// https://docs.sheetjs.com/docs/demos/frontend/bundler/
`Use @swc/core@1.2.245 for now`