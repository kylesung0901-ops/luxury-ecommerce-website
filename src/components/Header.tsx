import { Menu, X, Phone, LogOut, User } from 'lucide-react';
import { useState } from 'react';
import { User as FirebaseUser } from 'firebase/auth';

interface HeaderProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
  user: FirebaseUser | null;
  onLogout: () => void;
}

export function Header({ onLoginClick, onSignupClick, user, onLogout }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-600/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold">A</span>
            </div>
            <span className="text-2xl text-white tracking-tight">
              APEX <span className="text-yellow-500">BUILD</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#products" className="text-gray-300 hover:text-yellow-500 transition-colors">제품</a>
            <a href="#custom" className="text-gray-300 hover:text-yellow-500 transition-colors">맞춤 제작</a>
            <a href="#support" className="text-gray-300 hover:text-yellow-500 transition-colors">고객 지원</a>
            <a href="#contact" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-500 transition-colors">
              <Phone className="w-4 h-4" />
              <span>문의하기</span>
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-3 px-4 py-2 text-gray-300">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{user.displayName || user.email}</span>
                </div>
                <button 
                  onClick={onLogout}
                  className="px-5 py-2 text-gray-300 hover:text-yellow-500 transition-colors flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>로그아웃</span>
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={onLoginClick}
                  className="px-5 py-2 text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  로그인
                </button>
                <button 
                  onClick={onSignupClick}
                  className="px-5 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all"
                >
                  회원가입
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-yellow-600/20">
            <nav className="flex flex-col space-y-4">
              <a href="#products" className="text-gray-300 hover:text-yellow-500 transition-colors py-2">제품</a>
              <a href="#custom" className="text-gray-300 hover:text-yellow-500 transition-colors py-2">맞춤 제작</a>
              <a href="#support" className="text-gray-300 hover:text-yellow-500 transition-colors py-2">고객 지원</a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-500 transition-colors py-2">문의하기</a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-yellow-600/20">
                {user ? (
                  <>
                    <div className="px-5 py-3 text-gray-300 flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{user.displayName || user.email}</span>
                    </div>
                    <button 
                      onClick={onLogout}
                      className="px-5 py-3 text-gray-300 border border-yellow-600/30 rounded-lg hover:text-yellow-500 hover:border-yellow-500 transition-all flex items-center justify-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>로그아웃</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={onLoginClick}
                      className="px-5 py-3 text-gray-300 border border-yellow-600/30 rounded-lg hover:text-yellow-500 hover:border-yellow-500 transition-all"
                    >
                      로그인
                    </button>
                    <button 
                      onClick={onSignupClick}
                      className="px-5 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all"
                    >
                      회원가입
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
