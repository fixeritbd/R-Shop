import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Grid, Row } from "rsuite";

const GotoTrali = () => {
    let [images, setImages] = useState([])

    useEffect(() => {
        let imgData = async () => {
            let {data} = await axios.get("http://localhost:8000/gototralli")
            setImages(data)
        }

        imgData()

    }, [])

  return (
    <>
      <div className="tralli_full">
      <Grid fluid>
    <Row className="show-grid">
      {images.map((item, i) =>(
          <Col xs={4}>
              <img src={item.img} alt=""/>
          </Col>
      ))}
    </Row>
    </Grid>
      </div>
    </>
  );
};

export default GotoTrali;
