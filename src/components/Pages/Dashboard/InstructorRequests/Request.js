// src/components/Admin/Request.js

const Request = ({ request, index, handleApprove, handleReject }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{request.first_name} {request.last_name}</td>
            <td>{request.email}</td>
            <td>{request.designation}</td>
            <td>
                <img src={request.img_link} alt="instructor-img" className="w-16 rounded" />
            </td>
            <td>
                <select
                    value={request.status || "pending"} // default fallback
                    onChange={(e) => {
                        if (e.target.value === "approve") {
                            handleApprove(request);
                        } else if (e.target.value === "reject") {
                            handleReject(request);
                        }
                    }}
                    className="select select-bordered select-sm max-w-xs"
                >
                    <option value="pending" disabled>Select action</option>
                    <option value="approve">Approved</option>
                    <option value="reject">Reject</option>
                </select>
            </td>
        </tr>
    );
};

export default Request;
