import React, { useEffect, useState } from "react";
import { Container, Button, Grid, Row, Col } from "rsuite";
import axios from "axios";

export default function Deal() {
<<<<<<< HEAD
  let [deal, setDeal] = useState([]);

  useEffect(() => {
    let delData = async () => {
      let data = await axios.get("http://localhost:8000/deal");
      setDeal(data.data);
    };

    delData();
  }, []);

  return (
    <Container className="container deal-part">
      <Grid>
        <Row className="show-grid" gutter={30}>
          {deal.map((item, index) => (
            <Col xs={12}>
              <div className="dealImg" style={{ backgroundImage: `url(${item.img})` }}>
                <h5>{item.subheading}</h5>
                <h2>{item.heading}</h2>
                <Button className={`deal-btn${index}`}>{item.button}</Button>
              </div>
            </Col>
          ))}
        </Row>
      </Grid>
    </Container>
  );
=======

    let [deal, setDeal] = useState([])


    useEffect(() => {
        let delData = async () => {
            let data = await axios.get("http://localhost:8000/deal")
            setDeal(data.data)
        }

        delData()

    }, [])

console.log(deal);
    return (
        <Container className='container deal-part'>
            <Grid>
                <Row className="show-grid" gutter={30}>
                    {
                        deal.map((item, index) => (
                            <Col xs={12}>
                                <div className='dealImg' style={{ backgroundImage: `url(${item.img})` }}>
                                    <h5>{item.subheading}</h5>
                                    <h2>{item.heading}</h2>
                                    <Button className={`deal-btn${index}`}>{item.button}</Button>
                                </div>
                            </Col>

                        ))
                    }
                </Row>
            </Grid>
        </Container>
    )
>>>>>>> 0f0355ce0d0d76582fc1e1fd94deca902f5f513a
}
