import { Card, Button, Input} from '@mantine/core';
import { useState } from 'react'

function Demo () {

    const [name, setName] = useState("")
    const [display, setDisplay] = useState([])

    const submit = () => {
        setDisplay([...display, name])
        console.log(display)
    }

    return (
    <>
        <Card>
            <div>Fruits: </div><br/>
            <Input variant="filled" size="md" placeholder="Input component" value={name} onChange= {(event) => {setName(event.target.value)}}/><br/>
            <Button variant="filled" onClick={submit}>Button</Button><br/>
            <div>{display}</div>
        </Card>
    </>)
}

export default Demo;