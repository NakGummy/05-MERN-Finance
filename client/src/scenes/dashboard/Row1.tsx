import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { AreaChart, ResponsiveContainer } from "recharts";

type Props = {};

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  console.log("🚀 ~ Row1 ~ data:", data);

  return (
    <>
      <DashboardBox gridArea={"a"}>
        <ResponsiveContainer width={`100%`} height={`100%`}>
          <AreaChart></AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea={"b"}></DashboardBox>
      <DashboardBox gridArea={"c"}></DashboardBox>
    </>
  );
};

export default Row1;
