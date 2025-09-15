import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 3500, momGrowth: 40 },
  { month: "Feb", income: 4800, momGrowth: 60 },
  { month: "Mar", income: 7000, momGrowth: 55 },
  { month: "Apr", income: 3000, momGrowth: -30 },
  { month: "May", income: 5000, momGrowth: 65 },
  { month: "Jun", income: 0, momGrowth: -80 },
];

export default function IncomeTrend() {
  return (
    <div className="w-full border-2 border-[#f2f2f2] rounded-3xl p-2 sm:p-6">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />

          {/* Left Y-Axis for income */}
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#9333ea" // purple
            tickFormatter={(value) => `$${value / 1000}k`}
          />

          {/* Right Y-Axis for momGrowth */}
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#7f1d1d" // brown/red
            tickFormatter={(value) => `${value}%`}
          />

          <Tooltip />
          <Legend />

          {/* Bar for income */}
          <Bar
            yAxisId="left"
            dataKey="income"
            barSize={40}
            fill="#9333ea"
            name="Income"
          />

          {/* Line for MoM Growth */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="momGrowth"
            stroke="#7f1d1d"
            name="MoM Growth"
            dot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
