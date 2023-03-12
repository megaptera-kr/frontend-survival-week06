export default class Store<Snapshot> {
  protected listeners = new Set<() => void>();

  protected snapshot = {} as Snapshot;

  addListener(listener: ()=> void) {
    this.listeners.add(listener);
  }

  removeListener(listener: ()=> void) {
    this.listeners.delete(listener);
  }

  getSnapshot() {
    return this.snapshot;
  }

  // 상태가 변경됐음을 알리는 메서드
  publish() {
    this.listeners.forEach((listener) => listener());
  }
}
