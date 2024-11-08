/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { CursorProps, NodeApi, NodeRendererProps } from 'react-arborist';
import {
  GoChevronDown,
  GoChevronRight,
  GoInbox,
  GoPaperAirplane,
  GoStar,
  GoStarFill,
} from 'react-icons/go';
import clsx from 'clsx';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

import { TreeNode } from './tree-view';

import styles from './tree-view.module.scss';

export const Node = ({
  node,
  style,
  dragHandle,
}: NodeRendererProps<TreeNode>) => {
  return (
    <div
      className={clsx(styles.node, node.state, {
        [styles.isLeaf]: node.isLeaf,
        [styles.isSelected]: node.isSelected && node.isLeaf,
      })}
      ref={dragHandle}
      style={style}
      onClick={() => node.isInternal && node.toggle()}>
      <Tooltip
        content={node.data.date}
        position='top'
        target={`[data-name="${node.data.name}"]`}
      />
      <div
        className={styles.content}
        data-name={node.data.name}>
        <FolderArrow node={node} />
        <span className={clsx(styles.name, 'truncate')}>{node.data.name}</span>
        {!node.isLeaf && (
          <Button
            rounded
            text
            className={clsx(styles.favoriteButton, {
              [styles.favoriteButtonActive]: node.data.isFavorite,
            })}
            size='small'
            type='button'
            onClick={(event) => {
              event.stopPropagation();
            }}>
            {node.data.isFavorite ? (
              <GoStarFill className={styles.filledFavoriteIcon} />
            ) : (
              <GoStar className={styles.favoriteIcon} />
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

function FolderArrow({ node }: { node: NodeApi<TreeNode> }) {
  if (node.isLeaf) {
    return node.data.key === 'inbox' ? <GoInbox /> : <GoPaperAirplane />;
  }

  return <span>{node.isOpen ? <GoChevronDown /> : <GoChevronRight />}</span>;
}

export function Cursor({ top, left }: CursorProps) {
  return (
    <div
      className={styles.cursor}
      style={{ top, left }}></div>
  );
}
