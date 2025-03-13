import { type BaseNode } from "~/types";

/**
 * Transforms the Bedrock flow node to Vue flow node
 */
export function transformNodes(nodes: BaseNode[]) {
  return nodes.map((node) => {
    return {
      id: node.name,
      position: { x: 0, y: 0 },
      data: {
        ...node,
      },
      type: node.type,
    };
  });
}
