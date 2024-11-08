import React, { useEffect, useRef } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { useNavigate } from '@tanstack/react-router';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

import Card from '../card/card';
import Link from '../link/link';

import { EmailHeader } from './types';

import styles from './email-viewer.module.scss';

interface Props {
  header: EmailHeader;
  content: string;
}

const EmailViewer = ({ header, content }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (containerRef.current) {
      const shadowRoot =
        containerRef.current.shadowRoot ??
        containerRef.current.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = content;
    }
  }, [content]);

  return (
    <div className={styles.container}>
      <Card className={styles.header}>
        <div className={styles.toolbar}>
          <Button
            plain
            rounded
            text
            icon={
              <GoArrowLeft
                fill='var(--primary-color)'
                size='20px'
              />
            }
            onClick={() => navigate({ to: '..' })}
          />
        </div>
        <Divider layout='vertical' />
        <div className={styles.headerMain}>
          <h2 style={{ maxWidth: 800 }}>{header.subject}</h2>
          <p>
            from: {header.from[0].name} (
            <Link href={`mailto:${header.to[0].address}`}>
              {header.from[0].address}
            </Link>
            )
          </p>
          <p>
            to: {header.to[0].name} (
            <Link href={`mailto:${header.to[0].address}`}>
              {header.to[0].address}
            </Link>
            )
          </p>
          <p>date: {header.date}</p>
        </div>
      </Card>
      <Card>
        <div ref={containerRef}></div>
      </Card>
    </div>
  );
};

export default EmailViewer;
