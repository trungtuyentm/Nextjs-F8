import { useCallback, useState } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";
import clsx from "clsx";
import styled from "styled-components";

const StyleHandle = styled(Handle)`
    width: 30px;
    height: 14px;
    border-radius: 3px;
    background-color: #4f46e5;
`;

function TextUpdaterNode(data) {
    const { setNodes } = useReactFlow();
    const [edit, setEdit] = useState(false);

    const onChange = useCallback(
        (evt) => {
            const newLabel = evt.target.value;
            setNodes((nds) =>
                nds.map((nd) => {
                    if (nd.id === data.id) {
                        return { ...nd, data: { ...nd.data, label: newLabel } };
                    }
                    return nd;
                })
            );
        },
        [setNodes, data.id]
    );

    return (
        <>
            <StyleHandle type="target" position={Position.Top} />
            <div>
                <input
                    id="text"
                    name="text"
                    onChange={onChange}
                    defaultValue={data.data.label}
                    readOnly={!edit}
                    onDoubleClick={() => setEdit(true)}
                    onBlur={() => setEdit(false)}
                    onKeyUp={(e) => e.key === "Enter" && setEdit(false)}
                    className={clsx(
                        " text-center text-white font-semibold border bg-[#8bc34a] rounded-lg p-2 inline-block",
                        edit && " outline-blue-500 "
                    )}
                />
            </div>
            <StyleHandle type="source" position={Position.Bottom} id="a" />
            <StyleHandle type="source" position={Position.Bottom} id="b" />
        </>
    );
}

export default TextUpdaterNode;
