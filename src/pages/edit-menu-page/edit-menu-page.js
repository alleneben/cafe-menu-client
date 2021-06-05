import { Button, Container, Content, Field, Message } from '../../components';
import useForm from '../../hooks/useform';
import validateform from '../../hooks/validateform';



const EditMenuPage = () => {
    const { onChange,onFileChange, values, handleSubmit,response } = useForm({},validateform,submitdata)
    let type = [{id: 1, name: 'Main Course'}, {id:2, name: 'Side'}] //TODO:: Fetch values from database 

    async function submitdata(){
        try {
            let postdata = {
                method: 'post', 
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            let response = await fetch('http://localhost:8000/api/v1/menuitems',postdata)
            response = await response.json()
            return response
        } catch (error) {
            
        }
    } 

    return(
        <Container>
            <div>Edit Menu Item</div>
            <Content flex="column" style={{width: 300}}>
                {response && <Message text={response.message} type={response.status}/> } 
                <form onSubmit={handleSubmit}>
                    <Field label="Type" name="typeid" data={type} fieldtype="select" onChange={onChange} value={ values.typeid || ''}/>
                    <Field label="Name" name="name" fieldtype="input" type="text" onChange={onChange} value={ values.name || ''}/>
                    <Field label="Price" name="price" fieldtype="input" type="number" onChange={onChange} value={values.price || ''}/>
                    <Field label="Photo" name="img_name" fieldtype="upload" type="file" onChange={onFileChange} />
                    <Button text="Update Item" style={{width: 100}}/>
                </form>
            </Content>
        </Container>
    )
}

export default EditMenuPage;