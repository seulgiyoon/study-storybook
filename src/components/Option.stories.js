import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { withKnobs, object } from '@storybook/addon-knobs/react';

import Option from './Option';

export default {
  component: Option,
  title: 'Option',
  // decorators: [withKnobs],
  // parameters: { assets: ['designs/items.png'] },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Option title="회원" checked={1} />;
};

// export const Pinned = () => (
//   <Option task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
// );

// export const Archived = () => (
//   <Option task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
// );
