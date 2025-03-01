import { TEINodes } from "react-teirouter";
import { getStyle } from "@/utils";

export function Seg(props: { teiNode: ChildNode }) {
  const teiNode = props.teiNode;
  const style = getStyle(teiNode);
  return (
    <span style={style}>
      <TEINodes teiNodes={props.teiNode.childNodes} {...props} />
    </span>
  );
}
