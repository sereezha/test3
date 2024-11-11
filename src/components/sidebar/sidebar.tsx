import React, { useEffect } from 'react';
import { GoStar, GoStarFill } from 'react-icons/go';
import { RiMailLine, RiMailOpenFill } from 'react-icons/ri';
import { Link, useParams } from '@tanstack/react-router';
import clsx from 'clsx';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { useEmailsStore } from '../../store/emails-store';
import { emailTypes, TEmailType } from '../../types/emails';
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
    fill: '#2563eb',
  },
];

const Sidebar = () => {
  const { emailType } = useParams({ strict: false });

  const isLoading = useEmailsStore((state) => state.isLoading);
  const favoriteFolders = useEmailsStore((state) => state.favoriteFolders);
  const allFolders = useEmailsStore((state) => state.allFolders);
  const initFolders = useEmailsStore((state) => state.initFolders);

  useEffect(() => {
    if (!emailType || !emailTypes.includes(emailType as TEmailType)) return;

    initFolders(emailType as TEmailType);
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
            <React.Fragment key={id}>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      asChild
                      variant='ghost'>
                      <Link
                        data-id={id}
                        key={id}
                        to={`/${id}`}>
                        <Icon
                          fill={fill}
                          size='20px'
                        />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{tooltip}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </React.Fragment>
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
