import { king, knight, pawns } from "@/app/clerts";
import BlockTitle from "../components/BlockTitle";
import ClerkCard from "../components/ClerkCard";

export default function BlockClerks() {
  return (
    <section id="clerks" className="min-h-screen bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <BlockTitle blockNumber="03" title="妹抖 / 店员介绍" />

        <div className="grid grid-cols-2 gap-8">
          <ClerkCard {...king} layout="king" className="col-span-2" />
          <ClerkCard {...knight} layout="knight" className="col-span-2" />
          {/* {pawns.map((pawn, i) => (
            <ClerkCard key={i} {...pawn} />
          ))} */}
        </div>
      </div>
    </section>
  );
}
