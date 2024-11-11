import React, { useEffect, useRef } from 'react';
import { Tree, TreeApi } from 'react-arborist';
import { useNavigate, useParams } from '@tanstack/react-router';
import useResizeObserver from 'use-resize-observer';

import { Skeleton } from '@/components/ui/skeleton';

import { generateMailListRoute } from '../../routes-config/utils';
import { useEmailsStore } from '../../store/emails-store';
import { generateArrayWith } from '../../utils/generic';

import { Cursor, Node } from './tree-node';

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
      <div className='grid gap-3'>
        {generateArrayWith(10, (item) => (
          <Skeleton
            className='h-8'
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
