import DashboardSample from "./DashboardSample";
import "../Styles/DashboardSample.css";
import { useContext } from "react";
import Context from "../Context/Context";

function SettingLink() {
  // const { currentmailvalue } = useContext(MyContext);
  // console.log({ currentmailvalue });

  const { data, changeData } = useContext(Context);

  return (
    <>
      {/* {switches} */}
      <DashboardSample
        props={
          <div
            className="card"
            style={{
              margin: "250px",
              width: "1350px",
              height: "800px",
              padding: "20px",
            }}
          >
            <h2>Settings</h2>
            <div>UserName: {data}</div>
            <br />
            <div>Email: </div>
          </div>
        }
      />
    </>
  );
}

export default SettingLink;
