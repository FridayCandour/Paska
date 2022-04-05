class app {
  constructor(config) {
    this.layers = [];
    this.config = config;
  }

  use(fuc) {
    this.layers.push(fuc);
  }
  train(values) {}
  pack() {}
  unpack() {}
  run() {
    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i]("hello! paska ai is running");
    }
  }
}

export default app;
