"use client";

import { PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, RadarChart } from "recharts"
import { skills } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const Skills = () => {
  const chartConfig = {
    level: {
      label: "Level",
      color: "hsl(var(--accent))",
    },
  };
  
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader className="items-center pb-0 p-0">
        <CardTitle>Skills Radar</CardTitle>
        <CardDescription>
          A visual representation of my proficiency.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0 p-0 mt-4">
        <div className="mx-auto aspect-square h-80 w-80">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <RadarChart
              data={skills}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <PolarGrid />
              <PolarAngleAxis dataKey="name" tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                dataKey="level"
                fill="hsl(var(--accent))"
                fillOpacity={0.6}
                stroke="hsl(var(--accent))"
              />
            </RadarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};
