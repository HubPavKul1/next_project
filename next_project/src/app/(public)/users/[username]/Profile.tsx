"use client";

import { useParams } from "next/navigation";

export function Profile() {
  const params = useParams<{username:string}>();
  return <div><h1 className="text-3xl font-bold mb-6">Profile @{params.username}</h1></div>;
}
