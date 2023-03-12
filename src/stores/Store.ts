export default abstract class Store<Snapshot> {
  listeners = new Set<() => void>();

  snapshot = {} as Snapshot;

  // 함수 subscribe는 스토어를 구독하고 구독을 취소하는 함수를 반환해야 합니다.
  addListener(listener: () => void) {
    // listener를 모아놓은 자료구조를 만든다.
    this.listeners.add(listener);
  }

  removeListener(listener: () => void) {
    this.listeners.delete(listener);
  }

  // 함수 getSnapshot는 저장소에서 데이터의 스냅샷을 읽어야 합니다.
  // 상태를 저장한다.
  getSnapshot() {
    return this.snapshot;
  }

  // 상태가 변경 됐음을 알리는 메소드를 만든다.
  publish() {
    this.listeners.forEach((listener) => listener());
  }
}
