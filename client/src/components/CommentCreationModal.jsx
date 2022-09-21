import React from 'react'
import { useCommentForm } from '../hooks/useCommentForm'

export default function CommentCreationModal({ post }) {
    const { form, handleOnInputChange, handleOnSubmit, setPostId, postId, commentCreated} = useCommentForm()
    if (!postId){
    setPostId(post)
    }

    // Refreshing Page when Comment is Created.
    if (commentCreated === true){
        window.location.reload(false);
    }
  return (
    <>
    <input type="checkbox" id="createcomment" className="modal-toggle" />
    <label htmlFor="createcomment" className="modal cursor-pointer">
      <label className="modal-box relative" for="">
        <label className="label">
        <label htmlFor="createcomment" className="btn  bg-[#180F70] btn-sm btn-circle absolute right-2 top-2">✕</label>
        <span className="label-text">Enter your Comment</span>
        </label>
        <textarea name="content" type="text" onChange={handleOnInputChange} className="textarea textarea-primary w-full" placeholder="Poem"></textarea>

        <button onClick={handleOnSubmit} className='bg-[#180F70] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#EAE8FF] btn btn-primary'>
        Submit Post
        </button>
      </label>
    </label>
    </>
  )
}
