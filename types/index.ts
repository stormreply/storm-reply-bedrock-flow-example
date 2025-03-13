// AWS Bedrock Flow TypeScript Types

// Type for the base structure
export interface BedrockFlow {
  arn: string;
  createdAt: string;
  definition: FlowDefinition;
}

// Type for the Flow Definition
export interface FlowDefinition {
  connections: Connection[];
  nodes: Node[];
}

// Type for Connection
export interface Connection {
  configuration: ConnectionConfiguration;
  name: string;
  source: string;
  target: string;
  type: string;
}

// Type for Connection Configuration
export interface ConnectionConfiguration {
  data: {
    sourceOutput: string;
    targetInput: string;
  };
}

// Type for Node (using a discriminated union with 'type' as the discriminator)
export type Node = InputNode | OutputNode | LambdaFunctionNode;

// Base Node interface with common properties
export interface BaseNode {
  name: string;
  type: string;
}

// Input Node
export interface InputNode extends BaseNode {
  type: "Input";
  configuration: {
    input: Record<string, unknown>;
  };
  outputs: NodeIO[];
}

// Output Node
export interface OutputNode extends BaseNode {
  type: "Output";
  configuration: {
    output: Record<string, unknown>;
  };
  inputs: NodeIO[];
}

// Lambda Function Node
export interface LambdaFunctionNode extends BaseNode {
  type: "LambdaFunction";
  configuration: {
    lambdaFunction: {
      lambdaArn: string;
    };
  };
  inputs: NodeIO[];
  outputs: NodeIO[];
}

// Type for Node Input/Output
export interface NodeIO {
  name: string;
  type: string;
  expression?: string;
}
