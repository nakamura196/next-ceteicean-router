import { TEINodes } from "react-teirouter";
import { getStyle } from "@/utils";

export function P(props: { teiNode: ChildNode }) {
  const teiNode = props.teiNode;
  const style = getStyle(teiNode);
  return (
    <p style={style} className="m-1">
      <TEINodes teiNodes={props.teiNode.childNodes} {...props} />
    </p>
  );
}
