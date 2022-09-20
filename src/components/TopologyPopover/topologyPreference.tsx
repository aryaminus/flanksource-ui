import clsx from "clsx";
import { FaCog } from "react-icons/fa";

import { CardSize, CardWidth } from "../TopologyCard";

export function getCardWidth() {
  let value: any = localStorage.getItem("topology_card_width");

  if (!value?.trim()) {
    return CardWidth[CardSize.extra_large];
  }

  value = parseInt(value, 10);
  if (isNaN(value)) {
    return CardWidth[CardSize.extra_large];
  } else {
    return `${value}px`;
  }
}

export const TopologyPreference = ({
  title = "Preferences",
  cardSize,
  setCardWidth,
  currentPopover,
  setCurrentPopover
}: {
  title?: string;
  cardSize: CardSize;
  currentPopover: string;
  setCardWidth: (width: string) => void;
  setCurrentPopover: (val: any) => void;
}) => {
  return (
    <>
      <FaCog
        className="content-center w-6 h-6 mt-1 ml-4 cursor-pointer md:mt-0"
        onClick={() =>
          setCurrentPopover((val: string) => (val === "" ? "preference" : ""))
        }
      />
      <div
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        className={clsx(
          "origin-top-right absolute right-0 mt-10 w-96 z-50 divide-y divide-gray-100 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none capitalize",
          currentPopover === "preference" ? "display-block" : "hidden"
        )}
      >
        <div className="py-1">
          <div className="flex items-center justify-between px-4 py-2 text-base">
            <span className="font-bold text-gray-700">{title}</span>
          </div>
        </div>
        <div className="py-1" role="none">
          <div className="px-4 py-4">
            <label
              htmlFor="topology-card-width-slider"
              className="inline-block mr-3 text-xs text-gray-700"
            >
              Card Width:
            </label>
            <input
              step={2}
              min="250"
              max="768"
              type="range"
              value={parseInt(cardSize, 10)}
              id="topology-card-width-slider"
              onChange={(e) => setCardWidth(e.target.value)}
              className="inline-block w-64 mb-4 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};
