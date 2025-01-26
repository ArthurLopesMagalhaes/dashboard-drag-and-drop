import { DndContext } from '@dnd-kit/core';
import { TaskCardProps } from './task-card';
import { TaskColumn } from './task-column';

import { SAMPLE_COLUMNS } from '../mocks/sampleColumns';

import { useDragAndDropCards } from '../hooks/useDragAndDropCards';
import { Carousel } from './carousel';

export function TaskBoard() {
  const { tasks, sensors, handleDeleteTask, handleAddNewTask, handleDragEnd } =
    useDragAndDropCards();

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex flex-col items-center justify-between gap-4 overflow-hidden rounded-lg p-4">
        <div className="flex h-full flex-grow justify-center rounded-lg bg-zinc-50">
          <div className="grid grid-cols-1 gap-2 md:max-xl:grid-cols-3 xl:grid-cols-4">
            {SAMPLE_COLUMNS.map((column) => (
              <TaskColumn
                key={column.id}
                id={column.id}
                title={column.title}
                tasks={tasks.filter((task) => task.status === column.id)}
                onRemoveTask={(id) => handleDeleteTask(id)}
                onAddTask={() =>
                  handleAddNewTask(column.id as TaskCardProps['status'])
                }
              />
            ))}
          </div>
        </div>
        <Carousel
          id="carousel"
          tasks={tasks.filter((task) => task.status === 'carousel')}
          onRemoveTask={handleDeleteTask}
        />
      </div>
    </DndContext>
  );
}
