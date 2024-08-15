import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <main className="bg-crimson w-full md:h-screen  h-full">
            <div className="bg-auth w-full bg-cover bg-center md:h-screen h-full">
                <div className="bg-gradient-to-t from-crimson/80  to-crimson w-full md:h-screen h-full">
                    <div className="wrapper pt-4 text-xl">
                        <div className="flex justify-between text-white ">
                            <Link href="/" className="flex items-center gap-4">
                                <IoMdArrowRoundBack />
                                <h1>Back</h1>
                            </Link>
                            <Link
                                href="/login"
                                className="text-xl  bg-white px-6 py-2 rounded-xl text-recfonred"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col gap-2 text-white items-center h-[89%] w-full">
                        <div className="bg-white w-[95%] mt-14 md:mt-0 md:w-[27rem] h-fit text-slate-900 rounded-2xl shadow-md p-10">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="text-center font-bold text-2xl">
                                    Register
                                </div>
                                <p className="px-10 text-center">
                                    Register for new account.
                                </p>
                            </div>
                            <form
                                className="flex flex-col mt-10 gap-4"
                                onSubmit={submit}
                            >
                                <input
                                    type="text"
                                    className="rounded-md p-2 border-slate-400 outline-none"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    placeholder="Fullname"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                                <input
                                    type="email"
                                    className="rounded-md p-2 border-slate-400 outline-none "
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
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
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />{" "}
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                                <input
                                    type="password"
                                    className="rounded-md p-2 border-slate-400 outline-none "
                                    placeholder="Password Confirmation"
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />{" "}
                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                                <div className="flex flex-row items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="rounded-lg"
                                        required
                                    />
                                    <p>I agree to terms and conditions</p>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="rounded-lg"
                                        required
                                    />
                                    <p>
                                        I can take responsibility for my
                                        personal data
                                    </p>
                                </div>
                                <button className="bg-recfonred text-white rounded-xl p-2 mt-4">
                                    Register
                                </button>
                                <h1 className="text-center text-crimson">
                                    Already Have Account?{" "}
                                    <Link
                                        href="/login"
                                        className="font-bold  text-lg underline"
                                    >
                                        Login Here
                                    </Link>
                                </h1>
                            </form>
                        </div>
                        <h1 className="mb-4">&copy; Seameo Recfon</h1>
                    </div>
                </div>
            </div>
        </main>
    );
}
