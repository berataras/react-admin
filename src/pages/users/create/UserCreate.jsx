import "./userCreate.css"
import Layout from "../../layout/Layout";

function UserCreate(props) {
    return (
        <Layout className="createUser">
            <h1 className="createUserTitle">New User</h1>
            <form className="createUserForm">
                <div className="createUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="john"/>
                </div>
                <div className="createUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith"/>
                </div>
                <div className="createUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com"/>
                </div>
                <div className="createUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                </div>
                <div className="createUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 78"/>
                </div>
                <div className="createUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA"/>
                </div>
                <div className="createUserItem">
                    <label>Gender</label>
                    <div className="createUserGender">
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other"/>
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="createUserItem">
                    <label>Active</label>
                    <select className="createUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="createUserButton">Create</button>
            </form>
        </Layout>
    );
}

export default UserCreate;