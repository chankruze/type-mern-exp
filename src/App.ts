/*
Author: chankruze (chankruze@gmail.com)
Created: Wed May 25 2022 20:51:13 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import express from "express";

class App {
  public app;

  constructor() {
    this.app = express();
  }
}

export default new App().app;
