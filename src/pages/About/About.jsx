import { React } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import bdcusine from '../../assets/bangladeshi_cusine.jpg';
const About = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={12}>
            <img  src={bdcusine} alt="Bangladeshi Cuisine" className="shadow w-100 rounded mb-3" />
          </Col>

          <Col lg={12}>
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>About Bangladeshi Cuisine</Card.Title>
                <Card.Text>
                  Bangladeshi cuisine is a rich tapestry of flavors, textures,
                  and spices that reflects the country's diverse cultural
                  heritage and culinary traditions. It is deeply influenced by
                  the history, geography, and the availability of fresh
                  ingredients.
                </Card.Text>
                <Card.Text>
                  With a strong emphasis on rice, fish, and vegetables,
                  Bangladeshi cuisine offers a harmonious blend of flavors. The
                  traditional dishes range from hearty curries like biryani and
                  korma to flavorful lentil soups, known as dal. The vibrant use
                  of spices like turmeric, cumin, coriander, and mustard seeds
                  adds depth and complexity to the dishes.
                </Card.Text>
                <Card.Text>
                  The coastal regions of Bangladesh are renowned for their
                  delectable seafood dishes, featuring a variety of fish,
                  prawns, and crabs. The rivers and waterways that traverse the
                  country provide an abundant supply of freshwater fish, making
                  it an essential component of the cuisine.
                </Card.Text>
                <Card.Text>
                  Bangladesh is also famous for its mouthwatering desserts,
                  including creamy rice pudding (kheer), sweet syrup-soaked
                  sweets (mithai), and a variety of pithas (traditional cakes).
                  These sweets are often enjoyed during festive occasions and
                  celebrations.
                </Card.Text>
                <Card.Text>
                  Bangladeshi cuisine is not only a delightful culinary
                  experience but also a reflection of the country's warm
                  hospitality and vibrant culture. It invites you to savor the
                  flavors, explore the diverse dishes, and embark on a culinary
                  journey through the heart of Bangladesh.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
