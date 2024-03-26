"use server";
import { revalidateTag } from "next/cache";

export const handleCreateGameAction = async (data: any) => {
  const res = await fetch(
    // `${process.env.NEXT_PUBLIC_URL_BACKEND}/games`,
    `http://143.110.146.15/games`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  revalidateTag("data");
  return await res.json();
};

export const handleUpdateGameAction = async (data: any, id: any) => {
  const res = await fetch(
    // `${process.env.NEXT_PUBLIC_URL_BACKEND}/games/${data.id}`,
    `http://143.110.146.15/games/${id}`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  revalidateTag("data");
  return await res.json();
};

export const handleDeleteGameAction = async (id: any) => {
  const res = await fetch(
    // `${process.env.NEXT_PUBLIC_URL_BACKEND}/games/${data.id}`,
    `http://143.110.146.15/games/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  revalidateTag("data");
  return await res.json();
};
