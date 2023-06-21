import React from "react";
import { Link } from "react-router-dom";
// import Activity component
import Activity from "./Activity";

function RecentActivity(props) {
  const { fetcher, nextPage, previousPage } = props;
  // functions
  function handleRowChange(e) {}

  const paginateNext = async () => {
    await fetcher(nextPage);
  };

  const paginatePrevious = async () => {
    await fetcher(previousPage);
  };

  // function resolveIconColor(type) {
  // 	if (type === "Created") {
  // 		return "green";
  // 	} else if (type === "Updated") {
  // 		return "purple";
  // 	} else {
  // 		return "yellow";
  // 	}
  // }

  return (
    <section
      className={
        props.type === "full"
          ? "recent-activities px-0 py-0 bg-white rounded-3 border-muted border border-1 mt-5"
          : "recent-activities px-4 py-3 bg-white rounded-3 border-muted border border-1 mt-5"
      }
      style={
        {
          // minHeight: "100%",
          // maxHeight: "100%",
        }
      }
      // {...props}
    >
      <div
        className={
          props.type === "full"
            ? `d-none`
            : `d-flex align-items-center justify-content-between mb-3`
        }
      >
        <h6 className="m-0 fw-normal ">Recent Activity</h6>
        <Link to="recent-activities">See more</Link>
      </div>
      <div className="activities d-flex flex-column justify-content-between px-4">
        {props.data &&
          props.data.map((activity) => {
            let { id, message, date, type } = activity;
            return (
              <Activity
                key={id}
                details={message}
                date={date}
                // icon="roundPen"
                // iconColor="green"
                type={type}
              />
            );
          })}
      </div>
      {props.type === "full" ? (
        <small
          className="d-flex align-items-center justify-content-end py-2 px-3"
          style={{ gap: "1.2rem" }}
        >
          <span className="text-muted small">Rows per page</span>
          <div
            style={{
              width: "3.2rem",
              paddingRight: "0.1px !important",
            }}
          >
            <select
              name="rowsPerpage"
              id="rows-per-page"
              className="form-select px-1 ps-2 pe-0 border-0 small"
              onChange={handleRowChange}
            >
              <option value="10">10</option>
            </select>
          </div>
          <span className="range"></span>
          {previousPage && (
            <button className="btn py-1 p-2" onClick={paginatePrevious}>
              &lt; Prev
            </button>
          )}
          {nextPage && (
            <button className="btn py-1 p-2" onClick={paginateNext}>
              Next &gt;
            </button>
          )}
        </small>
      ) : (
        <></>
      )}
    </section>
  );
}

export default RecentActivity;
