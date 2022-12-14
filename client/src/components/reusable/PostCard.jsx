import React, {useState} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function PostCard({ post }) {
    return (
      <div key={post.id} className="card card-compact min-w-[250px] min-h-[250px] mb-3 rounded-lg border border-gray-200 hover:bg-gray-100 shadow-md bg-white p-3.5">
      <div className="card-title font-bold">{post.title}</div>
      <div class="card-body">
      <Link to={`/posts/${post.authorUsername}/${post.id}`}>
        
        <p className="font-light text-left leading-relaxed break-words">
          {post.content}
        </p>
      </Link>
      </div>
              
      <div class="flex items-center justify-between">          
          <div className="card-actions">
          <div class="flex-shrink-0">
            <img
              class="w-7 h-7 rounded-full"
              src="https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256"
              alt="Neil image"
            />
          </div>
          <Link to={`/user/${post.authorUsername}/`}>
          <div class="flex-1">
            <p class="text-sm font-semibold">{post.authorUsername}</p>
          </div>
          </Link>
          </div>

          <div class='flex justify-between'>
          <AiFillHeart/>
          <AiOutlineHeart />
          </div>
        </div>
      </div>

    );
  }