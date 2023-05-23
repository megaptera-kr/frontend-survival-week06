type Listener = () => void;

export default class ObjectStore<Snapshot> {
  private listeners = new Set<Listener>();

  snapshot = {} as Snapshot;

  addListener(listener: () => void) {
    this.listeners.add(listener);
  }

  removeListener(listener: () => void) {
    this.listeners.delete(listener);
  }

  getSnapshot() {
    return this.snapshot;
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }
}
