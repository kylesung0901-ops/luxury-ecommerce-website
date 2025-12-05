import { X, Mail, Lock, User, Phone } from 'lucide-react';
import { useEffect, useState, FormEvent } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { auth } from '../config/firebase';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
  onSignupSuccess?: () => void;
}

export function SignupModal({ isOpen, onClose, onLoginClick, onSignupSuccess }: SignupModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (password.length < 6) {
      setError('비밀번호는 최소 6자 이상이어야 합니다.');
      return;
    }

    if (!termsAgreed) {
      setError('이용약관에 동의해주세요.');
      return;
    }

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      if (name && userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: name
        });
      }

      onSignupSuccess?.();
      onClose();
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');
      setTermsAgreed(false);
      setMarketingAgreed(false);
    } catch (err: any) {
      const errorMessage = err.code === 'auth/email-already-in-use'
        ? '이미 사용 중인 이메일입니다.'
        : err.code === 'auth/invalid-email'
        ? '올바른 이메일 형식이 아닙니다.'
        : err.code === 'auth/weak-password'
        ? '비밀번호가 너무 약합니다.'
        : '회원가입에 실패했습니다. 다시 시도해주세요.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError('');
    setIsLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onSignupSuccess?.();
      onClose();
    } catch (err: any) {
      const errorMessage = 'Google 회원가입에 실패했습니다. 다시 시도해주세요.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-md bg-zinc-900 rounded-2xl border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-zinc-800 transition-colors text-gray-400 hover:text-white z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl flex items-center justify-center mb-4">
              <span className="text-black text-2xl">A</span>
            </div>
          </div>
          
          <h2 className="text-3xl text-white text-center mb-2">회원가입</h2>
          <p className="text-gray-400 text-center mb-8">
            APEX BUILD에서 완벽한 PC를 만나보세요
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2 text-sm">이름</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="홍길동"
                  className="w-full pl-12 pr-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm">이메일</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm">연락처</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-0000-0000"
                  className="w-full pl-12 pr-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm">비밀번호</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full pl-12 pr-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm">비밀번호 확인</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full pl-12 pr-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <label className="flex items-start text-sm">
                <input 
                  type="checkbox" 
                  checked={termsAgreed}
                  onChange={(e) => setTermsAgreed(e.target.checked)}
                  className="mt-1 mr-3 rounded" 
                />
                <span className="text-gray-400">
                  <span className="text-yellow-500">(필수)</span> 이용약관 및 개인정보 처리방침에 동의합니다
                </span>
              </label>
              <label className="flex items-start text-sm">
                <input 
                  type="checkbox" 
                  checked={marketingAgreed}
                  onChange={(e) => setMarketingAgreed(e.target.checked)}
                  className="mt-1 mr-3 rounded" 
                />
                <span className="text-gray-400">
                  <span className="text-gray-500">(선택)</span> 마케팅 정보 수신에 동의합니다
                </span>
              </label>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? '가입 중...' : '가입하기'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-zinc-700"></div>
            <span className="px-4 text-gray-500 text-sm">또는</span>
            <div className="flex-1 border-t border-zinc-700"></div>
          </div>

          {/* Social Signup */}
          <div className="space-y-3">
            <button 
              type="button"
              onClick={handleGoogleSignup}
              disabled={isLoading}
              className="w-full py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Google로 가입하기</span>
            </button>
            <button 
              type="button"
              disabled
              className="w-full py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
            >
              <span>카카오로 가입하기</span>
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-400 mt-6 text-sm">
            이미 계정이 있으신가요?{' '}
            <button 
              onClick={onLoginClick}
              className="text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              로그인
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
