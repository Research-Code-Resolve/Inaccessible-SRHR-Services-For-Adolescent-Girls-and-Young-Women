import "./RecentActivity.css";
import { Link } from "react-router-dom";
import {
  FaHistory,
  FaArrowRight,
} from "react-icons/fa";

const RecentActivity = ({
  title = "Recent Activity",
  activities = [],
}) => {
  return (
    <div className="recent-activity-card">

      <div className="recent-header">

        <div className="recent-icon">
          <FaHistory />
        </div>

        <h3>{title}</h3>

      </div>

      {activities.length === 0 ? (

        <div className="empty-state">

          <p>
            No recent activity yet.
          </p>

          <span>
            Start exploring ValeCare to see
            your activity here.
          </span>

        </div>

      ) : (

        <ul className="activity-list">

          {activities.map((activity) => (

            <li
              key={activity.id}
              className="activity-item"
            >

              <div>

                <h4>{activity.title}</h4>

                <p>{activity.time}</p>

              </div>

              {activity.path && (

                <Link
                  to={activity.path}
                  className="activity-link"
                >
                  <FaArrowRight />
                </Link>

              )}

            </li>

          ))}

        </ul>

      )}

    </div>
  );
};

export default RecentActivity;