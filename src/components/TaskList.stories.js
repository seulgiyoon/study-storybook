import React from 'react';

import { PureTaskList } from './PureTaskList';
import { taskData, actionsData } from './Task.stories';

export default {
  component: PureTaskList,
  title: 'TaskList',
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
  parameters: { assets: ['designs/list-1.png', 'designs/list-2.png'] },
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...taskData, id: '1', title: 'Task 0' },
  { ...taskData, id: '2', title: 'Task 2' },
  { ...taskData, id: '3', title: 'Task 3' },
  { ...taskData, id: '4', title: 'Task 4' },
  { ...taskData, id: '5', title: 'Task 5' },
  { ...taskData, id: '6', title: 'Task 6' },
];

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

export const withArchivedTasksData = [
  ...defaultTasksData.slice(0, 4),
  { id: '5', title: 'Task 5 (archived)', state: 'TASK_ARCHIVED' },
  { id: '6', title: 'Task 6 (archived)', state: 'TASK_ARCHIVED' },
];

export const Default = () => (
  <PureTaskList tasks={defaultTasksData} {...actionsData} />
);

export const WithPinnedTasks = () => (
  <PureTaskList tasks={withPinnedTasksData} {...actionsData} />
);

export const WithArchivedTasks = () => (
  <PureTaskList tasks={withArchivedTasksData} {...actionsData} />
);

export const Loading = () => (
  <PureTaskList loading tasks={[]} {...actionsData} />
);

export const Empty = () => <PureTaskList tasks={[]} {...actionsData} />;
