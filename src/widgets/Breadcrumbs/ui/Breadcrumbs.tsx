import { memo } from "react";

import { Breadcrumb } from "antd";
import classNames from "classnames";

interface BreadcrumbsProps {
  className?: string;
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { className } = props;

  return (
    <Breadcrumb className={classNames(className)}>
      <Breadcrumb.Item href="projects">Проекты</Breadcrumb.Item>
      <Breadcrumb.Item href="task">Название задачи</Breadcrumb.Item>
    </Breadcrumb>
  );
};

const Memoized = memo(Breadcrumbs);

export { Memoized as Breadcrumbs };
