export interface KanjiKanaPair {
  kanji: string;
  kana: string;
}

export interface JapaneseNameProps {
  surname: KanjiKanaPair[];
  givenName: KanjiKanaPair[];
  romaji: string;
}

export interface ChineseNameProps {
  name: string;
}

export type NameProps = JapaneseNameProps | ChineseNameProps;

export default function NameDisplay(props: NameProps) {
  if ("name" in props) {
    return (
      <div className="relative">
        <h3 className="text-4xl font-bold text-gray-800">
          <span className="text-3xl align-top">「</span>
          {props.name}
          <span className="text-3xl align-bottom">」</span>
        </h3>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-stretch h-26">
        <span className="text-3xl font-bold text-gray-800 leading-none mr-2 mt-2">「</span>

        <div className="flex flex-col justify-between">
          <h3 className="text-4xl font-bold text-gray-800 flex items-end mb-1 tracking-wide grow">
          {props.surname.map((pair, index) => (
            <ruby key={`surname-${index}`} className="ruby-text">
              {pair.kanji}
              <rt className="text-xs">{pair.kana}</rt>
            </ruby>
          ))}
          
          <span className="mx-1"></span>
          
          {props.givenName.map((pair, index) => (
            <ruby key={`given-${index}`} className="ruby-text">
              {pair.kanji}
              <rt className="text-xs">{pair.kana}</rt>
            </ruby>
          ))}
        </h3>
        <span className="text-center font-bold">{props.romaji}</span>
        </div>

        <span className="text-3xl font-bold text-gray-800 leading-none ml-2 mb-2 self-end">」</span>
      </div>
    </div>
  );
}
