
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
        console.log(response);
        setMenuItems(response.data)
    }

    
    const navigate = (path) => {
        history.push(path)
    }

    const createMenu = () => {
        return menuItems.map((data, key) => <Card key={key} data={data}/>)
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