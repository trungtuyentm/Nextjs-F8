export const getMindMapById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_MINDMAP}/${id}`);
    const data = await res.json();
    return data;
};
export const postMindMap = async (mindMap, userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_MINDMAP}`);
    const data = await res.json();

    let user = data.find((user) => user.id === userId);

    if (!user) {
        user = {
            id: userId,
            mindMapData: mindMap,
        };

        data.push(user);

        const createRes = await fetch(
            `${process.env.NEXT_PUBLIC_URL_MINDMAP}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        );

        if (!createRes.ok) {
            throw new Error("Failed to create new user");
        }

        return await createRes.json();
    } else {
        user.mindMapData.push(...mindMap);

        const updateRes = await fetch(
            `${process.env.NEXT_PUBLIC_URL_MINDMAP}/${userId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        );

        if (!updateRes.ok) {
            throw new Error("Failed to update mindMapData");
        }

        return await updateRes.json();
    }
};

export const findMindMap = async (idMap) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_MINDMAP}`);
    const data = await res.json();

    let mindMap;
    let ownerId;

    data.forEach((user) => {
        // console.log(user);
        if (Array.isArray(user.mindMapData)) {
            const foundMap = user.mindMapData.find(
                (map) => map.idMap === idMap
            );
            if (foundMap) {
                mindMap = foundMap;
                ownerId = user.id;
            }
        } else {
            console.warn(
                `User ${user.id} does not have a valid mindMapData array.`
            );
        }
    });

    return { mindMap, ownerId };
};

export const getMinMap = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL_MINDMAP);
    const data = await res.json();
    return data;
};
