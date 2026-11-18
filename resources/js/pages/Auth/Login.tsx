
import { useState, type FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaArrowLeft, } from 'react-icons/fa6';

const bground = 'assets/mt.png';

export default function Login() {
    const [showLogin, setShowLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        post('/login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title={showLogin ? 'Sign In' : 'Welcome'} />
            <main className="relative min-h-screen overflow-hidden bg-[#0b0b0b]">
                <div className="absolute inset-0">
                    <img src={bground} alt="Background" className="h-full w-full object-cover object-[80%_50%] md:object-center" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/30 via-[#0b0b0b]/40 to-[#0b0b0b]/95" />
                </div>
                {!showLogin && (
                    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[520px] flex-col px-7 pb-10 pt-12 md:px-10">
                        <div className="flex flex-1 flex-col justify-center">
                            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
                                Welcome to
                                <span className="block text-orange-500">
                                    HR'S
                                </span>
                            </h1>
                        </div>

                        <div className="space-y-3">
                            <button type="button" onClick={() => setShowLogin(true)} className="flex w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-600">
                                Sign In
                                <FaArrowRight size={13} />
                            </button>
                        </div>
                    </div>
                )}

                {showLogin && (
                    <div className="relative z-10 min-h-screen">
                        <div className="mx-auto min-h-[42vh] w-full max-w-[520px] px-7 pt-10">
                            <button type="button" onClick={() => setShowLogin(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition hover:border-orange-500 hover:bg-orange-500" aria-label="Back to welcome">
                                <FaArrowLeft size={14} />
                            </button>
                        </div>
                        <section className="absolute bottom-0 left-1/2 w-full max-w-[520px] -translate-x-1/2 rounded-t-[35px] md:rounded-[35px] bg-white px-7 pb-8 pt-8 shadow-2xl md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:px-10 md:pt-10">
                            <div className="mb-7 text-center">
                                <h2 className="text-2xl font-extrabold text-[#10243a]">
                                    Welcome Back
                                </h2>
                                <p className="mt-2 text-sm text-gray-500">
                                    Sign in to your account to continue
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-xs font-semibold text-[#10243a]">
                                        Email
                                    </label>
                                    <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 transition focus-within:border-orange-500">
                                        <FaEnvelope size={14} className="text-gray-400" />
                                        <input
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            onChange={(event) =>
                                                setData('email', event.target.value)
                                            }
                                            placeholder="Enter your email"
                                            autoComplete="username"
                                            required
                                            className="w-full border-0 bg-transparent px-3 py-3.5 text-sm text-gray-800 outline-none ring-0 placeholder:text-gray-400 focus:border-0 focus:ring-0"
                                        />
                                    </div>

                                    {errors.email && (
                                        <p className="mt-2 text-xs text-red-500">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="password" className="mb-2 block text-xs font-semibold text-[#10243a]" >
                                        Password
                                    </label>
                                    <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 transition focus-within:border-orange-500">
                                        <FaLock size={14}
                                            className="text-gray-400"
                                        />

                                        <input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={data.password}
                                            onChange={(event) =>
                                                setData('password', event.target.value)
                                            }
                                            placeholder="Enter your password"
                                            autoComplete="current-password"
                                            required
                                            className="w-full border-0 bg-transparent px-3 py-3.5 text-sm text-gray-800 outline-none ring-0 placeholder:text-gray-400 focus:border-0 focus:ring-0"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            aria-label="Toggle password visibility"
                                            className="text-gray-400 transition hover:text-orange-500"
                                        >
                                            {showPassword ? (
                                                <FaEyeSlash size={15} />
                                            ) : (
                                                <FaEye size={15} />
                                            )}
                                        </button>
                                    </div>

                                    {errors.password && (
                                        <p className="mt-2 text-xs text-red-500">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                <div className="flex items-center justify-between gap-3">
                                    <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-500">
                                        <input
                                            type="checkbox"
                                            checked={data.remember}
                                            onChange={(event) =>
                                                setData('remember', event.target.checked)
                                            }
                                            className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                                        />
                                        Remember me
                                    </label>

                                    <Link
                                        href="/forgot-password"
                                        className="text-xs font-semibold text-orange-600 transition hover:text-orange-700"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {processing ? 'Signing in...' : 'Sign In'}
                                    {!processing && (
                                        <FaArrowRight size={12} />
                                    )}
                                </button>
                            </form>
                        </section>
                    </div>
                )}
            </main>
        </>
    );
}
