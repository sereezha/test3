import React, { useEffect, useRef } from 'react';
import { useRouter } from '@tanstack/react-router';
import clsx from 'clsx';
import { ArrowLeft } from 'lucide-react';

import Heading from '@/components/typography/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

import Card from '../card/card';
import Link from '../link/link';

import { EmailHeader } from './types';

import styles from './email-viewer.module.scss';
import { Muted } from '../typography/muted';

interface Props {
  header?: EmailHeader;
  content?: string;
  isLoading?: boolean;
}

const EmailViewer = ({ header, content, isLoading }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (containerRef.current) {
      const shadowRoot =
        containerRef.current.shadowRoot ??
        containerRef.current.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = content ?? '';
    }
  }, [content]);

  return (
    <div className='grid grid-rows-[auto_1fr] gap-3 h-full overflow-auto min-h-[500px]'>
      <Card className='flex gap-2.5'>
        {isLoading && <Skeleton className='w-full h-24' />}
        {!isLoading && header && (
          <>
            <div className={clsx('flex justify-self-start', styles.toolbar)}>
              <Button
                className='h-full'
                size='icon'
                variant='ghost'
                onClick={() => router.history.back()}>
                <ArrowLeft className='text-foreground' />
              </Button>
            </div>
            <Separator orientation='vertical' />
            <div className='text-foreground'>
              <Heading
                align='start'
                as='h2'
                className='max-w-4xl'
                variant='h3'>
                {header.subject}
              </Heading>
              <Muted>
                from: {header.from[0].name} (
                <Link href={`mailto:${header.to[0].address}`}>
                  {header.from[0].address}
                </Link>
                )
              </Muted>
              <Muted>
                to: {header.to[0].name} (
                <Link href={`mailto:${header.to[0].address}`}>
                  {header.to[0].address}
                </Link>
                )
              </Muted>
              <Muted>date: {header.date}</Muted>
            </div>
          </>
        )}
      </Card>
      <Card>
        {isLoading ? (
          <Skeleton className='w-full h-full' />
        ) : (
          <div ref={containerRef}></div>
        )}
      </Card>
    </div>
  );
};

export default EmailViewer;
