import { Table, Space, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { tableColumns } from './CONSTANTS';
import Dashboard from '../Dashboard';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ASSETS_QUERY } from '../../gql/Query/Assets';
import { DELETE_ASSET_MUTATION } from '../../gql/Mutation/Assets';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
const confirm = Modal.confirm;

const AssetsListing = () => {

	const { data } = useQuery(GET_ASSETS_QUERY);

	const showDeleteConfirm = (id) => {
		confirm({
		  title: 'Are you sure?',
		  content: 'Do you really want to delete this Asset? This process cannot be undone.',
		  okText: 'Yes',
		  okType: 'danger',
		  cancelText: 'No',
		  onOk() {
			deleteAssets({ variables:  { deleteAssetsId: id } } )
		  },
		  onCancel() {
			console.log('Cancel');
		  },
		});
	  }

	const [deleteAssets, { error, data : deletedAsset }] = useMutation(DELETE_ASSET_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSETS_QUERY },
		]
	});

	if(deletedAsset){
        openNotificationWithIcon('deleteAsset', 'success', "ASSET DELETED SUCCESSFULLY")
    }
	if(error) {
		alert(error);	
	}


	
	const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/assets/edit/${record.id}`}><EditFilled style={{color: "blue"}}/></Link>
				<DeleteFilled style={{color: "red"}} onClick={() => showDeleteConfirm(record.id)}/>
			</Space>
		),
	}]

	return (
		<Dashboard>
			<div className='text-center mb-3'>
                <h2 className='d-inline fs-4 fw-bold'>MANAGE ASSETS</h2>
                <div className='add-button'>
                    <Link to={`/assets/add`}><Button type="primary">ADD</Button></Link>
                </div>
            </div>
			<Table bordered columns={columns} dataSource={data?.assets} pagination={false} />
		</Dashboard>
	)
}

export default AssetsListing