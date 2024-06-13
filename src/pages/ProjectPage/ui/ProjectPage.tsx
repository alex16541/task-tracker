import { Task, TaskCard, TasksActions } from "@/entity/Task";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Flex, FloatButton, Form, Input, Modal, Select } from "antd";
import classNames from "classnames";
import { memo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import type { FormProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { selectTasksByProject } from "@/entity/Task/model/selectors/tasksSelectors";
import { useForm } from "antd/es/form/Form";
import { selectProjectByName } from "@/entity/Project";

interface ProjectPageProps {
  className?: string;
}

type FieldType = {
  title?: string;
  priority?: 1 | 2 | 3 | 4;
  description?: string;
  complited?: boolean;
  date?: string;
  time?: string;
  timeToWork?: string;
  tags?: string[];
  path?: string; // Путь: проект -> подпроект -> раздел -> таска -> сабтаска -> сабтаска
  subtasks?: string[]; // Список йдишников сабтасок
  comments?: string[]; // Список йдишников тэгов
};

const ProjectPage = (props: ProjectPageProps) => {
  const { className } = props;
  const dispath = useAppDispatch();
  const [form] = useForm();
  const { parent, name } = useParams();
  const project = useAppSelector(selectProjectByName(name));
  const [isOpen, setIsOpen] = useState(false);
  const tasks = useAppSelector(selectTasksByProject(project?.id));

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const createTask = () => {
    setIsOpen(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);

    dispath(TasksActions.addTask(values as Task));

    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (task: Task) => {
    dispath(TasksActions.setTask({ ...task, complited: !task.complited }));
  };

  if (!project) return <Navigate to={"/404"} />;

  return (
    <div className={classNames(className, "mx-auto max-w-5xl")}>
      <div className="p-5 flex flex-col gap-4 h-full">
        <h1 className="text-4xl font-bold">
          {parent && `${parent} / `}
          {name}
        </h1>
        <Flex vertical gap={20}>
          <Flex vertical gap={10}>
            {tasks
              .filter((t) => !t.section)
              .map(
                (t) =>
                  !t?.complited && (
                    <TaskCard task={t} onChange={onChange} key={t.id} />
                  ),
              )}
            <Button type="text" onClick={open}>
              Добавить задачу
            </Button>
          </Flex>

          {project.sections?.map((section) => (
            <Flex vertical gap={10} key={section.id}>
              <h3 className="text-xl font-bold">{section.name}</h3>
              {tasks
                .filter((t) => t.section === section.id)
                .map(
                  (t) =>
                    !t?.complited && (
                      <TaskCard task={t} onChange={onChange} key={t.id} />
                    ),
                )}
              <Button type="text" onClick={open}>
                Добавить задачу
              </Button>
            </Flex>
          ))}
        </Flex>
      </div>
      <FloatButton
        shape="circle"
        type="primary"
        onClick={open}
        style={{ right: 50 }}
        icon={<PlusOutlined />}
      />
      <Modal
        title="Добавить задачу"
        open={isOpen}
        onOk={createTask}
        onCancel={close}
        footer={[
          <Button form="addTask" danger key="reset" htmlType="reset">
            Отмена
          </Button>,
          <Button form="addTask" type="primary" key="submit" htmlType="submit">
            Добавить
          </Button>,
        ]}
      >
        <Form
          name="addTask"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 800 }}
          initialValues={{ priority: "4" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Название"
            name="title"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите название задачи",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType> label="Описание" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item<FieldType> label="Приоритет" name="priority">
            <Select>
              <Select.Option value="1">Приоритет 1</Select.Option>
              <Select.Option value="2">Приоритет 2</Select.Option>
              <Select.Option value="3">Приоритет 3</Select.Option>
              <Select.Option value="4">Приоритет 4</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

const Memoized = memo(ProjectPage);

export { Memoized as ProjectPage };
