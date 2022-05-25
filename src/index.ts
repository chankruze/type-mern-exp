/*
Author: chankruze (chankruze@gmail.com)
Created: Wed May 25 2022 20:54:10 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import app from "./App";

let port: number = parseInt(process.env.PORT) || 6767;

const banner = () => {
  console.log(`Server started at http://localhost:${port}`);
};

app.listen(port, banner).on("error", (err) => {
  if (err.message.includes("EADDRINUSE")) {
    return app.listen(++port, banner);
  }
});
