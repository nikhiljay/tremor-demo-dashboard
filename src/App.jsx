import { useState } from "react";
import { Card, Grid, Tab, TabList, Text, Title } from "@tremor/react";
import KpiCardGrid from "./KpiCardGrid";
import TableView from "./TableView";
import ChartView from "./ChartView";

const App = () => {
  const [selectedView, setSelectedView] = useState("1");

  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Detail" />
      </TabList>

      {selectedView === "1" ? (
        <>
          <KpiCardGrid />
          <div className="mt-6">
            <ChartView />
          </div>
        </>
      ) : (
        <Card className="mt-6">
          <TableView />
        </Card>
      )}
    </main>
  );
};

export default App;
