import { random } from "../../utils/random";
import Blob from "./Blob";

export const Background = (): JSX.Element => {
  return (
    <div
      style={{ height: "-webkit-fill-available" }}
      className="w-full absolute overflow-hidden z-0"
    >
      {[...Array(5)].map((x, i) => (
        <Blob
          key={i}
          blur="1000"
          opacity={0.9}
          id={`${i}`}
          speed={2}
          width={random(300, 900)}
        />
      ))}
    </div>
  );
};
