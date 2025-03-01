declare module "react-teirouter" {
  import { ComponentType } from "react";

  export interface TEIRenderProps {
    data: Document | Element;
    children?: React.ReactNode;
  }

  export const TEIRender: ComponentType<TEIRenderProps>;

  export interface TEIRouteProps {
    el: string;
    component: ComponentType<{ teiNode: ChildNode }>;
  }

  export const TEIRoute: ComponentType<TEIRouteProps>;

  export const TEINodes: ComponentType<{
    teiNodes: NodeListOf<ChildNode>;
    teiNode: {
      childNodes: NodeListOf<ChildNode>;
    };
  }>;

  // 他のエクスポートがある場合はここに追加
}
