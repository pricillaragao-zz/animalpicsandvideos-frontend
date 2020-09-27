import React from 'react'
import Avatar from './Avatar';

import dogImg from './dog.jpg'

export default {
  title: 'AnimalPicsAndVideos/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar imgUrl={args.imgUrl} description={args.description} />

export const Default = Template.bind({});
Default.args = {
  imgUrl: dogImg,
  description: 'Dogs',
}
