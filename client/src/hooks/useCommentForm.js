import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth";
import API from "../services/apiClient";

export const useCommentForm = () => {
	const [errors, setErrors] = useState({});
	const [form, setForm] = useState({});
    const [postId, setPostId] = useState(null)
    const [commentCreated, setCommentCreated] = useState(null)
    const { user } = useAuthContext();
	const handleOnInputChange = (event) => {
		setForm((f) => ({ ...f, [event.target?.name]: event.target?.value }));
	};
    const handleOnSubmit = async () => {
        const { data, error } = await API.createComment(
        `/comments/${user.username}/${postId}`,
        { 
          content: form.content,
        }
      );
  
        if (data) {
            console.log(data)
            setCommentCreated(true)
        }
      };

	return {
		form,
		errors,
		setErrors,
        postId,
        setPostId,
        commentCreated,
		handleOnInputChange,
        handleOnSubmit,
	};
};