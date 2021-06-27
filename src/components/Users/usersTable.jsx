import React from "react";
import "./usersTable.css";
import data from "../../data.json";

//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
//For API Requests

/// need to find a way to dynamically get the dates to show up in the extra line
var i = data.events.map((event) => {
  return event.guestsInfo.map((info) => {
    return info.dose1;
  });
});

class UsersTable extends React.Component {
  componentDidMount() {
    //initialize datatable
    var table = $("#example").DataTable();

    $("#example tbody").on("click", "td.details-control", function () {
      var tr = $(this).closest("tr");
      var row = table.row(tr);

      if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass("shown");
      } else {
        // Open this row

        row
          .child(
            `<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;"><th class="table-default">Dose 1 Dose 2</th></table>`
          )
          .show();

        tr.addClass("shown");
      }
    });
  }
  render() {
    //Datatable HTML
    return (
      <div>
        <h1 className="myTrax" style={{ fontFamily: "copperplate" }}>
          myTrax
        </h1>
        <div
          className="MainDiv"
          style={{
            backgroundColor: "beige",
            display: "inline-block",
            padding: 20,
            margin: 30,
            minWidth: 700,
          }}
        >
          <div className="text-center">
            <h3 style={{ padding: 20, fontWeight: "bold" }}>
              {" "}
              <span style={{ color: "red" }}>
                {data.events.map((event) => {
                  return event.name;
                })}
              </span>
            </h3>
          </div>

          <div className="container">
            <table
              id="example"
              className="table table-bordered table-sm row-border hover mb-5"
            >
              <thead>
                <tr>
                  <th className="details-control sorting_disabled" disabled></th>
                  <th>GUEST</th>
                  <th>VACCINATION STATUS</th>
                  <th>VACCINE</th>
                </tr>
              </thead>

              <tbody>
                {data.events.map((event) => {
                  return event.guestsInfo.map((info) => {
                    let colorStyle = "";
                    if (info.status == "none") {
                      colorStyle += "table-danger";
                    } else if (info.status == "partial") {
                      colorStyle += "table-warning";
                    } else if (info.status == "done") {
                      colorStyle += "table-success";
                    } else {
                      colorStyle += "table-secondary";
                    }

                    return (
                      <tr className={colorStyle}>
                        <td className="details-control"></td>
                        <td>{info.name}</td>
                        <td>{info.status}</td>
                        <td>{info.vaccine}</td>
                      </tr>
                    );
                  });
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default UsersTable;
