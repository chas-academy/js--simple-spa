class Store {
  constructor() {
    this.state = {
      count: 1,
    };
    this.renderCallback = null;
  }

  getCount() {
    return this.state.count;
  }

  setCount(newCount) {
    this.state.count = newCount;
    this.triggerRender();
  }

  setRenderCallback(renderApp) {
    this.renderCallback = renderApp;
  }

  triggerRender() {
    if (this.renderCallback) {
      this.renderCallback();
    }
  }
}
const store = new Store();

export const getCount = store.getCount.bind(store);
export const setCount = store.setCount.bind(store);
export const setRenderCallback = store.setRenderCallback.bind(store);
