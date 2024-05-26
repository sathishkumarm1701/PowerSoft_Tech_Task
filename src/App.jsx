import { Card, CardBody, CardHeader } from "reactstrap";
import "./App.css";
import RowForm from "./ROW_TASK_1/RowForm";
import FormValidation from "./REACT_TASK_2/FormValidation";

function App() {
  return (
    <Card>
      <CardBody>
        <RowForm />
        <FormValidation />
      </CardBody>
    </Card>
  );
}

export default App;
