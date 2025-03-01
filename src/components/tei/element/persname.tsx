import { TEINodes } from "react-teirouter";

export function PersName(props: { teiNode: ChildNode }) {
  return (
    <span className="text-red-500">
      <TEINodes teiNodes={props.teiNode.childNodes} {...props} />
    </span>
  );
}
