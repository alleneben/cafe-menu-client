import { useState, useEffect } from 'react';


const useForm = (initialstate, validate, submitdata) => {
    const [values, setvalues] = useState(initialstate)
    const [errors, seterrors] = useState({})
    const [submitting, setsubmitting] = useState(false)
    const [invalid, setinvalid] = useState('')
    const [response, setReponse] = useState('')
    const [opacity, setopacity] = useState(1)



    useEffect(() => {

        if(submitting){
            const noerrors = Object.keys(errors).length === 0;       
            if(noerrors){

                submitdata(values)
                .then(response => {
                    setsubmitting(false)
                    setopacity(1)
                    if (response.status === 'success') {                                       
                        setvalues({})
                        setReponse(response)
                        setTimeout(() => {
                            setReponse({})
                        },3000)
                    } else {
                        // console.log(rd)
                        setinvalid(response[0])
                    }
                },err => {setsubmitting(false);setopacity(1);console.log(err)})
            } else {
                setsubmitting(false)
            }   
        }
    },[submitting,errors,opacity])

    const onChange = e => setvalues({...values, [e.target.name]: e.target.value})

    const onFileChange = e => {
        setvalues({...values, img_name: e.target.files[0].name, file: e.target.files[0] })
    }

    
    const handleblur = () => {
        const validationerrors = validate(values)
        seterrors(validationerrors)
    }

    const handleSubmit = (e,fn) => {
        
        e.preventDefault()

        setsubmitting(true);
        setopacity(0.3)
    }

    return { onChange,onFileChange, values, handleSubmit, handleblur, errors, response, submitting, invalid, opacity }

}


export default useForm;