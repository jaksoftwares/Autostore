const AuthCard = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
        {children}
      </div>
    );
  };
  
  export default AuthCard;
  