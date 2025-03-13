import type { Connection } from "~/types";

export function transformConnections(connections: Connection[]) {
  return connections.map((connection) => {
    const { sourceHandle, targetHandle } = resolveHandle(connection);
    return {
      id: connection.name,
      data: {
        ...connection,
      },
      source: connection.source,
      target: connection.target,
      type: connection.type,
      sourceHandle,
      targetHandle,
    };
  });
}

function resolveHandle(connection: Connection) {
  if (connection.type === "Data") {
    return {
      sourceHandle: connection.configuration.data.sourceOutput,
      targetHandle: connection.configuration.data.targetInput,
    };
  }

  if (connection.type === "Conditional") {
    return {
      sourceHandle: connection.configuration.conditional.condition,
    };
  }

  return {};
}
