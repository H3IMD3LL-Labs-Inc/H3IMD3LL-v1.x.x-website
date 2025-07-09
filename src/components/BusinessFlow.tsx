import { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  Background,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    position: { x: 0, y: 100 },
    data: { label: 'Data Collection' },
    type: 'input',
    style: {
      background: 'hsl(var(--background))',
      border: '1px solid hsl(var(--border))',
      color: 'hsl(var(--foreground))',
      fontSize: '12px',
      fontFamily: 'JetBrains Mono, monospace',
      padding: '8px 12px',
      borderRadius: '4px',
    },
  },
  {
    id: '2',
    position: { x: 200, y: 50 },
    data: { label: 'Processing' },
    style: {
      background: 'hsl(var(--background))',
      border: '1px solid hsl(var(--border))',
      color: 'hsl(var(--foreground))',
      fontSize: '12px',
      fontFamily: 'JetBrains Mono, monospace',
      padding: '8px 12px',
      borderRadius: '4px',
    },
  },
  {
    id: '3',
    position: { x: 200, y: 150 },
    data: { label: 'Analysis' },
    style: {
      background: 'hsl(var(--background))',
      border: '1px solid hsl(var(--border))',
      color: 'hsl(var(--foreground))',
      fontSize: '12px',
      fontFamily: 'JetBrains Mono, monospace',
      padding: '8px 12px',
      borderRadius: '4px',
    },
  },
  {
    id: '4',
    position: { x: 400, y: 100 },
    data: { label: 'Insights' },
    type: 'output',
    style: {
      background: 'hsl(var(--primary))',
      border: '1px solid hsl(var(--primary))',
      color: 'hsl(var(--primary-foreground))',
      fontSize: '12px',
      fontFamily: 'JetBrains Mono, monospace',
      padding: '8px 12px',
      borderRadius: '4px',
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--border))',
    },
    style: { stroke: 'hsl(var(--border))' },
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--border))',
    },
    style: { stroke: 'hsl(var(--border))' },
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--primary))',
    },
    style: { stroke: 'hsl(var(--primary))' },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--primary))',
    },
    style: { stroke: 'hsl(var(--primary))' },
  },
];

export const BusinessFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ height: '200px', width: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnDrag={false}
        panOnScroll={false}
        style={{ background: 'transparent' }}
        proOptions={{ hideAttribution: true }}
      >
        <Background 
          gap={20} 
          size={1} 
          color="hsl(var(--border))" 
          style={{ opacity: 0.3 }}
        />
      </ReactFlow>
    </div>
  );
};