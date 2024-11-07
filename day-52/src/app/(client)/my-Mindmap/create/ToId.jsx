"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ToId({ id }) {
    const router = useRouter();
    useEffect(() => {
        if (id) {
            router.replace("/my-Mindmap/" + id);
        } else {
            router.replace("/my-Mindmap");
        }
        router.refresh();
    });

    return;
}
