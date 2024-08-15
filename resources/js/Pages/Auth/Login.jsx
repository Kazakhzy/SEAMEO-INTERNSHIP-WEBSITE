import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <main className="bg-crimson w-full h-screen ">
            <div className="bg-auth w-full bg-cover bg-center h-screen">
                <div className="bg-gradient-to-t from-crimson/80  to-crimson w-full h-screen">
                    <div className="wrapper pt-4 text-xl">
                        <div className="flex justify-between text-white ">
                            <Link href="/" className="flex items-center gap-4">
                                <IoMdArrowRoundBack />
                                <h1>Back</h1>
                            </Link>
                            <Link
                                href="/register"
                                className="text-xl  bg-white px-6 py-2 rounded-xl text-recfonred"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col gap-2 text-white items-center h-[89%] w-full">
                        <div className="bg-white w-[95%] md:w-96 h-fit text-slate-900 rounded-2xl shadow-md p-10">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="text-center font-bold text-2xl">
                                    Login
                                </div>
                                <p className="px-10 text-center">
                                    Login to your account.
                                </p>
                            </div>
                            <form
                                className="flex flex-col mt-10 gap-4"
                                onSubmit={submit}
                            >
                                <input
                                    className="rounded-md p-2 border-slate-400 outline-none "
                                    placeholder="Email"
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                                <input
                                    type="password"
                                    className="rounded-md p-2 border-slate-400 outline-none "
                                    placeholder="Password"
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                                <button className="bg-recfonred text-white rounded-xl p-2 mt-4">
                                    Login
                                </button>
                                <h1 className="text-center text-crimson">
                                    Dont Have Account?{" "}
                                    <Link
                                        href="/register"
                                        className="font-bold  text-lg underline"
                                    >
                                        Register Here
                                    </Link>
                                </h1>
                            </form>
                        </div>
                        <h1>&copy; Seameo Recfon</h1>
                    </div>
                </div>
            </div>
        </main>
    );
}
