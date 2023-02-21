// import { QwikifyProps } from '@builder.io/qwik-react';
// import { Component } from 'react';
// import { IconBaseProps } from 'react-icons';
import { FireIcon, GamepadIcon, MusicIcon } from "../integrations/react/icons";

export type BoxProps = {
  id: number;
  name: string;
  icon: any;
};

export default [
  {
    id: 1,
    name: "Trending",
    icon: FireIcon,
  },
  {
    id: 2,
    name: "Music",
    icon: MusicIcon,
  },
  {
    id: 3,
    name: "Mixes",
    icon: GamepadIcon,
  },
  {
    id: 3,
    name: "Live",
    icon: GamepadIcon,
  },
  {
    id: 3,
    name: "Linux",
    icon: GamepadIcon,
  },
  {
    id: 3,
    name: "Teams",
    icon: GamepadIcon,
  },
  {
    id: 3,
    name: "New To you",
    icon: GamepadIcon,
  },
  {
    id: 3,
    name: "Posts",
    icon: GamepadIcon,
  },
  {
    id: 3,
    name: "Recently Uploaded",
    icon: GamepadIcon,
  },
] as BoxProps[];
