"use server";
import { revalidateTag } from "next/cache";

export const handleCreateGameAction = async (data: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/games`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  //   revalidateTag("list-users");
  console.log(res.json());
  return await res.json();
};

export const handleUpdateGameAction = async (data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/games/${data.id}`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  //   revalidateTag("list-users");
  return await res.json();
};

export const handleDeleteGameAction = async (data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/games/${data.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  //   revalidateTag("list-users");
  return await res.json();
};
