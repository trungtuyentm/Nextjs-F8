export const metadata = {
    title: "Mind Map của tôi | Mind-map Flow ",
    description: "Học tập hiệu quả với bản đồ tư duy",
};
import Link from "next/link";
import ListMindMap from "./ListMindMap";
import { getSession } from "@auth0/nextjs-auth0";

export default async function MindMapPage() {
    const session = await getSession();
    return (
        <section>
            <div className="mx-auto px-4">
                <h2 className="text-[38px] font-medium mb-5 text-black [word-spacing:3px]">
                    Mindmap của tôi
                </h2>
                <Link
                    className="btn py-2 px-4 bg-blue-500 text-white rounded-lg "
                    href="/my-Mindmap/create"
                >
                    Thêm mới
                </Link>
                <div>
                    <h4 className="text-xl font-semibold mb-5 [word-spacing:3px] mt-5">
                        Danh sách
                    </h4>
                    <ListMindMap userId={session.user.sub} />
                </div>
            </div>
        </section>
    );
}
