import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

export const useAuth = () => {
    const nav = useNavigate()
  const url = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const { data, error, isLoading, mutate } = useSWR(`${url}/sautenticate`, () =>
    axios(`${url}/sautenticate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

  useEffect(() => {
    if (error?.response?.data?.message ) {
      nav('/')
    }
  }, [data, error]);

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};
