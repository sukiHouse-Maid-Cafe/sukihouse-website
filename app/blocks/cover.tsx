export default function Cover() {
  return (
    <main
      id="cover"
      className="bg-cafe-background text-cafe-primary-text min-h-screen flex flex-col items-center justify-center p-8 relative"
      style={{ fontFamily: "'Book Antiqua', serif" }}
    >
      <div className="text-center text-white">
        <h1 className="text-8xl mb-4">sukiHouse Maid Cafe</h1>
        <p className="text-4xl text-right">咖啡厅营业中~</p>
      </div>
      <div className="bg-cafe-medium h-16 absolute bottom-0 left-0 right-0" />
    </main>
  );
}
