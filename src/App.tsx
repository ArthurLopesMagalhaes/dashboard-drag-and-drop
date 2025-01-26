import { Toaster } from 'react-hot-toast';
import { TaskBoard } from './components/task-board';

function App() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between overflow-hidden bg-background p-4">
      <TaskBoard />
      <Toaster />
    </div>
  );
}

export default App;
