
import { tabs } from "@/constants";

interface TabsNavProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export function TabsNav({ activeTab, setActiveTab }: TabsNavProps) {
  return (
  <div className="flex flex-wrap justify-center mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-2 sm:px-6 py-3 m-1 rounded-lg font-bold text-sm sm:text-lg transition-colors duration-200  justify-center ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </button>
            ))}
          </div>
  );
}
