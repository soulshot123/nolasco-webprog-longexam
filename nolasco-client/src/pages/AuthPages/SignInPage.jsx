import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-dark-gold-300/50 bg-dark-gold-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-dark-gold-700 focus:bg-dark-gold-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Sign In</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Welcome back. Log in to your account to continue shopping.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputClasses}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-zinc-600">
            <input type="checkbox" className="h-4 w-4 rounded border-dark-gold-300 accent-dark-gold-600" />
            <span>Remember me</span>
          </label>

          <Link href="#" className="text-sm font-semibold text-zinc-900 transition hover:text-zinc-600">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Sign In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign In with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-dark-gold-300 pt-6 text-sm text-zinc-600">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
