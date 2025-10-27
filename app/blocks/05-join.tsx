import { Radio } from "lucide-react";
import BlockTitle from "../components/BlockTitle";

export default function BlockJoin() {
  const benefits = [
    {
      icon: "🌙",
      text: "在 21:40 以后进入咖啡厅",
    },
    {
      icon: "📶",
      text: "店内高速 Wi-Fi 通道",
    },
    {
      icon: "🎁",
      text: "获取咖啡厅资讯与礼品",
    },
    {
      icon: "☕",
      text: "储存自定义饮品配方",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto min-h-screen w-full bg-light-gray flex flex-col items-start justify-center">
      <BlockTitle blockNumber="05" title="加入 sukiClub" />

      <div className="flex items-center gap-16 w-full justify-around">
        <div className="relative drop-shadow-2xl">
          <div className="absolute top-5 left-5 w-80 h-48 bg-white rounded-2xl" />
          <div className="relative w-80 h-48 bg-cafe-light text-white rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="p-5">
              <div className="font-[Book_Antiqua]">
                <h3 className="text-2xl font-bold">sukiHouse™</h3>
                <p>Maid Cafe</p>
              </div>
              <div className="flex justify-end">
                <Radio className="size-8" />
              </div>
            </div>

            <div className="flex justify-end items-center px-6 bg-cafe h-13 font-bold">
              No. 0000
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-4xl">{benefit.icon}</span>
              <span className="text-lg text-gray-700">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
