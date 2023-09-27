import { ReactNode } from "react";

type PanelProps = {
  badgeColor?: string;
  label: string;
  badgeContent?: ReactNode;
  children?: ReactNode;
};

export const Panel = ({
  badgeColor = "white",
  label,
  badgeContent = null,
  children = null,
}: PanelProps): JSX.Element => {
  return (
    <>
      <div className="flex justify-start pr-10">
        <div
          className="h-[90px] w-[90px] absolute rounded-xl z-10"
          style={{ backgroundColor: badgeColor }}
        >
          <div className="w-full h-full justify-center place-items-center flex p-1">
            {badgeContent}
          </div>
        </div>
      </div>
      <div className="h-full mt-7 flex items-end justify-center">
        <div
          style={{ flexFlow: "column wrap" }}
          className="h-full flex flex-col bg-neutral-800/90 w-full rounded-xl backdrop-blur-lg p-3"
        >
          <div
            style={{ alignSelf: "flex-end" }}
            className="w-[70%] flex justify-center h-fit justify-self-end"
          >
            <div className="text-2xl heebo font-bold">{label}</div>
          </div>
          <div className="flex grow mt-6 max-w-full min-w-0 overflow-hidden">
            {children ?? ""}
          </div>
        </div>
      </div>
    </>
  );
};
