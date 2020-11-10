import React from "react";

function Card({ image }) {
    const tags = image.tags.split(",");

    return (
        <div className="max-w-sm rounded  overflow-hidden shadow-xl">
            <img src={image.webformatURL} alt="" className="w-full" />
            <div className="px-6-py-4">
                <div className="font-bold text-purple-900 text-xl-mb-2">
                    Photo by: {image.user.toUpperCase()}
                </div>
                <ul className='font-mono'>
                    <li>
                        <strong >Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Download: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Card;