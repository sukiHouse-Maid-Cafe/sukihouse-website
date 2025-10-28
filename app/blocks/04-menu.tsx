import BlockTitle from "../components/BlockTitle";

export default function BlockMenu() {
  const menuCategories = [
    { icon: "🧁", label: "轻食" },
    { icon: "🍰", label: "甜点" },
    { icon: "🍨", label: "冰激凌" },
    { icon: "🍟", label: "小吃" },
    { icon: "☕", label: "饮品" },
  ];

  return (
    <section id="menu" className="max-w-6xl mx-auto min-h-screen w-full bg-light-gray flex flex-col items-start justify-center">
      <BlockTitle blockNumber="04" title="我们的 menu" />

      <div className="flex items-center gap-6 w-full justify-center">
        {menuCategories.map((category) => (
          <button
            key={category.label}
            className="w-36 h-36 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex flex-col items-center justify-center gap-3"
          >
            <span className="text-5xl">{category.icon}</span>
            <span className="text-lg font-medium text-gray-700">
              {category.label}
            </span>
          </button>
        ))}

        <button className="w-36 h-36 bg-amber-900 hover:bg-amber-800 rounded-lg shadow-xl transition-all hover:scale-105 flex flex-col items-center justify-center gap-2">
          <span className="text-4xl">🍽️</span>
          <span className="text-base font-medium text-white">开始点餐</span>
        </button>
      </div>
    </section>
  );
}