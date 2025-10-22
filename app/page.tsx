import { Noto_Sans_SC } from "next/font/google";
import Cover from "./blocks/cover";
import BlockBGM from "./blocks/01-bgm";
import BlockClerks from "@/app/blocks/03-clerks";

const noto_sans_sc = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={`${noto_sans_sc.className} font-sans min-h-screen overflow-auto`}>
      <Cover />
      <BlockBGM />
      <BlockClerks />
    </div>
  );
}
