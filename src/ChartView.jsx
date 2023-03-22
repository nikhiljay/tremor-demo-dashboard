import { useState } from "react";
import {
  AreaChart,
  Card,
  Flex,
  Icon,
  Text,
  Title,
  Toggle,
  ToggleItem,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/outline";

export const performance = [
  {
    date: "2021-01-01",
    Sales: 900.73,
    Profit: 173,
    Customers: 73,
  },
  {
    date: "2021-01-02",
    Sales: 1000.74,
    Profit: 174.6,
    Customers: 74,
  },
  // ...
  {
    date: "2021-03-13",
    Sales: 882,
    Profit: 682,
    Customers: 682,
  },
];

// Basic formatters for the chart values
const dollarFormatter = (value) =>
  `$ ${Intl.NumberFormat("us").format(value).toString()}`;

const numberFormatter = (value) =>
  `${Intl.NumberFormat("us").format(value).toString()}`;

const ChartView = () => {
  const [selectedKpi, setSelectedKpi] = useState("Sales");

  // map formatters by selectedKpi
  const formatters = {
    Sales: dollarFormatter,
    Profit: dollarFormatter,
    Customers: numberFormatter,
  };

  return (
    <Card>
      <div className="md:flex justify-between">
        <div>
          <Flex
            justifyContent="start"
            className="space-x-0.5"
            alignItems="center"
          >
            <Title> Performance History </Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Shows day-over-day (%) changes of past performance"
            />
          </Flex>
          <Text> Daily increase or decrease per domain </Text>
        </div>
        <div className="mt-6 md:mt-0">
          <Toggle
            color="zinc"
            defaultValue={selectedKpi}
            onValueChange={(value) => setSelectedKpi(value)}
          >
            <ToggleItem value="Sales" text="Sales" />
            <ToggleItem value="Profit" text="Profit" />
            <ToggleItem value="Customers" text="Customers" />
          </Toggle>
        </div>
      </div>
      <AreaChart
        data={performance}
        index="date"
        categories={[selectedKpi]}
        colors={["blue"]}
        showLegend={false}
        valueFormatter={formatters[selectedKpi]}
        yAxisWidth={56}
        className="h-96 mt-8"
      />
    </Card>
  );
};

export default ChartView;
