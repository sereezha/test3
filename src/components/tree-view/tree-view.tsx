import React, { useEffect, useRef } from 'react';
import { Tree, TreeApi } from 'react-arborist';
import { useNavigate, useParams } from '@tanstack/react-router';
import { Skeleton } from 'primereact/skeleton';
import useResizeObserver from 'use-resize-observer';

import { generateMailListRoute } from '../../routes-config/utils';
import { useEmailsStore } from '../../store/emails-store';
import { generateArrayWith } from '../../utils/generic';

import { Cursor, Node } from './tree-node';

import styles from './tree-view.module.scss';

export type TreeNode = {
  id: string;
  key: string;
  name: string;
  isDroppable?: boolean;
  children?: TreeNode[];
  date?: string;
  isFavorite?: boolean;
};

type Props = {
  nodes?: TreeNode[];
  isLoading?: boolean;
};

// https://drive.google.com/file/d/13IzIZf_qKvIL_SweSCyxdTjx__8e1fbg/view?usp=drive_link

const TreeView = ({ nodes, isLoading }: Props) => {
  const { ref, width, height } = useResizeObserver();
  const setSelectedAccount = useEmailsStore(
    (state) => state.setSelectedAccount
  );
  const setSelectedFolder = useEmailsStore((state) => state.setSelectedFolder);
  const navigate = useNavigate();
  const params = useParams({ strict: false });
  const treeRef = useRef<TreeApi<TreeNode>>(null);
  useEffect(() => {
    if (!params.accountId) {
      treeRef.current?.closeAll();
    }
  }, [params.accountId, params.emailType]);

  const handleMove = ({ dragIds, parentId, index }: any) => {
    console.log('move', dragIds, parentId, index);
  };

  if (isLoading) {
    return (
      <div className={styles.skeletonContainer}>
        {generateArrayWith(10, (item) => (
          <Skeleton
            height='32px'
            key={item}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{ height: '100%' }}>
      <Tree
        data={nodes}
        disableDrop={({ parentNode }) => parentNode === undefined}
        height={height}
        openByDefault={false}
        ref={treeRef}
        renderCursor={Cursor}
        rowHeight={42}
        selection={`inbox-${params.accountId}`}
        width={width}
        onActivate={(node) => {
          const { data, parent } = node;
          if (data.key === 'inbox' || data.key === 'outbox') {
            setSelectedAccount(parent!.data.name);
            setSelectedFolder(data.key);
            const to = generateMailListRoute(
              params.emailType!,
              parent!.data.name,
              data.key
            );
            navigate({ to });
          }
        }}
        onMove={handleMove}>
        {Node}
      </Tree>
    </div>
  );
};

export default TreeView;
