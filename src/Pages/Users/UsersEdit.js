
import { useParams, useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import UsersForm from './UsersForm';
import { GET_USERS_QUERY, GET_USER_BY_ID_QUERY } from '../../gql/Query/Users';
import { UPDATE_USER_MUTATION } from '../../gql/Mutation/Users';

const UsersEdit = () => {

    const { id } = useParams()
    const history = useHistory()

    const { loading, data } = useQuery(GET_USER_BY_ID_QUERY, {
        variables : { userId : id }
    })

    const [ UpdateUser, { data : updatedUser }] = useMutation(UPDATE_USER_MUTATION, {
        refetchQueries : [
            { query : GET_USERS_QUERY }
        ]
    })

    const handleUser = (values) => {
        UpdateUser({ variables : {updateUserId : id,  input: {...values} }})
    }

    if(updatedUser) {
        history.push('/users')
    }
    return (
        <div>
        {
            !loading && (
                <UsersForm handleUser={handleUser} user={data?.User}/>
            )
        }
        </div>
    )
}

export default UsersEdit