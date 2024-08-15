import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                recfonred: "#E4232A",
                crimson: "#CB3541",
                teal: "#385A64",
                coral: "#FF735C",
                cerulean: "#3581D2",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                monserrat: ["Montserrat", "sans-serif"],
                monoton: ["Monoton"],
            },

            backgroundImage: {
                video: "url('../../../../home/Video.png')",
                about: "url('../../../../about/main.png')",
                application: "url('../../../../application/hero.png')",
                auth: "url('../../../../auth/auth.svg')",
            },
        },
    },

    plugins: [forms],
};
