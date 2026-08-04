"use server";

const SERVER_URL = process.env.SERVER_URL;

export const apiClient = async (endpoint, options = {}) => {
  const res = await fetch(`${SERVER_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Request failed with status ${res.status}`);
  }

  return res.json();
};