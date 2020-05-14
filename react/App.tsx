// @deno-types="https://deno.land/std@v0.37.0/types/react.d.ts"
import React from "https://dev.jspm.io/react";
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';

const str = ReactDOMServer.renderToString(<div>Hello Deno React</div>)
console.log(str)