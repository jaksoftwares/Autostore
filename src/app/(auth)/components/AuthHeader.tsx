interface AuthHeaderProps {
    title: string;
    subtitle?: string;
  }
  
  const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle }) => {
    return (
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        {subtitle && <p className="text-gray-600 text-sm mt-1">{subtitle}</p>}
      </div>
    );
  };
  
  export default AuthHeader;
  