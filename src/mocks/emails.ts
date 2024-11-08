import { TEmailListItem } from '../types/emails';
import { generateArrayWith } from '../utils/generic';

export const emailsList: Record<string, Record<string, TEmailListItem[]>> = {
  'test1@gmail.com': {
    inbox: [
      ...generateArrayWith(225, (item) => ({
        id: `${item}`,
        title: `Email ${item}`,
        description: `Description ${item}`,
        date: `Date ${item}`,
      })),
    ],
    outbox: [
      {
        id: '4',
        title: 'Proposal Draft 1',
        description: 'Initial project scope and timeline for review',
        date: '20 March 2024',
      },
      {
        id: '5',
        title: 'Team Schedule 2',
        description: 'Updated rotation schedule for Q2',
        date: '10 February 2024',
      },
    ],
  },
  'test5@gmail.com': {
    inbox: [
      {
        id: '6',
        title: 'Budget Review 1',
        description: 'Analysis of Q1 expenditure and projections',
        date: '25 March 2024',
      },
      {
        id: '7',
        title: 'Training Schedule 2',
        description: 'Upcoming workshop dates and topics',
        date: '12 February 2024',
      },
    ],
    outbox: [
      {
        id: '8',
        title: 'Resource Request 1',
        description: 'Equipment requisition for new team members',
        date: '18 March 2024',
      },
      {
        id: '9',
        title: 'Status Report 2',
        description: 'Monthly progress update for stakeholders',
        date: '05 February 2024',
      },
    ],
  },
  'test10@gmail.com': {
    inbox: [
      {
        id: '10',
        title: 'Product Launch 1',
        description: 'Final checklist for upcoming release',
        date: '30 March 2024',
      },
      {
        id: '11',
        title: 'Customer Feedback 2',
        description: 'Compilation of user survey results',
        date: '22 February 2024',
      },
      {
        id: '12',
        title: 'Security Update 3',
        description: 'Important system security patches',
        date: '08 January 2024',
      },
    ],
    outbox: [
      {
        id: '13',
        title: 'Team Recognition 1',
        description: 'Acknowledgment of recent achievements',
        date: '27 March 2024',
      },
      {
        id: '14',
        title: 'Vendor Communication 2',
        description: 'Follow-up on service agreement terms',
        date: '14 February 2024',
      },
    ],
  },
};
