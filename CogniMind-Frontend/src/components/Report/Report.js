import "./Report.css";

function Report() {
  // const response = axios.post......
  const report = JSON.parse(
    '{"Model 1": "Depression", "Model 2": "Depression", "Model 3": "Depression", "Model 4": "Depression", "Model 5": "Depression", "Model 6": "Depression", "Model 7": "Depression", "Model 8": "Depression", "Model 9": "Depression", "Model 10": "Depression", "Model 11": "Depression", "Model 12": "Depression"}'
  );
  console.log(report);

  return (
    <div className="reportbox">
      <h2>Report</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Model</th>
            <th scope="col">Prediction</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(report).map(([key, value]) => {
            return (
              <tr>
                <td>{key}</td>
                <td>{value.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>Final Prediction: </h4>
      <div>
        <h5>Add Doctor's remarks-</h5>
        <textarea
          type="text"
          placeholder="Remarks/Further treatment"
          className="ibox"
        ></textarea>
      </div>
    </div>
  );
}
export default Report;
