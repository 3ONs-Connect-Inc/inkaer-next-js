
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function VerificationSummary({ candidate }: { candidate: any }) {
  return (
    <Card className="bg-white/10 border-white/20 text-white">
      <CardHeader compact>
        <CardTitle>Verification Summary</CardTitle>
      </CardHeader>
      <CardContent compact className="space-y-3 mt-2">

        <SummaryRow
          label="Originality Check:"
          badge={candidate.originalityStatus}
          color="green"
        />

        <SummaryRow
          label="Industry Relevance:"
          badge={candidate.industryRelevance}
          color="blue"
        />

        <SummaryRow
          label="Technical Interview:"
          badge={candidate.technicalInterview}
          color="purple"
        />

      </CardContent>
    </Card>
  );
}


function SummaryRow({
  label,
  badge,
  color,
}: {
  label: string;
  badge: string;
  color: "green" | "blue" | "purple";
}) {
  const colorMap = {
    green: "bg-green-500/20 text-green-100 border-green-400/30",
    blue: "bg-blue-500/20 text-blue-100 border-blue-400/30",
    purple: "bg-purple-500/20 text-purple-100 border-purple-400/30",
  };

  return (
    <div className="flex justify-between items-center">
      <span className="text-blue-100 xs:text-base text-sm">{label}</span>
      <Badge className={colorMap[color]}>{badge}</Badge>
    </div>
  );
}
