import { useEffect } from 'react';
import Dashboard from "../Dashboard"
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/actions/profile';

const Profile = () => {

    const dispatch = useDispatch()
    const profile = useSelector(state => state?.profile?.data?.Profile)

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])


    return (
        <Dashboard>
            <div className="bg-white h-100 text-center p-4" style={{borderRadius:"0.5rem"}}>
                <img src="user-1.png" width="10%"/>
                <div className="mt-4">
                    <div className="mb-3">
                        <div>
                            <span className="text-body font-weight-bold">Username</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profile?.username}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body font-weight-bold">Email</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profile?.email}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body font-weight-bold">Role</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profile?.role}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body font-weight-bold">Contact Number</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profile?.contactNumber}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body font-weight-bold">Address</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profile?.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default Profile