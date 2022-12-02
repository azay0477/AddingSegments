import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import Select from "react-select";

var Data = [
    {
        value: "first_name",
        label: "First Name"
    }, {
        value: "last_name",
        label: "Last Name"
    }, {
        value: "gender",
        label: "Gender"
    }, {
        value: "age",
        label: "Age"
    }, {
        value: "account_name",
        label: "Account Name"
    }, {
        value: "city",
        label: "City"
    }, {
        value: "state",
        label: "State"
    },
]


export function SegmentData(props) {
    const [firstDdItem, setfirstDdItem] = useState({})
    const [secondDdItem, setSecondDdItem] = useState({})
    const [thirdDdItem, setThirdDdItem] = useState({})
    const [forthDdItem, setForthDdItem] = useState({})
    const [fifthDdItem, setFifthDdItem] = useState({})
    const [sixthDdItem, setSixthDdItem] = useState({})
    const [seventhDdItem, setSeventhDdItem] = useState({})

    const [showSecondDd, setShowSecondDd] = useState(false)
    const [showThirdDd, setShowThirdDd] = useState(false)
    const [showForthDd, setShowForthDd] = useState(false)
    const [showFifthDd, setShowFifthDd] = useState(false)
    const [setSixthDd, setSetSixthDd] = useState(false)
    const [showSeventhDd, setShowSeventhDd] = useState(false)

    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])
    const [data5, setData5] = useState([])
    const [data6, setData6] = useState([])
    const [data7, setData7] = useState([])


    const showDropDownFunc = (e) => {
        e.preventDefault();

        let filteredData1 = Data.filter((item) => item.value != firstDdItem.value)
        setData2(filteredData1)

        let filteredData2 = filteredData1.filter((item) => item.value != secondDdItem.value)
        setData3(filteredData2)

        let filteredData3 = filteredData2.filter((item) => item.value != thirdDdItem.value)
        setData4(filteredData3)

        let filteredData4 = filteredData3.filter((item) => item.value != forthDdItem.value)
        setData5(filteredData4)

        let filteredData5 = filteredData4.filter((item) => item.value != fifthDdItem.value)
        setData6(filteredData5)

        let filteredData6 = filteredData5.filter((item) => item.value != sixthDdItem.value)
        setData7(filteredData6)


        if (Object.getOwnPropertyNames(firstDdItem).length) setShowSecondDd(true);
        if (Object.getOwnPropertyNames(secondDdItem).length) setShowThirdDd(true);
        if (Object.getOwnPropertyNames(thirdDdItem).length) setShowForthDd(true);
        if (Object.getOwnPropertyNames(forthDdItem).length) setShowFifthDd(true);
        if (Object.getOwnPropertyNames(fifthDdItem).length) setSetSixthDd(true);
        if (Object.getOwnPropertyNames(sixthDdItem).length) setShowSeventhDd(true);
    }

    useEffect(() => {

    }, [firstDdItem, secondDdItem, thirdDdItem, forthDdItem])

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton className="modalheadcolor">
                    <Modal.Title className="btnfont" id="contained-modal-title-vcenter">
                        Save  Segment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalbodycolor">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="fornLabel">Enter Your Segment</Form.Label>
                            <Form.Control
                                type="Text"
                                placeholder="Your Segment"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1" >

                            <Select placeholder="Add schema to segment" options={Data} onChange={setfirstDdItem} />
                            {showSecondDd && <Select placeholder="Add schema to segment" options={data2} onChange={setSecondDdItem} />}
                            {showThirdDd && <Select placeholder="Add schema to segment" options={data3} onChange={setThirdDdItem} />}
                            {showForthDd && <Select placeholder="Add schema to segment" options={data4} onChange={setForthDdItem} />}
                            {showFifthDd && <Select placeholder="Add schema to segment" options={data5} onChange={setFifthDdItem} />}
                            {setSixthDd && <Select placeholder="Add schema to segment" options={data6} onChange={setSixthDdItem} />}
                            {showSeventhDd && <Select placeholder="Add schema to segment" options={data7} onChange={setSeventhDdItem} />}

                            <a href="" onClick={showDropDownFunc}>+ Add New Schema</a>

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="modalfooter">
                    <Button className="btn btn-primary" onClick={props.onHide}>Save The Segment</Button>
                    <Button className="btn btn-secondary" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}