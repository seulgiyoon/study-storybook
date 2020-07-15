import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Task from './Task';
import './Task.css';

export default {
  component: Task,
  title: 'Task',
  decorators: [withKnobs],
  parameters: { assets: ['designs/items.png'] },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'hello storybook',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('firstTask'),
  onArchiveTask: action('secondTask'),
};

export const Default = () => {
  return <Task task={object('task', { ...taskData })} {...actionsData} />;
};

export const Pinned = () => (
  <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
);

export const Archived = () => (
  <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
);
