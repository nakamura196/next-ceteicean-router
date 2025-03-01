import { TEINodes } from "react-teirouter";

export function Div(props: { teiNode: { childNodes: NodeListOf<ChildNode> } }) {
  return (
    <div className="m-4 p-4 border border-gray-300 rounded shadow bg-white">
      <TEINodes teiNodes={props.teiNode.childNodes} {...props} />
    </div>
  );
}
