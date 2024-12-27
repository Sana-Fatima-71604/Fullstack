import DashboardSample from "./DashboardSample";
import "../Styles/DashboardSample.css";

function MessageLink() {
  return (
    <>
      {/* {switches} */}
      <DashboardSample
        props={
          <div
            className="card"
            style={{ margin: "250px", width: "1350px", height: "800px" }}
          >
            <h2>Messages</h2>
          </div>
        }
      />
    </>
  );
}

export default MessageLink;
