import { Bell } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export default function NotificationsSection() {
  const { notifications, theme } =
    useAppContext();

  return (
    <div
      className={`rounded-3xl p-6 shadow-2xl ${
        theme === "dark"
          ? "bg-zinc-900"
          : "bg-white"
      }`}
    >
      <div className="flex gap-3 items-center mb-5">
        <Bell className="text-yellow-500" />

        <h2 className="text-2xl font-bold">
          Notifications
        </h2>
      </div>

      <div className="space-y-4">
        {notifications.map((note, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl bg-gray-200 text-black"
          >
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}