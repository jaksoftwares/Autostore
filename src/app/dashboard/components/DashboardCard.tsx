import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color: string;
}

const DashboardCard = ({ title, value, icon, color }: DashboardCardProps) => {
  return (
    <div className={`p-6 rounded-lg shadow-md text-white ${color} flex items-center gap-4`}>
      <div className="text-4xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
