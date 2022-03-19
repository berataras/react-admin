import "./userUpate.css"
import {UserShowWidget, UserUpdateWidget} from "./components";
import {Link} from 'react-router-dom';
import Layout from "../../layout/Layout";

function UserUpdate(props) {
    return (
        <Layout className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/users/create">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <UserShowWidget />
                <UserUpdateWidget />
            </div>
        </Layout>
    );
}

export default UserUpdate;