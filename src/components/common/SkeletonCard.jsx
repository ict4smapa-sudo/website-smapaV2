import React from 'react';

/**
 * SkeletonCard - Reusable skeleton loader for card layouts
 * Used for: Achievement cards, News items, Gallery items, etc.
 */
export default function SkeletonCard() {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
            {/* Image placeholder */}
            <div className="w-full h-48 bg-gray-200"></div>

            {/* Content placeholder */}
            <div className="p-6 space-y-3">
                {/* Title line (wider) */}
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>

                {/* Description lines */}
                <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
            </div>
        </div>
    );
}
