import {
  EditOutlined,
  CalendarOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Card, Flex, Checkbox, Button, Typography } from "antd";
import { memo, useCallback } from "react";
import { Task } from "../model/types";
import classNames from "classnames";
const { Title, Text } = Typography;

interface TaskCardProps {
  className?: string;
  task?: Task | null;
  onChange?: (task: Task) => void;
}

const TaskCard = (props: TaskCardProps) => {
  const { className, task, onChange } = props;

  const handleOnChange = useCallback(() => {
    if (task) {
      onChange?.(task);
    }
  }, [task, onChange]);

  if (!task) return null;

  return (
    <Card className={classNames(className, "w-full")}>
      <Flex gap={10} align="center">
        <Checkbox onChange={handleOnChange} checked={task.complited} />
        <Flex vertical className="w-full pl-3">
          <Title level={5}>{task?.title}</Title>
          <Text>{task?.description}</Text>
        </Flex>
        {/* Возможно стоит вынести это выше, в фичу таски и прокидывать сюда просто как слот эшенов */}
        <Button shape="circle" icon={<EditOutlined />} />
        <Button shape="circle" icon={<CalendarOutlined />} />
        <Button shape="circle" icon={<MoreOutlined />} />
      </Flex>
    </Card>
  );
};

const Memoized = memo(TaskCard);

export { Memoized as TaskCard };
