import Link from "next/link";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  backUrl?: string;
  user?: {
    name: string;
    email: string;
  };
  onLogout?: () => void;
}

export default function Header({ 
  title, 
  showBackButton = false, 
  backUrl = "/dashboard",
  user,
  onLogout 
}: HeaderProps) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {showBackButton && (
              <Link href={backUrl} className="text-indigo-600 hover:text-indigo-500 mr-4">
                ← Quay lại
              </Link>
            )}
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          </div>
          
          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Xin chào, {user.name}</span>
              {onLogout && (
                <button 
                  onClick={onLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600"
                >
                  Đăng xuất
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
