
import React from 'react'
import { usePostForm } from '../hooks/usePostForm'

function PostCreationModal() {
  const { form, handleOnInputChange, handleOnSubmit } = usePostForm()
  console.log(form)
  return (
    <>
    <input type="checkbox" id="createpost" className="modal-toggle" />
    <label htmlFor="createpost" className="modal cursor-pointer">
      <label className="modal-box relative" for="">
        <label className="label">
        <label htmlFor="createpost" className="btn  bg-[#180F70] btn-sm btn-circle absolute right-2 top-2">✕</label>
        <span className="label-text">Enter a title for your new poem!</span>
        </label>
        <input type="text" name="title" onChange={handleOnInputChange} placeholder="Poem Title" className="input input-bordered w-full max-w-xs" />

        <label className="label">
        <span className="label-text">Quill your Poem!</span>
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



export default PostCreationModal