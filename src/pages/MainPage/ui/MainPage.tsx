import { memo } from "react";

import classNames from "classnames";

interface MainPageProps {
  className?: string;
}

const MainPage = (props: MainPageProps) => {
  const { className } = props;

  return <div className={classNames(className, "mx-auto max-w-5xl")}></div>;
};

const Memoized = memo(MainPage);

export { Memoized as MainPage };
