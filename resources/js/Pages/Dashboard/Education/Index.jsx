// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head, useForm } from "@inertiajs/react";

// import { useState } from "react";

// const Index = ({ auth, education }) => {
//     // Form Insert
//     const { data, setData, post, progress, errors, reset } = useForm({
//         education: education ? education.education : "",
//     });
//     const [Confirmation, setConfirmation] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         post(route("education-dropdown.store"), {
//             forceFormData: true,
//             onSuccess: () => window.location.reload(),
//         });
//     };

//     const educationOptions = education ? education.education.split(", ") : [];

//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={
//                 <h2 className="font-semibold text-xl text-gray-800 leading-tight">
//                     Dashboard
//                 </h2>
//             }
//         >
//             <Head title="Dashboard" />
//             <h1 className="text-4xl text-crimson font-semibold">
//                 Education Level Dropdown
//             </h1>
//             <div className="mt-6">
//                 <div className="bg-white mb-10 w-full h-[35rem] overflow-y-auto border-2 py-4 px-6 shadow-md rounded-xl">
//                     <div className="flex gap-2 items-center text-crimson font-semibold">
//                         <hr className="border-2 border-crimson w-4" />
//                         <h1>Add On This.</h1>
//                     </div>

//                     <form
//                         className="mt-4 flex flex-col justify-between h-[90%]"
//                         onSubmit={handleSubmit}
//                         enctype="multipart/form-data"
//                         method="post"
//                     >
//                         <div className="flex flex-col gap-4">
//                             <div>
//                                 <div className="flex flex-col gap-2">
//                                     <label
//                                         className="font-semibold"
//                                         htmlFor="education"
//                                     >
//                                         Dropdown Option
//                                     </label>
//                                     <input
//                                         type="text"
//                                         required
//                                         className="form-control"
//                                         name="education"
//                                         id="education"
//                                         placeholder="Education Level"
//                                         value={data.education}
//                                         onChange={(e) =>
//                                             setData("education", e.target.value)
//                                         }
//                                     />
//                                     <p className="text-sm">
//                                         * Please separate option by
//                                         comma.(Example: Diploma, Bachelor, ...)
//                                     </p>
//                                     {errors.education && (
//                                         <div className="text-red-500">
//                                             {errors.education}
//                                         </div>
//                                     )}{" "}
//                                 </div>
//                             </div>
//                             {education !== null ? (
//                                 <div className="flex flex-col gap-2">
//                                     <label
//                                         className="font-semibold"
//                                         htmlFor="education"
//                                     >
//                                         Dropdown Example On User Profile
//                                     </label>
//                                     <select
//                                         name="education"
//                                         className="form-control"
//                                         id="education"
//                                     >
//                                         {educationOptions.map(
//                                             (option, index) => (
//                                                 <option
//                                                     key={index}
//                                                     value={option}
//                                                 >
//                                                     {option}
//                                                 </option>
//                                             )
//                                         )}
//                                     </select>
//                                 </div>
//                             ) : null}
//                         </div>
//                         <button
//                             onClick={(e) => {
//                                 if (!window.confirm("Are You Sure?")) {
//                                     e.preventDefault();
//                                 }
//                             }}
//                             className="bg-crimson text-center w-full h-fit mt-4 py-4 rounded-full hover:scale-95 duration-150 text-white font-bold"
//                         >
//                             Submit
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// };

// export default Index;
