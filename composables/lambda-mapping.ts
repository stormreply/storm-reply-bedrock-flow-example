// Main mapping object for specific Lambda ARNs
const mapping = {
  "arn:aws:lambda:eu-central-1:356161743682:function:Knowledge:$LATEST": {
    title: "Knowledge",
    nodeColor: "#2ecc71",
  },
  "arn:aws:lambda:eu-central-1:356161743682:function:Claude:$LATEST": {
    title: "Claude",
    nodeColor: "#8b4513",
  },
  "arn:aws:lambda:eu-central-1:356161743682:function:Websearch:$LATEST": {
    title: "Websearch",
    nodeColor: "#f1c40f",
  },
};

// Default styling for Lambda functions without specific mappings
const standard = {
  title: "Lambda",
  nodeColor: "#3498db",
};

export function useLambdaMapping() {
  const attrs = useAttrs();
  const lambdaArn = attrs.data.configuration.lambdaFunction.lambdaArn;

  return mapping[lambdaArn] || standard;
}
