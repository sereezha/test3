import React, { useEffect } from 'react';
import { GoStar, GoStarFill } from 'react-icons/go';
import { RiMailLine, RiMailOpenFill } from 'react-icons/ri';
import { useNavigate, useParams } from '@tanstack/react-router';
import clsx from 'clsx';
import { Button } from 'primereact/button';

import { requests } from '../../api/config/config';
import { useEmailsStore } from '../../store/emails-store';
import { TEmailType } from '../../types/emails';
import TreeView from '../tree-view/tree-view';

import styles from './sidebar.module.scss';

const toolbarButtons = [
  {
    id: 'favorites',
    label: 'Favorites',
    tooltip: 'Favorite Mails',
    icon: GoStar,
    iconFill: GoStarFill,
    fill: '#ffdc2e',
  },
  {
    id: 'all',
    label: 'All',
    tooltip: 'All Mails',
    icon: RiMailLine,
    iconFill: RiMailOpenFill,
    fill: 'var(--primary-color)',
  },
];

const getRequestFn = (emailType: TEmailType) => {
  const mapper = {
    favorites: requests.getFavoriteEmailBoxes,
    all: requests.getEmailBoxes,
  };
  return mapper[emailType];
};

const Sidebar = () => {
  const { emailType } = useParams({ strict: false });
  const navigate = useNavigate();

  const isLoading = useEmailsStore((state) => state.isLoading);
  const favoriteFolders = useEmailsStore((state) => state.favoriteFolders);
  const allFolders = useEmailsStore((state) => state.allFolders);
  const initFolders = useEmailsStore((state) => state.initFolders);

  useEffect(() => {
    if (emailType) {
      initFolders(emailType as TEmailType);
    }
  }, [emailType, initFolders]);

  const folders = emailType === 'favorites' ? favoriteFolders : allFolders;

  return (
    <div
      className={styles.sidebar}
      id='main-sidebar'>
      <div className={clsx(styles.card, styles.toolbar)}>
        {toolbarButtons.map(({ id, icon, iconFill, fill, tooltip }) => {
          const Icon = emailType === id ? iconFill : icon;
          return (
            <Button
              plain
              rounded
              text
              icon={
                <Icon
                  fill={fill}
                  size='20px'
                />
              }
              key={id}
              tooltip={tooltip}
              tooltipOptions={{
                position: 'top',
              }}
              onClick={() => navigate({ to: `/${id}` })}
            />
          );
        })}
      </div>
      <div className={clsx(styles.content, styles.card)}>
        <TreeView
          isLoading={isLoading}
          nodes={folders}
        />
      </div>
    </div>
  );
};

export default Sidebar;
