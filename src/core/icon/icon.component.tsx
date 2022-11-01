import React from 'react';
import { ContentColorToken, IconToken } from '@uni-design-system/uni-core';
import {
  AddressCardSolid,
  AngleDownSolid,
  AngleLeftSolid,
  AngleRightSolid,
  AngleUpSolid,
  ArrowUpRightFromSquareSolid,
  CalendarDaysSolid,
  CommentsSolid,
  EllipsisVerticalSolid,
  EyeSlashSolid,
  EyeSolid,
  HeartSolid,
  InboxSolid,
  InfoSolid,
  LockOpenSolid,
  LockSolid,
  MagnifyingGlassSolid,
  MessageRegular,
  MinusSolid,
  PaperclipSolid,
  PaperPlaneSolid,
  PasteRegular,
  PenSolid,
  PhoneSolid,
  PlaySolid,
  PlusSolid,
  QuestionSolid,
  SlidersSolid,
  TrashCanRegular,
  TriangleExclamationSolid,
  UserSolid,
  VideoSolid,
} from '@uni-design-system/uni-react-icons';
import { useTheme } from '../theme';

export interface IconProps {
  name?: IconToken;
  color?: ContentColorToken;
  height?: number;
  width?: number;
}

export function Icon({ name = 'alert', color = 'on-surface', height = 24, width = 24 }: IconProps) {
  const theme = useTheme();
  const themeColor = theme.colors[color];

  const iconMap: Record<IconToken, any> = {
    alert: TriangleExclamationSolid,
    warn: TriangleExclamationSolid,
    disabled: LockSolid,
    trash: TrashCanRegular,
    user: UserSolid,
    back: AngleLeftSolid,
    next: AngleRightSolid,
    add: PlusSolid,
    create: PlusSolid,
    copy: PasteRegular,
    edit: PenSolid,
    disable: LockSolid,
    save: AngleUpSolid,
    pin: PaperclipSolid,
    tag: AngleUpSolid,
    update: AngleUpSolid,
    archive: AngleUpSolid,
    delete: AngleUpSolid,
    lock: LockSolid,
    unlock: LockOpenSolid,
    view: EyeSolid,
    hide: EyeSlashSolid,
    open: AngleDownSolid,
    expand: AngleDownSolid,
    collapse: AngleUpSolid,
    info: InfoSolid,
    success: AngleUpSolid,
    warning: TriangleExclamationSolid,
    logo: AngleUpSolid,
    chat: MessageRegular,
    down: AngleDownSolid,
    favorite: HeartSolid,
    location: AngleUpSolid,
    message: AngleUpSolid,
    profile: AddressCardSolid,
    question: QuestionSolid,
    remove: MinusSolid,
    schedule: CalendarDaysSolid,
    search: MagnifyingGlassSolid,
    send: PaperPlaneSolid,
    settings: SlidersSolid,
    share: ArrowUpRightFromSquareSolid,
    up: AngleUpSolid,
    play: PlaySolid,
    stop: TrashCanRegular,
    forward: TrashCanRegular,
    beginning: TrashCanRegular,
    plus: PlusSolid,
    minus: MinusSolid,
    more: EllipsisVerticalSolid,
    details: TrashCanRegular,
    call: PhoneSolid,
    video: VideoSolid,
    inbox: InboxSolid,
    mail: InboxSolid,
    comment: CommentsSolid,
    home: TrashCanRegular,
  };

  const Icon = iconMap[name];

  return <Icon width={width} height={height} color={themeColor} />;
}
