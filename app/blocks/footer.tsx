import { Music } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-cafe text-cafe-primary-text">
      <div className="bg-cafe-light h-12 text-center"></div>

      <div className="pt-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">
            sukiHouse Maid Cafe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 opacity-60">回到顶部</h3>
              <ul className="space-y-2 opacity-80">
                <li>
                  <a href="#cover" className="hover:opacity-100 transition-opacity">
                    00 欢迎光临 sukiHouse
                  </a>
                </li>
                <li>
                  <a
                    href="#bgm"
                    className="hover:opacity-100 transition-opacity"
                  >
                    01 本店的 BGM ~
                  </a>
                </li>
                <li>
                  <a
                    href="#clerks"
                    className="hover:opacity-100 transition-opacity"
                  >
                    02 关于 sukiHouse
                  </a>
                </li>
                <li>
                  <a
                    href="#clerks"
                    className="hover:opacity-100 transition-opacity"
                  >
                    03 妹抖 / 店员介绍
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="hover:opacity-100 transition-opacity"
                  >
                    04 我们的 menu
                  </a>
                </li>
                <li>
                  <a
                    href="#join"
                    className="hover:opacity-100 transition-opacity"
                  >
                    05 加入 sukiClub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 opacity-60">友情链接</h3>
              <ul className="space-y-2 opacity-80">
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    A风工作室
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    皮皮凛の小窝
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Ayakaの部屋
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 opacity-60">网站地图</h3>
              <ul className="space-y-2 opacity-80">
                <li>
                  <a href="#cover" className="hover:opacity-100 transition-opacity">
                    首页
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="hover:opacity-100 transition-opacity"
                  >
                    点餐页面
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <a
              href="https://aidn.jp/mikutap/"
              target="_blank"
              className="flex items-center gap-2 px-6 py-2 bg-cafe-medium text-white/60 border-2 border-cafe-light hover:bg-cafe transition-colors"
            >
              <Music className="w-5 h-5" />
              <span>Mikutap</span>
            </a>
          </div>
        </div>

        <p className="my-2 text-center text-lg text-white/50">
          Copyright © 2019 - 2020 suki.house. All rights reserved.
        </p>
      </div>

      <div className="bg-cafe-dark h-12 text-center opacity-60"></div>
    </footer>
  );
}
