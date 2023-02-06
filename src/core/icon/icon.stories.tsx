import React, { useState } from 'react';
import { Icon, IconProps } from './icon.component';
import { Button } from '../../components';
import { IconKeys, IconName } from '@uni-design-system/uni-react-icons';

export default {
  title: 'Typography/Icons',
  component: Icon,
};

export const IconPlayground = (args: IconProps) => <Icon {...args} />;

IconPlayground.args = {
  name: 'heartSolid',
  color: 'on-surface',
  height: 48,
  width: 48,
};

export const IconManifest = (): JSX.Element => {
  const [filteredIcons, setFilteredIcons] = useState<string[]>(IconKeys);

  const Filter = (filter: string): string[] => {
    return IconKeys.filter((name) => name.toLowerCase().indexOf(filter.toLowerCase()) > -1);
  };

  const copyToClipboard = async (iconName: IconName): Promise<void> => {
    await navigator.clipboard.writeText(iconName);
    alert(`Copied ${iconName} to clipboard.`);
  };

  return (
    <div>
      <input onChange={(e): void => setFilteredIcons(Filter(e.target.value))} placeholder="Filter Icons by Name" />
      <div>
        {filteredIcons.map((iconName) => {
          return (
            <Button
              buttonType="icon"
              iconName={iconName as IconName}
              onClick={(): Promise<void> => copyToClipboard(iconName as IconName)}
            >
              {iconName}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
