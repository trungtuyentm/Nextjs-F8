import { getSession } from "@auth0/nextjs-auth0";
import { findMindMap } from "@/utils/mindMapFetch";
import { notFound } from "next/navigation";
import MindMap from "./MindMap";

export const generateMetadata = async ({ params: { id } }) => {
    const post = await getId(id);
    return { title: post?.title, description: post?.description };
};

const getId = async (idMap) => {
    const { mindMap } = await findMindMap(idMap);
    return mindMap;
};

export default async function MindMapPage({ params }) {
    const { id: idMap } = params;
    const session = await getSession();

    const user = session?.user || null;
    // console.log(`Giá trị idMap: ${idMap}`);
    getId(idMap);

    const { mindMap, ownerId } = await findMindMap(idMap);
    console.log(mindMap);

    if (!mindMap) {
        console.error("Mind map not found for the given ID:", idMap);
        return notFound();
    }

    let mapData = mindMap.data;
    let dataJson = mindMap;
    let checkMode = "Edit";

    if (ownerId !== user?.sub) {
        checkMode = "NoneEdit";
    }

    return (
        <>
            <MindMap
                mapData={mapData}
                id={idMap}
                dataJson={dataJson}
                userId={user?.sub}
                checkMode={checkMode}
            />
        </>
    );
}
