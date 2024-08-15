import React from "react";
import { Link } from "@inertiajs/react";

const Pagination = ({ currentPage, lastPage, links }) => {
    const generatePaginationLinks = (currentPage, lastPage) => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];
        let l;

        for (
            let i = Math.max(2, currentPage - delta);
            i <= Math.min(lastPage - 1, currentPage + delta);
            i++
        ) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1);
            if (currentPage - delta > 3) {
                rangeWithDots.push("...");
            }
        } else {
            for (let i = 1; i < Math.max(2, currentPage - delta); i++) {
                rangeWithDots.push(i);
            }
        }

        rangeWithDots.push(...range);

        if (currentPage + delta < lastPage - 1) {
            if (currentPage + delta < lastPage - 2) {
                rangeWithDots.push("...");
            }
            rangeWithDots.push(lastPage);
        } else {
            for (
                let i = Math.min(lastPage - 1, currentPage + delta) + 1;
                i <= lastPage;
                i++
            ) {
                rangeWithDots.push(i);
            }
        }

        return lastPage === 1 ? [1] : rangeWithDots; // Ensure single page displays correctly
    };

    return (
        <div className="flex justify-center gap-4 items-center mt-4">
            {generatePaginationLinks(currentPage, lastPage).map(
                (link, index) => {
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
                        const url = links.find((l) => l.label == link).url;
                        const isActive = currentPage == link;
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
                }
            )}
        </div>
    );
};

export default Pagination;
