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
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVRkJNVVJGTVRkRVJFUTBORVU0TlRsRlJqUkZRelk1TVRnMFJVUTRSVGhDTURVME5UQkZRUSJ9.eyJodHRwczovL3ZvaWNlYWJsZS5jby91c2VyX2F1dGhvcml6YXRpb24iOnsicm9sZXMiOlsiQWRtaW4iLCJBZ2VudCIsIkFnZW50cyBBZG1pbiIsIkFnZW50LVNhbGVzIiwiRGFzaGJvYXJkLUFkbWluIiwiUmVhZE9ubHlVc2VyIiwiU2l0ZSBPd25lciIsIlN1cHBvcnQgUmVwIl19LCJpc3MiOiJodHRwczovL2Rldi12b2ljZWFibGUuZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYxYmIzMDNlMmU2NTU1MDA2OGZlODEyMyIsImF1ZCI6WyJodHRwczovL3ZvaWNlYWJsZS5zaXRlL2FwaSIsImh0dHBzOi8vZGV2LXZvaWNlYWJsZS5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjUyMjUzNDc1LCJleHAiOjE2NTIzMzk4NzUsImF6cCI6IjYwbzh3TlR2azNnQVJGUmhlQnV0NDBlOHVhYWpiZXIyIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInBlcm1pc3Npb25zIjpbImNyZWF0ZTppbnRlbnQiLCJjcmVhdGU6bWVzc2FnZSIsImRlbGV0ZTppbnRlbnQiLCJyZWFkOmFuYWx5dGljcyIsInJlYWQ6Y2xpZW50IiwicmVhZDpjbGllbnRNYXAiLCJyZWFkOmNvbmZpZyIsInJlYWQ6aW50ZW50cyIsInJlYWQ6bWVzc2FnZXMiLCJ1cGRhdGU6Y29uZmlnIiwidXBkYXRlOmludGVudCJdfQ.gmtg6y9XxheNRB_U93aglAP2Y9slUbfpsFf82lnQY1qzKMz5o1pEoq7gHdYIOPifjFTBrwDjNlbesxTg7JZ9rIOLW2jN9U_rVki8kPJLeorEDJ-tX_BIrssZ8YCkX0_s971o4FGsqj3L9S4HDSxNOnRXmgAuTgZpwfxG_QuKOLmmkxIZzQ93diookzm0dcRJkF_XXZU5_3GOXYeuGA3ACvDP0_Wg0X5ZNBTA40bOJxBMwZ79Jrl54t8PcyrHn3DMbEljPGnyHjVj1zJFqf3sC6Fnl0GZBw2S2x16FyK-qmztAkt05J9nGJ2oorPfjtvXFyBwqdGykHJG6s36LAJ8Vw",
    },
  };

  let date = new Date();
  let startDate = new Date(date.setDate(date.getDate() - period)).toUTCString();

  useEffect(() => {
    fetch(
      `https://dev-api.voice-able.com/client/demoGlasses/get-chats-by-date?startDate=${startDate}&endDate=Tue,+10+May+2022+19:24:29+GMT`,
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
