
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button, Container, Content } from '../../components';
import styles from './menu-page.module.scss';

const MenuPage = () => {
    const [menuItems, setMenuItems] = useState([])
    const history = useHistory()
    
    useEffect(() => {
        fetchItems()
    },[])


    const fetchItems = async () => {

        let response = await fetch('http://localhost:8000/api/v1/menuitems')
        response = await response.json()
        setMenuItems(response.data)
    }

    
    const navigate = (path) => {
        history.push(path)
    }

    const onEdit = (data) => {
        history.push(`/edit/${data.id}`)
    }

    const onDelete = async (data) => {
        let postdata = {
            method: 'delete'
        }
        let response = await fetch(`http://localhost:8000/api/v1/menuitems/${data.id}`,postdata)
        response = await response.json()
        fetchItems()
        
    }

    const createMenu = () => {
        return menuItems.map((data, key) => <Card key={key} data={data} onEdit={() => onEdit(data)} onDelete={() => onDelete(data)}/>)
    }
    return(

        <Container>
            <div className={styles.header}>
                <div>Menu</div>
                <Button text="Add menu item" onClick={() => navigate('/add')}/>
            </div>
            <Content>
                {  createMenu() }
            </Content>
        </Container>
    )
}


export default MenuPage;