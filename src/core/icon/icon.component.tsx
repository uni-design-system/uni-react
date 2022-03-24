import React from 'react';
import { ContentColorToken, IconToken } from '@uni-design-system/uni-core';
import useTheme from '../theme/theme.hook';
import {
  AngleDownSolid,
  AngleRightSolid,
  AngleUpSolid,
  HeartSolid,
  MagnifyingGlassSolid,
  MessageRegular,
  MinusSolid,
  PaperclipSolid,
  PaperPlaneSolid,
  PasteRegular,
  PenSolid,
  PhoneSolid,
  PlusSolid, SlidersSolid,
  TrashCanRegular,
  TriangleExclamationSolid
} from '@uni-design-system/uni-react-icons';

export interface IconProps {
  name?: IconToken;
  color?: ContentColorToken;
  height?: number;
  width?: number;
}

export function Icon({ name = 'alert', color = 'on-primary', height = 24, width = 24 }: IconProps) {
  const theme = useTheme();
  const themeColor = theme.colors[color];

  const iconMap: Record<IconToken, any> = {
    'alert': TriangleExclamationSolid,
    'warn': AngleUpSolid,
    'disabled': AngleUpSolid,
    'trash': TrashCanRegular,
    'user': TrashCanRegular,
    'back': TrashCanRegular,
    'next': AngleRightSolid,
    'add': TrashCanRegular,
    'create': PlusSolid,
    'copy': PasteRegular,
    'edit': PenSolid,
    'disable': AngleUpSolid,
    'save': AngleUpSolid,
    'pin': PaperclipSolid,
    'tag': AngleUpSolid,
    'update': AngleUpSolid,
    'archive': AngleUpSolid,
    'delete': AngleUpSolid,
    'lock': AngleUpSolid,
    'unlock': AngleUpSolid,
    'view': AngleUpSolid,
    'hide': AngleUpSolid,
    'open': AngleUpSolid,
    'expand': AngleUpSolid,
    'collapse': AngleUpSolid,
    'info': AngleUpSolid,
    'success': AngleUpSolid,
    'warning': AngleUpSolid,
    'logo': AngleUpSolid,
    'chat': MessageRegular,
    'down': AngleDownSolid,
    'favorite': HeartSolid,
    'location': AngleUpSolid,
    'message': AngleUpSolid,
    'profile': AngleUpSolid,
    'question': AngleUpSolid,
    'remove': AngleUpSolid,
    'schedule': AngleUpSolid,
    'search': MagnifyingGlassSolid,
    'send': PaperPlaneSolid,
    'settings': SlidersSolid,
    'share': AngleUpSolid,
    'up': AngleUpSolid,
    'play': AngleUpSolid,
    'stop': TrashCanRegular,
    'forward': TrashCanRegular,
    'beginning': TrashCanRegular,
    'plus': PlusSolid,
    'minus': MinusSolid,
    'more': TrashCanRegular,
    'details': TrashCanRegular,
    'call': PhoneSolid,
    'video': TrashCanRegular,
    'inbox': TrashCanRegular,
    'mail': TrashCanRegular,
    'comment': TrashCanRegular,
    'home': TrashCanRegular
  }

  const Icon = iconMap[name];

  return (
    <Icon width={width} height={height} color={themeColor} />
  );
}
