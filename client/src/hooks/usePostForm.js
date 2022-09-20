import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth";
import API from "../services/apiClient";
export const usePostForm = () => {
	const [errors, setErrors] = useState({});
	const [form, setForm] = useState({});
    const [postCreated, setPostCreated] = useState(null)
    const { user } = useAuthContext();
	const handleOnInputChange = (event) => {
		setForm((f) => ({ ...f, [event.target?.name]: event.target?.value }));
	};

    const handleOnSubmit = async () => {
        const { data, error } = await API.createPost(
        `/posts/${user.username}`,
        { data: {title: form.title,
          content: form.content,
          }}
      );
  
        if (data) {
            console.log(data)
            setPostCreated(true)
        }
      };

	return {
		form,
		errors,
		setErrors,
        postCreated,
		handleOnInputChange,
        handleOnSubmit,
	};
};