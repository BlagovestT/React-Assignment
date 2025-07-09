import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthLogic = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    localStorage.setItem("userName", name.trim());

    navigate("/");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (error) setError("");
  };

  return {
    name,
    error,
    handleSubmit,
    handleNameChange,
  };
};
