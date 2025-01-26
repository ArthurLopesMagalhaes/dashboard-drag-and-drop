import { TaskCardProps } from '../components/task-card';
import { v4 as uuidv4 } from 'uuid';

export type TasksBoard = Omit<TaskCardProps, 'onRemove'>[];

export const SAMPLE_TASKS: TasksBoard = [
  {
    id: uuidv4(),
    title: 'Develop Login Page',
    description: 'Authentication System',
    content: 'Implement user authentication and validation flow.', // Curto
    status: 'done',
  },
  {
    id: uuidv4(),
    title: 'Optimize API Calls',
    description: 'Performance Enhancement',
    content:
      'Analyze existing API calls and refactor for better performance. Reduce response time and handle edge cases.', // Médio
    status: 'inProgress',
  },
  {
    id: uuidv4(),
    title: 'Write Test Cases',
    description: 'Code Quality',
    content:
      'Create comprehensive unit and integration tests for the payment module to ensure reliability and prevent regressions.', // Longo
    status: 'review',
  },
  {
    id: uuidv4(),
    title: 'Plan Marketing Campaign',
    description: 'Q2 Product Launch',
    content:
      'Collaborate with the marketing team to design a campaign strategy, including social media and email marketing efforts.', // Médio
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Deploy to Production',
    description: 'Release Management',
    content:
      'Coordinate with QA and DevOps to roll out the latest application version to production. Monitor for errors post-deployment.', // Longo
    status: 'inProgress',
  },
  {
    id: uuidv4(),
    title: 'Research Competitor Products',
    description: 'Market Analysis',
    content: 'Analyze features and pricing strategies of competitors.', // Curto
    status: 'review',
  },
  {
    id: uuidv4(),
    title: 'Create Onboarding Flow',
    description: 'User Experience',
    content:
      'Design a smooth onboarding experience for new users, including walkthroughs and tooltips for key features.', // Médio
    status: 'done',
  },
  {
    id: uuidv4(),
    title: 'Configure CI/CD Pipeline',
    description: 'DevOps Automation',
    content:
      'Set up and test the CI/CD pipeline to streamline the development workflow. Automate builds, tests, and deployments.', // Longo
    status: 'inProgress',
  },
  {
    id: uuidv4(),
    title: 'Organize Team Meeting',
    description: 'Sprint Planning',
    content:
      'Schedule and conduct a meeting to discuss the next sprint goals and timelines.', // Curto
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Prepare Performance Report',
    description: 'Quarterly Review',
    content:
      'Compile and analyze key performance indicators (KPIs) for the quarter. Present findings and improvement areas.', // Médio
    status: 'review',
  },
  {
    id: uuidv4(),
    title: 'Design Feature Mockups',
    description: 'UI/UX Enhancements',
    content:
      'Create interactive mockups for the new features. Gather feedback from stakeholders to refine the designs.', // Longo
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Integrate Payment Gateway',
    description: 'E-commerce Platform',
    content:
      'Set up and test the integration of a secure payment gateway. Ensure compatibility across different platforms.', // Médio
    status: 'inProgress',
  },
  {
    id: uuidv4(),
    title: 'Improve Accessibility',
    description: 'User Experience',
    content:
      'Conduct an audit to identify accessibility gaps. Implement ARIA roles and improve keyboard navigation.', // Médio
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'Finalize Release Notes',
    description: 'Documentation',
    content: 'Prepare and publish.', // Curto
    status: 'done',
  },
  {
    id: uuidv4(),
    title: 'Conduct Security Audit',
    description: 'System Security',
    content:
      'Evaluate the application’s security measures comprehensively, including authentication, authorization, and data encryption protocols. Conduct penetration testing to identify potential vulnerabilities, simulate real-world attacks, and assess the effectiveness of implemented safeguards. Review server configurations, ensure proper patching of known exploits, and validate compliance with industry security standards. Document findings in detail and propose a prioritized action plan to address identified risks while enhancing overall system resilience.', // Longo
    status: 'review',
  },
  {
    id: uuidv4(),
    title: 'Optimize Carousel Animations',
    description: 'UI Enhancements',
    content:
      'Improve the smoothness and responsiveness of carousel animations for a better user experience.', // Médio
    status: 'carousel',
  },
  {
    id: uuidv4(),
    title: 'Add Swipe Functionality',
    description: 'Mobile Optimization',
    content:
      'Implement swipe gestures for navigating the carousel on touch devices.', // Curto
    status: 'carousel',
  },
  {
    id: uuidv4(),
    title: 'Update Carousel Images',
    description: 'Content Refresh',
    content:
      'Replace outdated images in the carousel with new, high-quality visuals that align with the current brand theme.', // Médio
    status: 'carousel',
  },
];
