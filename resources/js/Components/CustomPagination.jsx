import React from "react";
import { Link } from "@inertiajs/react";

const CustomPagination = ({ total, current, filter }) => {
    const prevPage = current > 1 ? current - 1 : null;
    const nextPage = current < total ? current + 1 : null;

    const generateLink = (page) => {
        if (filter) {
            return route("registration.index", { filter, page });
        } else {
            return route("registration.index", { page });
        }
    };

    const generatePaginationLinks = (currentPage, lastPage) => {
        const links = [];
        const maxPagesToShow = 5; // Adjust this value as needed
        const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

        if (lastPage <= maxPagesToShow) {
            for (let i = 1; i <= lastPage; i++) {
                links.push(i);
            }
        } else if (currentPage <= halfMaxPagesToShow) {
            for (let i = 1; i <= maxPagesToShow; i++) {
                links.push(i);
            }
            links.push("...");
            links.push(lastPage);
        } else if (currentPage >= lastPage - halfMaxPagesToShow) {
            links.push(1);
            links.push("...");
            for (let i = lastPage - maxPagesToShow + 2; i <= lastPage; i++) {
                links.push(i);
            }
        } else {
            links.push(1);
            links.push("...");
            for (
                let i = currentPage - halfMaxPagesToShow + 1;
                i <= currentPage + halfMaxPagesToShow - 1;
                i++
            ) {
                links.push(i);
            }
            links.push("...");
            links.push(lastPage);
        }

        return links;
    };

    return (
        <div className="flex justify-center gap-4 items-center mt-4">
            {/* Render pagination links */}
            {generatePaginationLinks(current, total).map((link, index) => {
                if (link === "...") {
                    return (
                        <span
                            key={index}
                            className="w-10 h-10 text-2xl rounded-full flex justify-center items-center text-slate-800"
                        >
                            ...
                        </span>
                    );
                } else {
                    const url = generateLink(link);
                    const isActive = current == link;
                    return (
                        <Link
                            key={index}
                            href={url}
                            className={`w-10 h-10 text-2xl rounded-full flex justify-center items-center ${
                                isActive
                                    ? "bg-crimson text-white"
                                    : "text-slate-800"
                            }`}
                        >
                            {link}
                        </Link>
                    );
                }
            })}
        </div>
    );
};

export default CustomPagination;
