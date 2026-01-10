"use client";

import { useState } from "react";

interface Stage {
  id: number;
  name: string;
  color: string;
  lightColor: string;
}

interface SalesProcessDiagramProps {
  stages: Stage[];
  onNodeClick?: (nodeId: string) => void;
  onStageClick?: (stageId: number) => void;
}

export function SalesProcessDiagram({
  stages,
  onNodeClick,
  onStageClick,
}: SalesProcessDiagramProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  const lanes = [
    { id: "client", label: "Client", color: "#3b82f6", bgColor: "#eff6ff" },
    { id: "auto", label: "Automated", subtitle: "Nurturing", color: "#ec4899", bgColor: "#fdf2f8" },
    { id: "em", label: "Em", subtitle: "Technical", color: "#8b5cf6", bgColor: "#f5f3ff" },
    { id: "nicole", label: "Nicole", subtitle: "Sales Admin", color: "#f59e0b", bgColor: "#fffbeb" },
    { id: "ben", label: "Ben", subtitle: "Sales", color: "#10b981", bgColor: "#ecfdf5" },
  ];

  const laneHeight = 85;
  const headerWidth = 85;
  const stageHeaderHeight = 90;
  const topOffset = stageHeaderHeight + 10;
  const startX = headerWidth + 15;

  const stagePositions = [
    { startX: 100, width: 145 },
    { startX: 245, width: 365 },
    { startX: 610, width: 260 },
    { startX: 870, width: 420 },
    { startX: 1290, width: 160 },
  ];

  const nodes = [
    { id: "organic", label: "Organic Inquiry", lane: "client", x: startX, width: 90, entryPoint: true, stage: 1, description: "Inbound lead from website, SEO, content" },
    { id: "referral", label: "Referral", lane: "client", x: startX, y: 26, width: 90, entryPoint: true, stage: 1, description: "Word of mouth, existing client referral" },
    { id: "outreach", label: "Outreach", lane: "client", x: startX, y: 52, width: 90, entryPoint: true, stage: 1, description: "Proactive contact from Yoonet" },
    { id: "dashboard", label: "Dashboard", subtitle: "Client in Bubble", lane: "nicole", x: startX + 110, width: 120, isDashboard: true, stage: 1, description: "Inquiry arrives. Client automatically created in Bubble." },
    { id: "send-booking", label: "Send booking link", subtitle: '"Form coming soon"', lane: "nicole", x: startX + 260, width: 115, stage: 2, description: "Nicole sends immediate response with booking link." },
    { id: "books-time", label: "Books time", lane: "client", x: startX + 400, width: 80, stage: 2, description: "Client selects available time slot." },
    { id: "create-form", label: "Create form HTML", subtitle: "(with Claude)", lane: "em", x: startX + 260, width: 110, stage: 2, description: "Em uses Claude to generate bespoke Partner Assessment Form." },
    { id: "refine-form", label: "Refine & prepare", lane: "nicole", x: startX + 390, width: 100, hasLoop: true, stage: 2, description: "Em and Nicole collaborate to refine the form." },
    { id: "approve-send", label: "Approve & send", lane: "nicole", x: startX + 510, width: 95, stage: 2, description: "Nicole approves and sends form to client." },
    { id: "auto-welcome", label: "Welcome + Portal", lane: "auto", x: startX + 260, width: 105, isAuto: true, stage: 2, description: "Automated welcome sequence with portal access." },
    { id: "auto-howwework", label: "How We Work", lane: "auto", x: startX + 385, width: 90, isAuto: true, stage: 2, description: "Pre-meeting education on partnership model." },
    { id: "auto-investment", label: "Investment Guide", lane: "auto", x: startX + 495, width: 95, isAuto: true, stage: 2, description: "Pricing transparency and ROI examples." },
    { id: "fill-form", label: "Completes Assessment", lane: "client", x: startX + 630, width: 125, stage: 3, description: "Client fills out their bespoke Partner Assessment Form." },
    { id: "email-notify", label: "Email to all", lane: "auto", x: startX + 630, width: 100, isNotification: true, stage: 3, description: "Assessment completion notifies Ben, Em, and Nicole." },
    { id: "meeting", label: "Meeting", subtitle: "with Ben", lane: "ben", x: startX + 760, width: 85, isMeeting: true, stage: 3, description: "Ben meets with client. Has reviewed their assessment." },
    { id: "meeting-notes", label: "Meeting insights", lane: "ben", x: startX + 870, width: 100, stage: 4, description: "Ben captures insights and requirements from the meeting." },
    { id: "create-understanding", label: "Understanding of needs", lane: "em", x: startX + 990, width: 125, isProposal: true, stage: 4, description: "Em and Nicole document the client's needs." },
    { id: "create-solutions", label: "Proposed solutions", lane: "em", x: startX + 1135, width: 110, isProposal: true, stage: 4, description: "Em develops proposed solutions based on needs." },
    { id: "create-timing", label: "Timing & next steps", lane: "nicole", x: startX + 1135, width: 110, isProposal: true, stage: 4, description: "Nicole defines timing and implementation approach." },
    { id: "create-proposal", label: "Create proposal", subtitle: "yoonet.io/[client]", lane: "nicole", x: startX + 1265, width: 110, isProposal: true, stage: 4, description: "Proposal created as yoonet.io subdirectory with PIN." },
    { id: "receive-proposal", label: "Receives proposal", subtitle: "PIN + Bubble link", lane: "client", x: startX + 1265, width: 110, stage: 5, description: "Client receives proposal page with PIN access." },
    { id: "bubble-onboard", label: "Bubble onboarding", lane: "client", x: startX + 1395, width: 115, isExit: true, stage: 5, description: "Client uses PIN to access Bubble. Recruitment begins." },
  ];

  const connections = [
    { from: "organic", to: "dashboard" },
    { from: "referral", to: "dashboard" },
    { from: "outreach", to: "dashboard" },
    { from: "dashboard", to: "send-booking" },
    { from: "dashboard", to: "create-form" },
    { from: "dashboard", to: "auto-welcome" },
    { from: "send-booking", to: "books-time" },
    { from: "create-form", to: "refine-form" },
    { from: "refine-form", to: "approve-send" },
    { from: "approve-send", to: "fill-form" },
    { from: "auto-welcome", to: "auto-howwework", auto: true },
    { from: "auto-howwework", to: "auto-investment", auto: true },
    { from: "fill-form", to: "email-notify" },
    { from: "books-time", to: "meeting", dashed: true },
    { from: "email-notify", to: "meeting", dashed: true },
    { from: "meeting", to: "meeting-notes" },
    { from: "meeting-notes", to: "create-understanding" },
    { from: "create-understanding", to: "create-solutions" },
    { from: "create-solutions", to: "create-timing" },
    { from: "create-timing", to: "create-proposal" },
    { from: "create-proposal", to: "receive-proposal" },
    { from: "receive-proposal", to: "bubble-onboard" },
  ];

  const getLaneY = (laneId: string) => {
    const index = lanes.findIndex((l) => l.id === laneId);
    return topOffset + index * laneHeight;
  };

  const getLaneColor = (laneId: string) => {
    return lanes.find((l) => l.id === laneId)?.color || "#64748b";
  };

  const getNodeById = (id: string) => nodes.find((n) => n.id === id);

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
    setSelectedStage(null);
    onNodeClick?.(nodeId);
  };

  const handleStageClick = (stageId: number) => {
    setSelectedStage(selectedStage === stageId ? null : stageId);
    setSelectedNode(null);
    onStageClick?.(stageId);
  };

  const renderConnection = (conn: { from: string; to: string; auto?: boolean; dashed?: boolean }, index: number) => {
    const from = getNodeById(conn.from);
    const to = getNodeById(conn.to);
    if (!from || !to) return null;

    const fromLaneY = getLaneY(from.lane);
    const toLaneY = getLaneY(to.lane);
    const fromX = from.x + from.width;
    const fromY = fromLaneY + (from.y || 0) + (from.entryPoint ? 11 : 20);
    const toX = to.x;
    const toY = toLaneY + (to.y || 0) + 20;

    const isCrossLane = from.lane !== to.lane;
    const isAuto = conn.auto;
    const isDashed = conn.dashed;

    let path;
    if (isCrossLane) {
      const midX = (fromX + toX) / 2;
      path = `M ${fromX} ${fromY} L ${midX} ${fromY} L ${midX} ${toY} L ${toX} ${toY}`;
    } else {
      path = `M ${fromX} ${fromY} L ${toX} ${toY}`;
    }

    return (
      <path
        key={index}
        d={path}
        fill="none"
        stroke={isAuto ? "#ec4899" : isDashed ? "#94a3b8" : "#64748b"}
        strokeWidth={1.5}
        strokeDasharray={isAuto ? "5,3" : isDashed ? "6,4" : "none"}
        markerEnd="url(#arrowhead)"
        opacity={isDashed ? 0.5 : isAuto ? 0.7 : 0.8}
      />
    );
  };

  const renderNode = (node: (typeof nodes)[0]) => {
    const laneY = getLaneY(node.lane);
    const y = laneY + (node.y || 0) + 2;
    const color = getLaneColor(node.lane);
    const isSelected = selectedNode === node.id;

    let fill = "white";
    let strokeDash = "none";

    if (node.isExit) { fill = "#f1f5f9"; strokeDash = "4,2"; }
    else if (node.isAuto || node.isNotification) { fill = "#fdf2f8"; strokeDash = "4,2"; }
    else if (node.isDashboard) { fill = "#fef3c7"; }
    else if (node.isMeeting) { fill = "#d1fae5"; }
    else if (node.isProposal) { fill = "#ede9fe"; }

    return (
      <g
        key={node.id}
        onClick={() => handleNodeClick(node.id)}
        style={{ cursor: "pointer" }}
      >
        <rect
          x={node.x}
          y={y}
          width={node.width}
          height={node.entryPoint ? 18 : 40}
          rx="5"
          fill={fill}
          stroke={isSelected ? "#3b82f6" : node.isDashboard ? "#f59e0b" : color}
          strokeWidth={isSelected ? 2.5 : node.isDashboard ? 2 : 1.5}
          strokeDasharray={strokeDash}
        />
        {node.isAuto && (
          <text x={node.x + 5} y={y + 12} fill="#ec4899" fontSize="8">
            ⚡
          </text>
        )}
        <text
          x={node.x + node.width / 2}
          y={y + (node.entryPoint ? 12 : node.subtitle ? 15 : 23)}
          textAnchor="middle"
          fill="#1e293b"
          fontSize={node.entryPoint ? 9 : 10}
          fontWeight="500"
        >
          {node.label}
        </text>
        {node.subtitle && (
          <text x={node.x + node.width / 2} y={y + 28} textAnchor="middle" fill="#64748b" fontSize="8">
            {node.subtitle}
          </text>
        )}
      </g>
    );
  };

  const renderStageChevron = (stage: Stage, index: number, pos: { startX: number; width: number }) => {
    const y = 15;
    const height = 60;
    const chevronPoint = 20;
    const isSelected = selectedStage === stage.id;
    const isFirst = index === 0;
    const isLast = index === stages.length - 1;

    let path;
    if (isFirst) {
      path = `M ${pos.startX} ${y} L ${pos.startX + pos.width - chevronPoint} ${y} L ${pos.startX + pos.width} ${y + height / 2} L ${pos.startX + pos.width - chevronPoint} ${y + height} L ${pos.startX} ${y + height} Z`;
    } else if (isLast) {
      path = `M ${pos.startX} ${y} L ${pos.startX + pos.width} ${y} L ${pos.startX + pos.width} ${y + height} L ${pos.startX} ${y + height} L ${pos.startX + chevronPoint} ${y + height / 2} Z`;
    } else {
      path = `M ${pos.startX} ${y} L ${pos.startX + pos.width - chevronPoint} ${y} L ${pos.startX + pos.width} ${y + height / 2} L ${pos.startX + pos.width - chevronPoint} ${y + height} L ${pos.startX} ${y + height} L ${pos.startX + chevronPoint} ${y + height / 2} Z`;
    }

    const centerX = pos.startX + pos.width / 2;

    return (
      <g key={stage.id} onClick={() => handleStageClick(stage.id)} style={{ cursor: "pointer" }}>
        <path d={path} fill="#00000010" transform="translate(2, 2)" />
        <path d={path} fill={isSelected ? stage.color : stage.lightColor} stroke={stage.color} strokeWidth={isSelected ? 2.5 : 1.5} />
        <circle cx={centerX - 35} cy={y + height / 2} r={12} fill={stage.color} />
        <text x={centerX - 35} y={y + height / 2 + 4} textAnchor="middle" fill="white" fontSize="11" fontWeight="700">{stage.id}</text>
        <text x={centerX + 5} y={y + height / 2 + 5} textAnchor="middle" fill={isSelected ? "white" : "#1e293b"} fontSize="14" fontWeight="600">{stage.name}</text>
      </g>
    );
  };

  const selectedNodeData = selectedNode ? getNodeById(selectedNode) : null;
  const selectedStageData = selectedStage ? stages.find((s) => s.id === selectedStage) : null;

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-xl bg-white p-3 shadow-lg">
        <svg width="1620" height="555" viewBox="0 0 1620 555">
          <defs>
            <marker id="arrowhead" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0 0, 7 2.5, 0 5" fill="#64748b" />
            </marker>
            <marker id="arrowhead-purple" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0 0, 7 2.5, 0 5" fill="#8b5cf6" />
            </marker>
          </defs>

          <rect x="0" y="0" width="1620" height={stageHeaderHeight} fill="#f8fafc" rx="0" />
          <line x1="0" y1={stageHeaderHeight} x2="1620" y2={stageHeaderHeight} stroke="#e2e8f0" strokeWidth="1" />

          {stages.map((stage, index) => renderStageChevron(stage, index, stagePositions[index]))}

          {lanes.map((lane, index) => {
            const y = topOffset + index * laneHeight;
            return (
              <g key={lane.id}>
                <rect x={headerWidth} y={y} width="1535" height={laneHeight} fill={lane.bgColor} stroke="#e2e8f0" />
                <rect x="0" y={y} width={headerWidth} height={laneHeight} fill={lane.color} />
                <text x={headerWidth / 2} y={y + laneHeight / 2 - (lane.subtitle ? 5 : 0)} textAnchor="middle" fill="white" fontSize="11" fontWeight="600">
                  {lane.label}
                </text>
                {lane.subtitle && (
                  <text x={headerWidth / 2} y={y + laneHeight / 2 + 9} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9">
                    {lane.subtitle}
                  </text>
                )}
              </g>
            );
          })}

          {stagePositions.slice(0, -1).map((pos, index) => (
            <line
              key={`divider-${index}`}
              x1={pos.startX + pos.width}
              y1={topOffset}
              x2={pos.startX + pos.width}
              y2={topOffset + laneHeight * 5}
              stroke="#e2e8f0"
              strokeWidth="1"
              strokeDasharray="4,4"
            />
          ))}

          <rect x={startX + 105} y={getLaneY("em") - 2} width="130" height={laneHeight * 3 + 4} fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,3" rx="5" opacity="0.4" />
          <rect x={startX + 980} y={getLaneY("em") - 2} width="410" height={laneHeight * 2 + 4} fill="#ede9fe" opacity="0.25" rx="5" />

          {connections.map((conn, index) => renderConnection(conn, index))}
          {nodes.map((node) => renderNode(node))}
        </svg>
      </div>

      {selectedStageData && (
        <div className="rounded-xl border-l-4 bg-white p-4 shadow-lg" style={{ borderColor: selectedStageData.color }}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: selectedStageData.color }}>
                {selectedStageData.id}
              </span>
              <h2 className="text-lg font-bold">Stage {selectedStageData.id}: {selectedStageData.name}</h2>
            </div>
            <button onClick={() => setSelectedStage(null)} className="text-lg text-muted-foreground hover:text-foreground">
              &times;
            </button>
          </div>
        </div>
      )}

      {selectedNodeData && (
        <div className="rounded-xl bg-white p-4 shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-base font-bold">{selectedNodeData.label}</h2>
              <div className="mt-1 flex flex-wrap gap-2">
                <span className="inline-block rounded px-2 py-0.5 text-xs font-medium" style={{ backgroundColor: `${getLaneColor(selectedNodeData.lane)}20`, color: getLaneColor(selectedNodeData.lane) }}>
                  {selectedNodeData.isAuto || selectedNodeData.isNotification ? "Automated" : lanes.find((l) => l.id === selectedNodeData.lane)?.label}
                </span>
                {selectedNodeData.stage && (
                  <span className="inline-block rounded px-2 py-0.5 text-xs font-medium" style={{ backgroundColor: stages[selectedNodeData.stage - 1].lightColor, color: stages[selectedNodeData.stage - 1].color }}>
                    Stage {selectedNodeData.stage}: {stages[selectedNodeData.stage - 1].name}
                  </span>
                )}
              </div>
            </div>
            <button onClick={() => setSelectedNode(null)} className="text-lg text-muted-foreground hover:text-foreground">
              &times;
            </button>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{selectedNodeData.description}</p>
        </div>
      )}
    </div>
  );
}
