import Link from "next/link";
import DeleteButton from "./DeleteMindMap";

export default async function ListMindMap({ userId }) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL_MINDMAP}/${userId}`,
        {
            next: {
                tags: ["mindMapData"],
            },
        }
    );
    const data = await res.json();
    const dataList = data?.mindMapData;
    console.log(dataList);

    return (
        <div className="list-MindMap">
            <div>
                <div className="flex items-center py-2">
                    <span className="w-1/6 text-center">
                        <input type="checkbox" />
                    </span>
                    <span className="w-1/2">
                        <span className="text-md uppercase text-gray-600 font-bold">
                            Tên
                        </span>
                    </span>
                    <span className="w-1/4">
                        <span className="text-md uppercase text-gray-600 font-bold">
                            Tạo lúc
                        </span>
                    </span>
                    <span className="w-1/4">
                        <span className="text-md uppercase text-gray-600 font-bold">
                            Hành động
                        </span>
                    </span>
                </div>
            </div>
            <div>
                {dataList?.map((item) => (
                    <div
                        key={item.idMap}
                        className="flex items-center py-2 hover:bg-gray-200 cursor-pointer bg-white shadow mb-2 rounded-lg"
                    >
                        <input type="checkbox" className="w-1/6" />
                        <span className="w-1/2">
                            {item.title} <br />
                            {item.description}
                        </span>
                        <span className="w-1/4">{item.createdAt}</span>
                        <div className="w-1/4">
                            <Link
                                href={`/my-Mindmap/${item.idMap}`}
                                className="mr-2  px-2 py-1 rounded bg-blue-500 text-white"
                            >
                                Sửa
                            </Link>
                            <DeleteButton id={item.idMap} userId={userId} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
