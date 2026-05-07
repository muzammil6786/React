import { useState } from "react";
import {
  Plus,
  Trash2,
  CheckCircle2,
} from "lucide-react";

import { useAppContext } from "../context/AppContext";

export default function TodoSection() {
  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    theme,
  } = useAppContext();

  const [input, setInput] = useState("");

  return (
    <div
      className={`rounded-3xl p-6 shadow-2xl ${
        theme === "dark"
          ? "bg-zinc-900"
          : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-bold mb-5">
        Task Manager
      </h2>

      <div className="flex gap-3 mb-5">
        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Add task"
          className="flex-1 px-4 py-3 rounded-2xl bg-gray-200 text-black"
        />

        <button
          onClick={() => {
            addTask(input);
            setInput("");
          }}
          className="px-5 rounded-2xl bg-indigo-500 text-white"
        >
          <Plus />
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center p-4 rounded-2xl bg-gray-200 text-black"
          >
            <div className="flex gap-3 items-center">
              <button
                onClick={() =>
                  toggleTask(task.id)
                }
              >
                <CheckCircle2
                  className={
                    task.done
                      ? "text-green-500"
                      : "opacity-40"
                  }
                />
              </button>

              <span
                className={
                  task.done
                    ? "line-through"
                    : ""
                }
              >
                {task.text}
              </span>
            </div>

            <button
              onClick={() =>
                deleteTask(task.id)
              }
              className="p-2 rounded-xl bg-red-500 text-white"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}