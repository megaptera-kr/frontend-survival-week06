type KioskTitle = {
  title: string;
};

export default function KioskTitle({ title }: KioskTitle) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
