import { TaskCardProps } from '../components/task-card';
import { v4 as uuidv4 } from 'uuid';

export type TasksBoard = Omit<TaskCardProps, 'onRemove'>[];

export const SAMPLE_TASKS: TasksBoard = [
  {
    id: uuidv4(),
    title: 'Design Website Homepage',
    description: 'E-commerce Redesign',
    content: 'Create wireframes and define the layout.', // Curto
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Review Vendor Contract',
    description: 'Vendor Management System',
    content:
      'Analyze the vendor contract for compliance, terms, and conditions. Ensure all clauses are clear and aligned with company policies.', // Médio
    status: 'inProgress',
  },
  {
    id: uuidv4(),
    title: 'Review Vendor Contract 2',
    description: 'Vendor Management System',
    content:
      'Analyze the vendor contract for compliance, terms, and conditions. Ensure all clauses are clear and aligned with company policies.', // Médio
    status: 'review',
  },
  {
    id: uuidv4(),
    title: 'Update Customer Database',
    description: 'Infrastructure Upgrade',
    content:
      'Migrate customer data to the new database schema and ensure data integrity. Perform data cleanup and remove duplicate entries for improved performance and accuracy.', // Longo
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Prepare Project Proposal',
    description: 'Expansion Plan 2024',
    content:
      'Draft an initial proposal outlining objectives, budget, and milestones.', // Médio
    status: 'review',
  },
  {
    id: uuidv4(),
    title: 'Prepare Project Proposal 2',
    description: 'Expansion Plan 2024',
    content:
      'Draft an initial proposal outlining objectives, budget, and milestones.', // Médio
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Migrate Data to New Server',
    description: 'Infrastructure Upgrade',
    content:
      'Validate the migration process and verify all services are running as expected. Ensure no data is lost during the transfer.', // Médio
    status: 'inProgress',
  },
  {
    id: uuidv4(),
    title: 'Update User Guide',
    description: 'User Support Docs',
    content: 'Edit and enhance the documentation for new features.', // Curto
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Update User Guide 2',
    description: 'User Support Docs',
    content:
      'Review feedback and refine the guide for clarity and completeness. Add screenshots and examples where necessary to improve usability for end-users.', // Longo
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Carousel',
    description: 'User Support Docs',
    content:
      'Review feedback and refine the guide for clarity and completeness. Add screenshots and examples where necessary to improve usability for end-users.', // Longo
    status: 'carousel',
  },
  {
    id: uuidv4(),
    title: 'Carousel 2',
    description: 'User Support Docs',
    content:
      'Review feedback and refine the guide for clarity and completeness. Add screenshots and examples where necessary to improve usability for end-users.', // Longo
    status: 'carousel',
  },
  {
    id: uuidv4(),
    title: 'Carousel 3',
    description: 'User Support Docs',
    content:
      'Review feedback and refine the guide for clarity and completeness. Add screenshots and examples where necessary to improve usability for end-users.', // Longo
    status: 'carousel',
  },
];
