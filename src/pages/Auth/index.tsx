import { useSearchParams } from 'react-router-dom';
import { AuthForm, AuthCheck } from 'components';
import { useState } from 'react';
import { LoginDefinition, Paths, RegisterDefinition } from 'assets';

export const Auth = () => {
  const [searchParams] = useSearchParams();

  const isSignUp = searchParams.get('signup');

  const [isLogin, setIsLogin] = useState(!isSignUp);

  return (
    <section className="text-center">
      <div className="py-5 px-md-5">
        <div className="d-flex justify-content-center">
          <AuthCheck logOutRequired redirectTo={Paths.MAIN}>
            {isLogin ? (
              <AuthForm definition={LoginDefinition} isLogin={isLogin} setIsLogin={setIsLogin} />
            ) : (
              <AuthForm definition={RegisterDefinition} isLogin={isLogin} setIsLogin={setIsLogin} />
            )}
          </AuthCheck>
        </div>
      </div>
    </section>
  );
};
