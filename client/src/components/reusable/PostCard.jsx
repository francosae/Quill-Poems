import React, {useState} from "react";
import { useEffect } from "react";

function PostCard({ post }) {
    return (
      <div key={post.id} className="w-[250px] mb-3 rounded-lg border border-gray-200 hover:bg-gray-100 shadow-md bg-white p-3.5">
        <div className="font-bold mb-1">{post.title}</div>
        <p className="font-light text-left leading-relaxed">
          {post.content}
        </p>
        <div class="flex items-center space-x-1 mt-4">
          <div class="flex-shrink-0">
            <img
              class="w-7 h-7 rounded-full"
              src="https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256"
              alt="Neil image"
            />
          </div>
          <div class="flex-1">
            <p class="text-sm font-semibold">{post.authorUsername}</p>
          </div>
  
          <div>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }