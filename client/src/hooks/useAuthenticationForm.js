import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthenticationForm = ({ user }) => {
	const [errors, setErrors] = useState({});
	const [form, setForm] = useState({});

	const handleOnInputChange = (event) => {
		setForm((f) => ({ ...f, [event.target?.name]: event.target?.value }));
	};

	return {
		form,
		errors,
		setErrors,
		handleOnInputChange,
	};
};