import { useSearchParams } from 'react-router-dom';
import { AuthForm } from 'components';
import { useState } from 'react';

const LoginDefinition = {
  title: 'Sign in',
  text: "Don't have an account? ",
  linkText: 'Register here',
};

const RegisterDefinition = {
  title: 'Sign up',
  text: 'Have an account? ',
  linkText: 'Sign in',
};

export const Auth = () => {
  const [searchParams] = useSearchParams();

  const isSignUp = searchParams.get('signup');

  const [isLogin, setIsLogin] = useState(!isSignUp);

  return (
    <section className="text-center">
      <div className="py-5 px-md-5">
        <div className="d-flex justify-content-center">
          {isLogin ? (
            <AuthForm definition={LoginDefinition} isLogin={isLogin} setIsLogin={setIsLogin} />
          ) : (
            <AuthForm definition={RegisterDefinition} isLogin={isLogin} setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </section>
  );
};
