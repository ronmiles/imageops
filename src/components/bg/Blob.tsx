// import { spline } from "@georgedoescode/spline";
import { useEffect, useRef, useState } from "react";
import { createNoise2D } from "simplex-noise";
import { random } from "../../utils/random";
import { Point, spline } from "../../utils/spline";

type BlobProps = {
  speed?: number;
  blur?: string;
  width?: number;
  className?: string;
  id?: string;
  opacity?: number;
};

type FullPoint = Point & {
  originX: number;
  originY: number;
  noiseOffsetX: number;
  noiseOffsetY: number;
};

const INITIAL_NOISE = 0.0007;

const Blob = ({
  speed = 1,
  blur = "0",
  width = 200,
  className = "",
  id = "blob",
  opacity = 1,
}: BlobProps) => {
  const pathRef = useRef<SVGPathElement | null>(null);

  const [currHue, setCurrHue] = useState<number>(random(260, 359));
  const [startColor, setStartColor] = useState<string>(
    `hsl(${currHue}, 100%, 75%)`
  );
  const [endColor, setEndColor] = useState<string>(
    `hsl(${random(currHue - 20, currHue + 20)}, 100%, 75%)`
  );

  const [noiseStep, setNoiseStep] = useState<number>(INITIAL_NOISE);
  const [points] = useState<FullPoint[]>(createPoints());

  const svgRef = useRef<SVGSVGElement | null>(null);
  const [isInitialPositionSet, setIsInitialPositionSet] = useState(false);

  function transformNumber(inputNumber: number): number {
    // You can adjust the transformation factor as needed
    const transformationFactor = 100;

    // Perform the transformation
    const transformedNumber = transformationFactor / inputNumber;

    return transformedNumber + 10;
  }

  useEffect(() => {
    const updateColor = () => {
      setCurrHue(random(currHue - 20, currHue + 20));
      setStartColor(`hsl(${currHue}, 100%, 75%)`);
      setEndColor(`hsl(${random(currHue - 20, currHue + 20)}, 100%, 75%)`);
    };

    const timer = setInterval(updateColor, transformNumber(speed) * 100);

    // Cleanup the timer on unmount
    return () => clearInterval(timer);
  }, [startColor, endColor, speed, currHue]);

  useEffect(() => {
    // Function to generate a random position within the screen boundaries
    const getRandomPosition = () => ({
      x: -random(0, window.innerWidth - 100), // Adjust as needed
      y: random(0, window.innerHeight * 0.7), // Adjust as needed
    });

    // Function to update the SVG element's position
    const updatePosition = () => {
      if (svgRef.current) {
        const newPosition = getRandomPosition();
        if (isInitialPositionSet === true) {
          svgRef.current.style.transition = `transform ${transformNumber(
            speed
          )}s linear`;
        }
        svgRef.current.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
      }
    };

    // Initially position the SVG randomly
    updatePosition();
    setIsInitialPositionSet(true);

    // Set up a timer to update the position every 5 seconds (adjust as needed)
    const timer = setInterval(updatePosition, transformNumber(speed) * 1000);

    // Cleanup the timer on unmount
    return () => clearInterval(timer);
  }, [isInitialPositionSet, speed]);

  useEffect(() => {
    const path = pathRef.current;

    const animate = () => {
      path?.setAttribute("d", spline(points, 1, true));

      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
        const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
        const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
        const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

        point.x = x;
        point.y = y;

        point.noiseOffsetX += noiseStep;
        point.noiseOffsetY += noiseStep;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [points, noiseStep]);

  function map(
    n: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ): number {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
  }

  function noise(x: number, y: number) {
    // return simplex.noise2D(x, y);
    return createNoise2D(() => {
      return Math.random() * (y - x) + x;
    })(x, y);
  }

  function createPoints() {
    const points = [];
    const numPoints = 6;
    const angleStep = (Math.PI * 2) / numPoints;
    const rad = 75;

    for (let i = 1; i <= numPoints; i++) {
      const theta = i * angleStep;
      const x = 100 + Math.cos(theta) * rad;
      const y = 100 + Math.sin(theta) * rad;

      points.push({
        x: x,
        y: y,
        originX: x,
        originY: y,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      });
    }

    return points;
  }

  // const handleMouseOver = () => {
  //   setNoiseStep(INITIAL_NOISE * 3);
  // };

  // const handleMouseLeave = () => {
  //   setNoiseStep(INITIAL_NOISE);
  // };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      id="blobSvg"
      ref={svgRef}
      filter={`blur(${blur})`}
      viewBox={`0 0 200 200`}
      style={{
        opacity,
        position: "absolute",
      }}
      className={className}
    >
      <defs>
        <linearGradient
          filter={`blur(${blur})`}
          id={`${id}-gradient`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            style={{
              stopColor: startColor,
              transition: "4s linear",
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: endColor,
              transition: "4s linear",
            }}
          />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        // onMouseOver={handleMouseOver}
        // onMouseLeave={handleMouseLeave}
        fill={`url(#${id}-gradient)`}
      />
    </svg>
  );
};

export default Blob;
