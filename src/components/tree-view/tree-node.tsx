import { CursorProps, NodeApi, NodeRendererProps } from 'react-arborist';
import clsx from 'clsx';
import {
  ChevronDown,
  ChevronRight,
  Inbox,
  SendHorizontal,
  Star,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import MenuItem from '../menu-item/menu-item';

import { TreeNode } from './tree-view';

import styles from './tree-view.module.scss';

export const Node = ({
  node,
  style,
  dragHandle,
}: NodeRendererProps<TreeNode>) => {
  return (
    <MenuItem
      className={clsx('h-full pr-0', styles.node, node.state, {
        'focus:bg-accent': node.isSelected && node.isLeaf,
      })}
      ref={dragHandle}
      style={style}
      onClick={() => node.isInternal && node.toggle()}>
      <div className='text-sidebar-foreground w-full grid grid-cols-[auto_1fr_auto] items-center gap-2 h-full px-2.5'>
        <FolderArrow node={node} />
        <span className='text-sidebar-foreground truncate min-w-0 text-sm font-medium font-primary'>
          {node.data.name}
        </span>
        {!node.isLeaf && (
          <Button
            className='w-8 h-8 p-0 flex items-center justify-center rounded-full text-yellow-300 shrink-0 hover:bg-stone-200 dark:hover:bg-stone-600 hover:text-yellow-300 focus:shadow-none'
            size='icon'
            type='button'
            variant='ghost'
            onClick={(event) => {
              event.stopPropagation();
            }}>
            <Star
              className={clsx(styles.favoriteIcon, {
                'fill-yellow-300': node.data.isFavorite,
              })}
            />
          </Button>
        )}
      </div>
    </MenuItem>
  );
};

function FolderArrow({ node }: { node: NodeApi<TreeNode> }) {
  if (node.isLeaf) {
    return node.data.key === 'inbox' ? (
      <Inbox className='text-foreground ' />
    ) : (
      <SendHorizontal className='text-foreground ' />
    );
  }

  return (
    <span>
      {node.isOpen ? (
        <ChevronDown className='text-foreground em:size-5' />
      ) : (
        <ChevronRight className='text-foreground em:size-5' />
      )}
    </span>
  );
}

export function Cursor({ top, left }: CursorProps) {
  return (
    <div
      className='w-full h-0 border-t-4 border-primary absolute z-10'
      style={{ top, left }}></div>
  );
}
