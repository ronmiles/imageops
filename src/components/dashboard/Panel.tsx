import { ReactNode } from "react";

type PanelProps = {
  badgeColor?: string;
  label: string;
  badgeContent?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
};

export const Panel = ({
  badgeColor = "white",
  label,
  badgeContent = null,
  subtitle = null,
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
      <div className="h-full mt-[40px] flex items-end justify-center">
        <div className="h-full flex flex-col bg-neutral-800/90 rounded-xl backdrop-blur-lg p-3 max-w-full w-full">
          <div className="h-full flex-grow flex flex-col">
            <div className="flex justify-end h-fit">
              <div className="w-[70%] flex justify-center">
                <div className="text-2xl heebo font-bold">{label}</div>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <div className="w-[70%] flex justify-center">{subtitle}</div>
            </div>
            <div className="flex-grow mt-[4%] max-w-full min-w-0 overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
