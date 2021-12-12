import React from "react";
import { TableComponent } from "../../components/Admin/TableComponent";

const BuildingsOverview = () => {
  const [buildingsJson, setbuildingsJson] = useState(null);

  useEffect(() => {
    EmployeeService.getReservations().then((res) => {
      setbuildingsJson(res);
      console.log(buildingsJson);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 ">
      <h1>Test</h1>
      <TableComponent
        headers={["Number", "Desk", "Name"]}
        data={[
          {
            id: 0,
            name: "Building Name 0",
            street: "Street Name 0"
          }
        ]}
      />
    </div>
  );
};

export default BuildingsOverview;
