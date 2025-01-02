import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">Rp 0</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>This Month</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">Rp 0</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Average Daily</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">Rp 0</p>
        </CardContent>
      </Card>
    </div>
  );
}