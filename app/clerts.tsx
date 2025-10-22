export const king = {
  number: "01",
  avatar: "/rinko.jpg",
  gender: "f" as const,
  type: 'maid' as const,
  nameData: {
    surname: [
      { kanji: "桐", kana: "きり" },
      { kanji: "谷", kana: "たに" },
    ],
    givenName: [
      { kanji: "凛", kana: "りん" },
      { kanji: "子", kana: "こ" },
    ],
    romaji: "Kiritani Rinko",
  },
  extra: (
    <>
      <p className="text-lg mb-2">
        爱<span className="font-bold text-red-500">动漫</span>，也爱
        <span className="font-bold text-red-500">音乐</span>
      </p>
      <p className="text-lg mb-2">
        爱<span className="font-bold text-red-500">上网</span>，也爱
        <span className="font-bold text-red-500">逛街</span>
      </p>
      <p className="text-lg mb-2">
        爱<span className="font-bold text-red-500">咖啡厅</span>，更爱咖啡厅的
        <span className="font-bold text-red-500">店员</span>和
        <span className="font-bold text-red-500">妹妹</span>
      </p>
      <p className="text-lg mb-2">
        我是姐姐力爆棚的
        <span className="font-bold text-red-500">帅气大姐姐</span>
      </p>
      <p className="text-lg mb-2">
        也是默默等待白马王子的
        <span className="font-bold text-red-500">无名公主</span>
      </p>
      <p className="text-lg mb-2">
        我不是什么<span className="font-bold text-red-500">传奇</span>
        ，也不是谁的<span className="font-bold text-red-500">精神寄托</span>
      </p>
      <p className="text-lg mb-2">
        更不是能力超群的
        <span className="font-bold text-red-500">超能力女神</span>
      </p>
      <p className="text-lg mb-2"></p>
      <p className="text-lg mb-2">
        我只是我，我是<span className="font-bold text-red-500">女仆长凛子</span>
      </p>
      <p className="text-lg mb-2">你，是我的 master 吗？</p>
    </>
  ),
  description:
    "sukiHouse 的女仆长，17 岁的女高中生。桐谷家的长女，咖啡厅的创办者。爱好是画画和旅游，偶尔在店里跳跳宅舞吸引顾客。喜欢的饮料是草莓牛奶和热可可。拥有接近 175 傲人身高的凛子姐姐，非常受少男顾客们的喜爱。",
  nicknames: ["凛子", "甘乐樱", "mika 酱"],
};

export const knight = {
  number: "02",
  avatar: '/yuya.jpg',
  gender: "x" as const,
  type: 'clerk' as const,
  nameData: {
    surname: [
      { kanji: "一", kana: "いち" },
      { kanji: "宫", kana: "みや" },
    ],
    givenName: [
      { kanji: "幽", kana: "ゆう" },
      { kanji: "夜", kana: "や" },
    ],
    romaji: "Ichimiya Yuya",
  },
  description:
    "曾经是凛子的全职妹抖，后来被凛子培养御宅力，进入 sukiHouse 工作。担任 sukiHouse 店主及首席甜品师的职位，在店里完成各式甜品的制作。由于曾在凛子身边工作，与凛子感情甚深。喜欢的饮料是加糖加甜的卡布奇诺。",
  nicknames: ["YUYA 酱"],
};

export const pawns = [
  // {
  //   number: "03",
  // }
];
