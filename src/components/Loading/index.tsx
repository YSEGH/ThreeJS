import { useEffect, useState } from "react";
import SphereFull from "./components/SphereFull";
import style from "./style/index.module.css";
import classNames from "classnames";

const index = () => {
  const [progress, setProgress] = useState(0);

  const size = 300;
  const strokeWidth = 5;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - strokeWidth; // Rayon du cercle
  const circumference = 2 * Math.PI * radius; // Circonférence du cercle
  const progressValue = (progress / 100) * circumference; // Valeur de progression

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 20); // Mettez à jour la progression toutes les secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.container}>
      <div
        className={classNames(style.container__sphere, {
          [style.full_progress]: progress === 100 ? true : false,
        })}
      >
        <div className={style.sphere__full}>
          <SphereFull widthSet={200} />
        </div>
        <div className={classNames(style.sphere)}>
          <svg className={style.circle} height={size} width={size}>
            <circle
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={cx}
              cy={cy}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progressValue}
            />
          </svg>
          <svg className={style.circle} height={size} width={size}>
            <circle
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={cx}
              cy={cy}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progressValue}
            />
          </svg>
          <svg className={style.circle} height={size} width={size}>
            <circle
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={cx}
              cy={cy}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progressValue}
            />
          </svg>
          <svg className={style.circle} height={size} width={size}>
            <circle
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={cx}
              cy={cy}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progressValue}
            />
          </svg>
          <svg className={style.circle} height={size} width={size}>
            <circle
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={cx}
              cy={cy}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progressValue}
            />
          </svg>
          <svg className={style.circle} height={size} width={size}>
            <circle
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={cx}
              cy={cy}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progressValue}
            />
          </svg>
          <svg className={style.circle} height={size} width={size}>
            <circle
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={cx}
              cy={cy}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progressValue}
            />
          </svg>
          <svg className={style.circle} height={size} width={size}>
            <circle
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={cx}
              cy={cy}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progressValue}
            />
          </svg>
          <svg className={style.circle} height={size} width={size}>
            <circle
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={cx}
              cy={cy}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progressValue}
            />
          </svg>
          <svg className={style.circle} height={size} width={size}>
            <circle
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={cx}
              cy={cy}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progressValue}
            />
          </svg>
          <svg className={style.circle} height={size} width={size}>
            <circle
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={cx}
              cy={cy}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progressValue}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default index;
