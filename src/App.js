import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Line from "./components/Line";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [period, setPeriod] = useState(3);

  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVRkJNVVJGTVRkRVJFUTBORVU0TlRsRlJqUkZRelk1TVRnMFJVUTRSVGhDTURVME5UQkZRUSJ9.eyJodHRwczovL3ZvaWNlYWJsZS5jby91c2VyX2F1dGhvcml6YXRpb24iOnsicm9sZXMiOlsiQWRtaW4iLCJBZ2VudCIsIkFnZW50cyBBZG1pbiIsIkFnZW50LVNhbGVzIiwiRGFzaGJvYXJkLUFkbWluIiwiUmVhZE9ubHlVc2VyIiwiU2l0ZSBPd25lciIsIlN1cHBvcnQgUmVwIl19LCJpc3MiOiJodHRwczovL2Rldi12b2ljZWFibGUuZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYxYmIzMDNlMmU2NTU1MDA2OGZlODEyMyIsImF1ZCI6WyJodHRwczovL3ZvaWNlYWJsZS5zaXRlL2FwaSIsImh0dHBzOi8vZGV2LXZvaWNlYWJsZS5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjUyMzQzMTc1LCJleHAiOjE2NTI0Mjk1NzUsImF6cCI6IjYwbzh3TlR2azNnQVJGUmhlQnV0NDBlOHVhYWpiZXIyIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInBlcm1pc3Npb25zIjpbImNyZWF0ZTppbnRlbnQiLCJjcmVhdGU6bWVzc2FnZSIsImRlbGV0ZTppbnRlbnQiLCJyZWFkOmFuYWx5dGljcyIsInJlYWQ6Y2xpZW50IiwicmVhZDpjbGllbnRNYXAiLCJyZWFkOmNvbmZpZyIsInJlYWQ6aW50ZW50cyIsInJlYWQ6bWVzc2FnZXMiLCJ1cGRhdGU6Y29uZmlnIiwidXBkYXRlOmludGVudCJdfQ.FdtNbHhkjnvBJ_QU12ZWvubbsF9aN-l_BQwKLv2F1OCcfif9i2sF37kAWSTNFFFLSMJMEwRvWwXqt3x0WnnDFfZ2sIPYIKY8lLdjeWlhnNPAXTzGj21PcmEDoILbLRhYerupLBPSwfQmzrhO3s5FzVbwMIojqV8a_MSihgeEDhXjYKsObQFYmnRQLKXCB9CKCGUMkp-KOC5GDpbgvlISE7Qua4Rr1jV2vLBxSpy_36cdSz6WQpU57rTDFMbnYsJma4BivqPxitDCTBfwFFuCktLu5DB_bEj9nnA3y66tmvkwGjKoXFwwPP1NAtRHWfHDrkA_TfJlbQInk59oCW52sg",
    },
  };

  let date = new Date();
  let startDate = new Date(date.setDate(date.getDate() - period)).toUTCString();
  let endDate = new Date().toUTCString();

  useEffect(() => {
    fetch(
      `https://dev-api.voice-able.com/client/demoGlasses/get-chats-by-date?startDate=${startDate}&endDate=${endDate}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [period]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main data={data} setPeriod={setPeriod} />
        </Route>
        <Route exact path="/line">
          <Line data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
