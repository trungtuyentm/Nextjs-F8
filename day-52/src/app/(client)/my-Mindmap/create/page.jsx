import { getSession } from "@auth0/nextjs-auth0";
import { v4 as uuidv4 } from "uuid";
import ToId from "./ToId";
import { postMindMap } from "@/utils/mindMapFetch";

export default async function CreatePage() {
    try {
        const { user } = await getSession();
        if (!user) {
            throw new Error("User not authenticated");
        }

        const userId = user.sub;
        const idMap = uuidv4();
        const title = "Mindmap Không có tên";
        const description = "Chưa có mô tả";
        const createdAt = new Date().toLocaleString();
        const checkStatus = "public";
        const type = "textUpdater";
        const data = {};
        const newMindMap = {
            idMap,
            title,
            createdAt,
            data,
            description,
            checkStatus,
            type,
        };

        await postMindMap([newMindMap], userId);

        return <ToId id={idMap} />;
    } catch (error) {
        console.error("Error creating mind map:", error);
        return <div>Error creating mind map. Please try again later.</div>;
    }
}
