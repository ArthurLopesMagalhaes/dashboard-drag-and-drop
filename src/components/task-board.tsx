import { TaskCardProps } from "./task-card";
import { TaskColumn } from "./task-column";
import { useState } from "react";

type TasksBoard = TaskCardProps[];

const SAMPLE_TASKS: TasksBoard = [
  {
    id: "1",
    title: "Design Website Homepage",
    description: "E-commerce Redesign",
    content: "Create wireframes and define the layout.", // Curto
    status: "todo",
  },
  {
    id: "2",
    title: "Review Vendor Contract",
    description: "Vendor Management System",
    content:
      "Analyze the vendor contract for compliance, terms, and conditions. Ensure all clauses are clear and aligned with company policies.", // Médio
    status: "inProgress",
  },
  {
    id: "3",
    title: "Review Vendor Contract",
    description: "Vendor Management System",
    content:
      "Analyze the vendor contract for compliance, terms, and conditions. Ensure all clauses are clear and aligned with company policies.", // Médio
    status: "review",
  },
  {
    id: "4",
    title: "Update Customer Database",
    description: "Infrastructure Upgrade",
    content:
      "Migrate customer data to the new database schema and ensure data integrity. Perform data cleanup and remove duplicate entries for improved performance and accuracy.", // Longo
    status: "todo",
  },
  {
    id: "5",
    title: "Prepare Project Proposal",
    description: "Expansion Plan 2024",
    content:
      "Draft an initial proposal outlining objectives, budget, and milestones.", // Médio
    status: "review",
  },
  {
    id: "6",
    title: "Prepare Project Proposal",
    description: "Expansion Plan 2024",
    content:
      "Draft an initial proposal outlining objectives, budget, and milestones.", // Médio
    status: "todo",
  },
  {
    id: "7",
    title: "Migrate Data to New Server",
    description: "Infrastructure Upgrade",
    content:
      "Validate the migration process and verify all services are running as expected. Ensure no data is lost during the transfer.", // Médio
    status: "inProgress",
  },
  {
    id: "8",
    title: "Update User Guide",
    description: "User Support Docs",
    content: "Edit and enhance the documentation for new features.", // Curto
    status: "todo",
  },
  {
    id: "9",
    title: "Update User Guide",
    description: "User Support Docs",
    content:
      "Review feedback and refine the guide for clarity and completeness. Add screenshots and examples where necessary to improve usability for end-users.", // Longo
    status: "todo",
  },
];

export function TaskBoard() {
  const [tasks, setTasks] = useState(SAMPLE_TASKS);

  return (
    <div className="flex gap-4 p-4 h-full  bg-zinc-50 rounded-lg flex-grow ">
      <TaskColumn
        id="1"
        title="To-do"
        count={31}
        tasks={tasks.filter((task) => task.status === "todo")}
      />
      <TaskColumn
        id="2"
        title="In-Progress"
        count={5}
        tasks={tasks.filter((task) => task.status === "inProgress")}
      />
      <TaskColumn
        id="3"
        title="Review Internal"
        count={2}
        tasks={tasks.filter((task) => task.status === "review")}
      />
    </div>
  );
}
