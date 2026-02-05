import React from 'react';

/**
 * SkeletonList - Reusable skeleton loader for list layouts
 * Used for: Staff lists, Personnel pages, Directory listings, etc.
 */
export default function SkeletonList({ count = 5 }) {
    return (
        <div className="space-y-4">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm animate-pulse"
                >
                    {/* Avatar placeholder */}
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>

                    {/* Text content placeholder */}
                    <div className="flex-1 space-y-2">
                        {/* Name line */}
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        {/* Position/role line */}
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
