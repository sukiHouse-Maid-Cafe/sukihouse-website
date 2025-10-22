import clsx from "clsx";
import NameDisplay from "@/app/components/NameDisplay";

interface KanjiKanaPair {
  kanji: string;
  kana: string;
}

interface JapaneseNameProps {
  surname: KanjiKanaPair[];
  givenName: KanjiKanaPair[];
  romaji: string;
}

interface ChineseNameProps {
  name: string;
}

type NameProps = JapaneseNameProps | ChineseNameProps;

interface ClerkCardProps {
  className?: string;
  avatar: string;
  nameData: NameProps;
  description: string;
  extra?: React.ReactNode;
  nicknames?: string[];
  number: string;
  layout: "king" | "knight" | "pawn";
  gender: "f" | "m" | "x";
  type: "clerk" | "maid";
}

function unifyName(nameData: NameProps) {
  if ("name" in nameData) {
    return nameData.name;
  }
  return nameData.romaji;
}

export default function ClerkCard({
  className,
  avatar,
  nameData,
  description,
  extra,
  nicknames,
  number,
  layout,
  gender,
  type,
}: ClerkCardProps) {
  const direction = layout === "pawn" ? "horizontal" : "vertical";

  const genderConfig = {
    f: { bg: "bg-pink-400", symbol: "♀" },
    m: { bg: "bg-blue-500", symbol: "♂" },
    x: { bg: "bg-gray-700", symbol: null },
  } as const;

  const genderInfo = genderConfig[gender];

  const typeConfig = {
    maid: { bg: "bg-cafe", text: "sukiHouse · 妹抖资料卡" },
    clerk: { bg: "bg-clerk-band", text: "sukiHouse · 店员资料卡" },
  } as const;

  const typeInfo = typeConfig[type];

  return (
    <div
      className={clsx(
        "flex bg-white shadow-lg rounded-lg overflow-hidden",
        direction === "vertical" ? "flex-row" : "flex-col",
        className
      )}
    >
      <div className={clsx("flex p-6", layout !== "knight" && "flex-col")}>
        <div className="flex justify-between p-6">
          <div
            className={clsx(
              "flex items-center",
              layout === "knight" ? "space-x-6" : "flex-col space-y-6"
            )}
          >
            <div className="relative w-32 h-32">
              <img
                src={avatar}
                alt={`${unifyName(nameData)}的头像`}
                className="w-32 h-32 rounded-full border border-gray-500 object-cover"
              />
              <div
                className={`absolute select-none bottom-1 right-1 ${genderInfo.bg} rounded-full w-8 h-8 flex items-center justify-center`}
              >
                {genderInfo.symbol && (
                  <span className="text-white text-lg">
                    {genderInfo.symbol}
                  </span>
                )}
              </div>
            </div>
            <div>
              <NameDisplay {...nameData} />
            </div>
          </div>
          {layout === "king" && extra && (
            <div className="px-6 py-4 text-right leading-relaxed">{extra}</div>
          )}
        </div>

        {/* Description Section */}
        <div className="px-6 py-4">
          {nicknames && nicknames.length > 0 && (
            <p className="mb-2 text-slate-800 font-bold">
              昵称：{nicknames.join(" / ")}
            </p>
          )}
          <p className="text-slate-800 leading-relaxed">{description}</p>
        </div>
      </div>

      {direction === "vertical" && (
        <div className={`basis-36 relative ${typeInfo.bg} text-white`}>
          <span className="text-4xl absolute right-2.5 top-2.5 font-bold text-white/15">
            {number}
          </span>
          <span className="writing-vertical-rl text-sm absolute text-white/60 left-2 top-8">
            {typeInfo.text}
          </span>
        </div>
      )}
      {direction === "horizontal" && (
        <div className={`h-16 relative ${typeInfo.bg} text-white flex items-center`}>
          <span className="text-4xl font-bold text-white/15 ml-8 flex items-center mb-1">
            {number}
          </span>
          <span className="text-sm absolute text-white/60 right-3 bottom-3">
            {typeInfo.text}
          </span>
        </div>
      )}
    </div>
  );
}
