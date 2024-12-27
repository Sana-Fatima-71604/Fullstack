import Calender from "../Components/Calender";

function Testschedule() {
  const test = ["React Test", "React Test", "React Test"];

  return (
    <div className="div main-content-side">
      <div className="div card" id="test">
        <p
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            lineHeight: "1",
          }}
          className="text-center"
        >
          Test Schedule
        </p>
        {test.map((test, index) => {
          return (
            <div className="div" style={{ fontWeight: "normal" }} key={index}>
              <i
                className="fa fa-cloud"
                style={{
                  padding: "0px",
                  fontSize: "20px",
                  color: "rgb(17, 146, 252)",
                }}
              ></i>
              <p style={{ padding: "0px", margin: "0px" }}>{test}</p>
              <p style={{ color: "grey" }}>
                September 02, 2023 from 1 pm to 3 pm
              </p>
            </div>
          );
        })}

        <hr className="lh-10" />
        <a href="/signin" className="text-center">
          See all
        </a>
      </div>
      {/* <Calender/> */}
    </div>
  );
}

export default Testschedule;
