"use client";

import { useState } from "react";
import BlockTitle from "../components/BlockTitle";
import { MaterialSymbolsCalendarTodayRounded } from "../components/icons/calendar";
import { MaterialSymbolsPlayArrow } from "../components/icons/play";

export default function BlockBGM() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const weekdays = [
    { abbr: "Su", label: "Sunday" },
    { abbr: "Mo", label: "Monday" },
    { abbr: "Tu", label: "Tuesday" },
    { abbr: "We", label: "Wednesday" },
    { abbr: "Fr", label: "Friday" },
    { abbr: "Sa", label: "Saturday" },
  ];

  return (
    <section className="max-w-6xl mx-auto min-h-screen w-full bg-light-gray flex flex-col items-start justify-center">
      <BlockTitle blockNumber="01" title="本店的 BGM ~" />

      {/* Weekday buttons and play button container */}
      <div className="flex items-center gap-8 w-full justify-center">
        {/* Weekday buttons */}
        {weekdays.map((day) => (
          <button
            key={day.abbr}
            onClick={() => setSelectedDay(day.abbr)}
            className={`w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all shadow-lg hover:shadow-xl ${
              selectedDay === day.abbr
                ? "bg-white scale-110"
                : "bg-white hover:bg-gray-50"
            }`}
            aria-label={day.label}
          >
            <MaterialSymbolsCalendarTodayRounded className="w-6 h-6 mb-1 text-gray-700" />
            <span className="text-sm font-semibold text-gray-700">
              {day.abbr}
            </span>
          </button>
        ))}

        {/* Play button */}
        <button
          className="w-32 h-32 rounded-full bg-amber-900 hover:bg-amber-800 flex items-center justify-center shadow-2xl transition-all hover:scale-105"
          aria-label="Play"
        >
          <MaterialSymbolsPlayArrow className="w-14 h-14 text-white ml-2" />
        </button>
      </div>
    </section>
  );
}
