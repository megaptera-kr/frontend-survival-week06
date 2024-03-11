type Listener = () => void;

class BaseStore<Snapshot> {
  protected listeners = new Set<Listener>();

  snapshot = {} as Snapshot;

  addListener(listener: Listener): void {
    this.listeners.add(listener);
  }

  removeListener(listener: Listener): void {
    this.listeners.delete(listener);
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }

  getSnapshot() {
    return this.snapshot;
  }
}

export default BaseStore;
