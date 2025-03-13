import type { Connection } from "~/types";

export function transformConnections(connections: Connection[]) {
  return connections.map((connection) => {
    return {
      id: connection.name,
      data: {
        ...connection,
      },
      source: connection.source,
      target: connection.target,
    };
  });
}
