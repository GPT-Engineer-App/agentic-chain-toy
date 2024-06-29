import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgentCard = ({ agent, onPromptChange }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>Agent {agent.id}</CardTitle>
    </CardHeader>
    <CardContent>
      <Input
        value={agent.prompt}
        onChange={(e) => onPromptChange(agent.id, e.target.value)}
        placeholder="Edit agent prompt"
      />
    </CardContent>
  </Card>
);

const Index = () => {
  const [agents, setAgents] = useState([{ id: 1, prompt: "" }]);

  const handlePromptChange = (id, newPrompt) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === id ? { ...agent, prompt: newPrompt } : agent
      )
    );
  };

  const handleAddAgent = () => {
    setAgents((prevAgents) => [
      ...prevAgents,
      { id: prevAgents.length + 1, prompt: "" },
    ]);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl mb-4">Agentic AI</h1>
      <div className="w-full max-w-md">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            onPromptChange={handlePromptChange}
          />
        ))}
        <Button onClick={handleAddAgent} className="w-full">
          Add Agent
        </Button>
      </div>
    </div>
  );
};

export default Index;