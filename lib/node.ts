import { type BaseNode } from "~/types";

/**
 * Transforms the Bedrock flow node to Vue flow node
 */
export function transformNodes(nodes: BaseNode[]) {
  return nodes.map((node) => {
    return {
      id: node.name,
      position: { x: 150, y: 50 },
      type: "custom",
      data: {
        ...node,
      },
    };
  });
}
