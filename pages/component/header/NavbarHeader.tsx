import type { NextPage } from 'next'
import { Col, Container, Grid, Row, Text } from '@nextui-org/react'

// interface HeaderLinks {
//   logo: string,
//   links: Array<LinkArray>,
// }
interface HeaderLinks {
  key: string,
  textLink: string,
  pathLink: string
}

const linkList: Array<HeaderLinks> = [
  {
    key: "logo-header",
    textLink: "Logo",
    pathLink: "LogoPath",
  },
  {
    key: "about-us-header",
    textLink: "About Us",
    pathLink: "AboutUsPath",
  },
  {
    key: "course-header",
    textLink: "Course",
    pathLink: "CoursePath",
  },
  {
    key: "event-header",
    textLink: "Event",
    pathLink: "EventPath",
  },
  {
    key: "talent-header",
    textLink: "Talent",
    pathLink: "TalentPath",
  },
  {
    key: "studio-rent-header",
    textLink: "Studio Rent",
    pathLink: "Studio RentPath",
  },
  {
    key: "contact-us-header",
    textLink: "Contact Us",
    pathLink: "Contact UsPath",
  },
  {
    key: "shop-header",
    textLink: "Shop",
    pathLink: "ShopPath",
  },
] 
const NavbarHeader: NextPage = () => {
  return (
    <Container responsive={false} fluid={true} lg gap={2}>
      <Row>
        <Col span={2}>
          {linkList[0].textLink}
        </Col>
        <Col span={10}>
          <Row gap={3}>
            {
              linkList.map(item => {
                if(item.textLink !== 'Logo') {
                  return (
                    <Text key={item.key}>
                      {item.textLink}
                    </Text>
                  )
                }
              })
            }
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default NavbarHeader